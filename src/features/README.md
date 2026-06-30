# features/

도메인(기능) 단위 모듈. 한 기능에 필요한 컴포넌트·훅·API·타입을 한 폴더에 모은다.

```
features/
  card/        # 프롬프트 카드 (목록·상세)
  auth/        # 로그인 게이트
  search/      # 검색·필터
  upload/      # 업로드 폼
  ...
```

각 feature 내부 예시:

```
features/card/
  components/   # 이 기능 전용 컴포넌트
  hooks/        # 이 기능 전용 훅
  api/          # 이 기능 API 호출
  types.ts
```

> 여러 기능에서 공유하는 건 `features/` 가 아니라 `components/`, `hooks/`, `lib/` 로.
