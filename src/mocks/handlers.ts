import { http, HttpResponse } from "msw";

// API 목 핸들러. 브라우저(개발)와 Node(테스트)에서 공유한다.
// BE 스펙이 나오기 전 여기에 응답을 정의해 병렬 개발한다.
export const handlers = [
  // 동작 확인용 샘플 — 실제 핸들러로 교체/추가하세요.
  http.get("/api/health", () => HttpResponse.json({ ok: true })),
];
