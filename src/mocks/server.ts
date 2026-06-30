import { setupServer } from "msw/node";
import { handlers } from "./handlers";

// Node 환경(Vitest 테스트)용 목 서버.
export const server = setupServer(...handlers);
