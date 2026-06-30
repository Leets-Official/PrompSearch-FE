import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react()],
  // @/* 경로 별칭을 tsconfig 에서 네이티브로 해석
  resolve: { tsconfigPaths: true },
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./vitest.setup.ts"],
    css: true,
    // 빌드 산출물/E2E 등은 vitest 대상에서 제외
    exclude: ["node_modules", ".next", "e2e", "**/*.spec.ts"],
  },
});
