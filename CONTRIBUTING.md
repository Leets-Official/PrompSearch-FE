# 기여 가이드 (개발 컨벤션)

프롬써치 FE 팀 협업 규칙입니다. **PR 전에 한 번 읽어주세요.**

## 1. 처음 세팅

```bash
nvm use            # .nvmrc 의 Node 버전 사용 (20.19.5)
corepack enable    # pnpm 활성화
pnpm install       # 의존성 설치 (+ husky 훅 자동 설치)
pnpm dev           # 개발 서버
```

> VSCode를 쓰면 권장 확장(Prettier / ESLint / Tailwind / EditorConfig) 설치 안내가 떠요. 설치하면 **저장 시 자동 포맷**됩니다.

## 2. 브랜치 전략 (GitHub Flow)

- `main` 은 항상 배포 가능한 상태로 유지합니다.
- **`main` 에 직접 push 하지 않습니다.** 모든 변경은 브랜치 → PR → 머지.
- 작업은 `main` 에서 새 브랜치를 따서 진행합니다.

### 브랜치 이름

```
type/PS-<노션티켓번호>-<짧은설명>     # 예: feat/PS-12-login-modal
type/#<이슈번호>-<짧은설명>          # 예: fix/#34-card-impression
```

- `type` 은 아래 커밋 타입과 동일하게 사용합니다 (`feat`, `fix`, `refactor` ...).
- 설명은 영어 소문자 + 하이픈(`-`)으로 짧게.

## 3. 커밋 컨벤션 (Conventional Commits)

> ⚙️ **자동 검사됨** — 형식이 틀리면 커밋이 거부됩니다 (husky `commit-msg` + commitlint).

```
<type>: <제목>

예)
feat: 로그인 모달 추가
fix: 카드 impression 중복 카운트 수정
refactor: 갤러리 카드 컴포넌트 분리
```

- `<type>:` 뒤에 **공백 한 칸**, 제목은 **한국어 OK**, 끝에 **마침표 금지**.
- 제목은 "무엇을 했는지" 명령형으로 간결하게.

| type       | 설명                                   |
| ---------- | -------------------------------------- |
| `feat`     | 새로운 기능                            |
| `fix`      | 버그 수정                              |
| `refactor` | 리팩토링 (기능 변화 없음)              |
| `design`   | UI / 스타일                            |
| `docs`     | 문서                                   |
| `test`     | 테스트 추가/수정                       |
| `chore`    | 설정 · 빌드 · 기타                     |
| `setup`    | 프로젝트 환경 설정                     |
| `style`    | 포맷/세미콜론 등 (코드 의미 변화 없음) |
| `perf`     | 성능 개선                              |
| `ci`       | CI 설정                                |
| `revert`   | 되돌리기                               |

## 4. PR 규칙

- PR 템플릿이 자동으로 채워집니다 — 작업 유형 체크 + 체크리스트 + 관련 이슈 연결.
- PR 제목도 커밋과 동일하게 `type: 제목` 형식 권장.
- **최소 1명 이상 승인** 후 머지합니다.
- 관련 이슈/티켓을 본문에 연결합니다 (`close #12`).
- 머지 전 `pnpm lint` / `pnpm typecheck` 통과 확인.

## 5. 코드 스타일

직접 신경 쓸 필요 없이 **자동으로 맞춰집니다.**

- **Prettier** = 서식(들여쓰기/따옴표/줄바꿈/Tailwind 클래스 정렬)
- **ESLint** = 코드 품질
- 저장 시 자동 적용 + 커밋 시 `lint-staged` 가 스테이징된 파일을 자동 정리.

```bash
pnpm format        # 전체 포맷
pnpm lint:fix      # 린트 자동 수정
pnpm typecheck     # 타입 검사
```
