import { setupWorker } from "msw/browser";
import { handlers } from "./handlers";

// 브라우저(개발) 환경용 목 워커.
// 개발에서 켜려면 클라이언트 진입부에서 다음을 호출:
//   if (process.env.NEXT_PUBLIC_API_MOCKING === "enabled") {
//     const { worker } = await import("@/mocks/browser");
//     await worker.start({ onUnhandledRequest: "bypass" });
//   }
export const worker = setupWorker(...handlers);
