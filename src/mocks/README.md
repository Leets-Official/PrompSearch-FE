# mocks/

MSW(Mock Service Worker) 기반 API 목. **개발(브라우저)과 테스트(Node)에서 핸들러를 공유**한다.

```
mocks/
  handlers.ts   # 공유 핸들러 (요청 → 목 응답)
  browser.ts    # 개발용 워커 (setupWorker)
  server.ts     # 테스트용 서버 (setupServer) — Vitest setup 에서 사용
```

- BE 스펙 확정 전 `handlers.ts` 에 응답을 정의해 화면을 병렬 개발한다.
- 테스트는 `vitest.setup.ts` 에서 `server` 를 켜고, 각 테스트에서 핸들러를 오버라이드할 수 있다.
- 브라우저에서 켜려면 `public/mockServiceWorker.js`(이미 생성됨) + `browser.ts` 의 안내 참고.
