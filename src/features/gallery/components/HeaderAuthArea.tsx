import Link from "next/link";
import { BellIcon } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import type { AuthUser } from "@/hooks/use-auth-status";

/**
 * 헤더 우측 인증 영역 (홈 스코프의 유일한 권한 표시 분기).
 * - 비회원 → 로그인 버튼
 * - 회원   → 알림 + 프로필 아바타
 *
 * 순수 표시 컴포넌트(인증 상태를 prop 으로 받음)라 두 상태를 단독 테스트할 수 있다.
 * 로그인 경로(/login)·프로필 메뉴는 auth/마이페이지 담당의 후속 작업.
 */
type HeaderAuthAreaProps = {
  isAuthenticated: boolean;
  user: AuthUser | null;
};

export function HeaderAuthArea({ isAuthenticated, user }: HeaderAuthAreaProps) {
  if (!isAuthenticated || !user) {
    return (
      // render 로 <a>(Link) 를 쓰므로 nativeButton=false. 시안 헤더 버튼 높이 h-48(size lg)
      <Button variant="ghost" size="lg" nativeButton={false} render={<Link href="/login" />}>
        로그인
      </Button>
    );
  }

  return (
    <>
      {/* 시안(340:2569): 알림은 Button/Icon 44x44(아이콘 24 + 패딩 10, 배경 없음 → plain). */}
      <Button variant="plain" size="icon" aria-label="알림">
        <BellIcon />
      </Button>
      {/* 시안 Profile(223:154): 44px 원형 아바타 = Avatar 기본 size(md) */}
      <Avatar>
        {user.avatarUrl ? <AvatarImage src={user.avatarUrl} alt={user.name} /> : null}
        <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
      </Avatar>
    </>
  );
}
