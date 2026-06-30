# analytics/

전환 측정 이벤트 레이어. **이 제품의 핵심**(아웃풋 우선 노출 → 전환 가설 검증)이라 별도 분리.

```
analytics/
  events.ts    # 이벤트 타입 정의 (card_impression, card_click, signup_complete ...)
  track.ts     # track() 래퍼 (fire-and-forget)
  client.ts    # 분석 SDK 연결 (PostHog/GA 등)
```

- 이벤트 properties 는 타입(discriminated union)으로 강제해 오타·누락을 컴파일 단계에서 차단.
- 비회원 `anonymous_id` → 가입 시 `user_id` 병합 로직 포함 예정.
