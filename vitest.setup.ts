import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { afterAll, afterEach, beforeAll } from "vitest";
import { server } from "@/mocks/server";

// MSW 목 서버: 테스트 전체에서 1회 켜고, 각 테스트 후 핸들러 초기화.
beforeAll(() => server.listen({ onUnhandledRequest: "error" }));
afterEach(() => {
  cleanup(); // React Testing Library DOM 정리
  server.resetHandlers();
});
afterAll(() => server.close());
