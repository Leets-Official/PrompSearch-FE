import { isServer, QueryClient } from "@tanstack/react-query";

// TanStack Query 클라이언트 생성/관리
// - 서버: 요청마다 새 클라이언트 (요청 간 데이터 격리)
// - 브라우저: 싱글톤 재사용 (캐시 유지)
// 참고: https://tanstack.com/query/latest/docs/framework/react/guides/advanced-ssr

function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        // 1분간은 fetch 후 stale 처리 안 함 (불필요한 재요청 방지)
        staleTime: 60 * 1000,
      },
    },
  });
}

let browserQueryClient: QueryClient | undefined;

export function getQueryClient() {
  if (isServer) {
    return makeQueryClient();
  }
  browserQueryClient ??= makeQueryClient();
  return browserQueryClient;
}
