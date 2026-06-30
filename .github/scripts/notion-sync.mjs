// PR 이벤트 → Notion 카드 상태 동기화
// 브랜치명(예: feat/PS-1)에서 티켓 번호를 뽑아, 해당 Notion 카드의 상태를 바꾼다.
//   PR 열림/재오픈  → 진행 중
//   PR 닫힘/머지    → 완료
// 의존성 없음 (Node 20+ 내장 fetch 사용).

const {
  NOTION_TOKEN,
  NOTION_DB_ID,
  BRANCH = "",
  PR_TITLE = "",
  PR_URL = "",
  PR_STATE = "", // "open" | "closed"
  MERGED = "false",
  // 아래는 워크플로우 env 에서 주입 (Notion DB 속성에 맞게 수정).
  NOTION_ID_PROP = "ID",
  NOTION_STATUS_PROP = "상태",
  NOTION_PR_PROP = "", // PR 링크를 저장할 URL 속성 이름 (없으면 생략)
  STATUS_IN_PROGRESS = "진행 중",
  STATUS_DONE = "완료",
  TICKET_PREFIX = "PS",
} = process.env;

const NOTION_API = "https://api.notion.com/v1";
const HEADERS = {
  Authorization: `Bearer ${NOTION_TOKEN}`,
  "Notion-Version": "2022-06-28",
  "Content-Type": "application/json",
};

function fail(msg) {
  console.error(`❌ ${msg}`);
  process.exit(1);
}

if (!NOTION_TOKEN || !NOTION_DB_ID) {
  fail("NOTION_TOKEN / NOTION_DB_ID 시크릿이 없습니다.");
}

// 1) 브랜치명 또는 PR 제목에서 티켓 번호 추출 (예: PS-1 → 1)
const pattern = new RegExp(`${TICKET_PREFIX}-(\\d+)`, "i");
const match = `${BRANCH} ${PR_TITLE}`.match(pattern);
if (!match) {
  console.log(
    `ℹ️ 브랜치/제목에서 ${TICKET_PREFIX}-번호를 못 찾음 → 건너뜀 (branch="${BRANCH}")`,
  );
  process.exit(0); // 티켓 없는 PR은 실패가 아니라 무시
}
const ticketNumber = Number(match[1]);
console.log(`🔎 티켓: ${TICKET_PREFIX}-${ticketNumber}`);

// 2) 목표 상태 결정
const isClosed = PR_STATE === "closed";
const targetStatus = isClosed ? STATUS_DONE : STATUS_IN_PROGRESS;
console.log(
  `➡️ PR 상태="${PR_STATE}" merged=${MERGED} → Notion 상태="${targetStatus}"`,
);

// 3) 고유 ID로 카드 검색
const queryRes = await fetch(`${NOTION_API}/databases/${NOTION_DB_ID}/query`, {
  method: "POST",
  headers: HEADERS,
  body: JSON.stringify({
    filter: {
      property: NOTION_ID_PROP,
      unique_id: { equals: ticketNumber },
    },
  }),
});

if (!queryRes.ok) {
  fail(`Notion 검색 실패 (${queryRes.status}): ${await queryRes.text()}`);
}

const { results } = await queryRes.json();
if (!results || results.length === 0) {
  fail(
    `${TICKET_PREFIX}-${ticketNumber} 카드를 못 찾음 (속성 이름 "${NOTION_ID_PROP}" 확인).`,
  );
}
const page = results[0];

// 4) 상태(+선택적으로 PR 링크) 업데이트
const properties = {
  [NOTION_STATUS_PROP]: { status: { name: targetStatus } },
};
if (NOTION_PR_PROP && PR_URL) {
  properties[NOTION_PR_PROP] = { url: PR_URL };
}

const patchRes = await fetch(`${NOTION_API}/pages/${page.id}`, {
  method: "PATCH",
  headers: HEADERS,
  body: JSON.stringify({ properties }),
});

if (!patchRes.ok) {
  fail(`Notion 업데이트 실패 (${patchRes.status}): ${await patchRes.text()}`);
}

console.log(`✅ ${TICKET_PREFIX}-${ticketNumber} → "${targetStatus}" 변경 완료`);
