"use client";

import type { UserStatus } from "@/analytics/events";

/**
 * 인증 상태 어댑터.
 *
 * 로그인/온보딩은 다른 팀원 담당이다. auth store/세션이 준비되기 전까지 이 훅은
 * 항상 비회원(anonymous)을 반환한다. 실제 인증 소스가 생기면 **이 훅 내부만** 교체하면,
 * 헤더 분기(로그인 버튼 ↔ 프로필)와 analytics `user_status` 가 자동으로 따라간다.
 */
export type AuthUser = {
  name: string;
  avatarUrl?: string;
};

export type AuthStatus = {
  status: UserStatus; // "anonymous" | "authenticated"
  isAuthenticated: boolean;
  user: AuthUser | null;
};

/**
 * dev 전용 미리보기 토글. 실제 auth 소스가 없는 동안 로그인 헤더(알림+프로필)를
 * 눈으로 확인하려고 둔 것. `.env.development` 에서 `NEXT_PUBLIC_MOCK_AUTH=authenticated`
 * 로 켜면 회원 상태가 된다(기본은 꺼져 있어 비회원). public env 라 서버/클라 값이 같아
 * hydration 불일치가 없다. 실제 인증이 붙으면 이 분기와 플래그를 함께 제거한다.
 */
const MOCK_AUTHENTICATED = process.env.NEXT_PUBLIC_MOCK_AUTH === "authenticated";

const MOCK_USER: AuthUser = { name: "홍길동" };

export function useAuthStatus(): AuthStatus {
  if (MOCK_AUTHENTICATED) {
    return { status: "authenticated", isAuthenticated: true, user: MOCK_USER };
  }
  return { status: "anonymous", isAuthenticated: false, user: null };
}
