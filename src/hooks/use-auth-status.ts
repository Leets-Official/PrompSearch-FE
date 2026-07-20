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

export function useAuthStatus(): AuthStatus {
  return { status: "anonymous", isAuthenticated: false, user: null };
}
