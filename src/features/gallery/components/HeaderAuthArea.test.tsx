import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { HeaderAuthArea } from "@/features/gallery/components/HeaderAuthArea";

vi.mock("next/link", () => ({
  default: ({ href, children }: { href: string; children?: React.ReactNode }) => (
    <a href={href}>{children}</a>
  ),
}));

describe("HeaderAuthArea", () => {
  it("비회원이면 로그인 버튼만 노출한다", () => {
    render(<HeaderAuthArea isAuthenticated={false} user={null} />);

    const login = screen.getByRole("link", { name: "로그인" });
    expect(login).toHaveAttribute("href", "/login");
    // 부정: 비회원에겐 알림/프로필이 없어야 한다
    expect(screen.queryByLabelText("알림")).not.toBeInTheDocument();
  });

  it("회원이면 알림 + 프로필을 노출하고 로그인 버튼은 없다", () => {
    render(<HeaderAuthArea isAuthenticated user={{ name: "홍길동" }} />);

    expect(screen.getByLabelText("알림")).toBeInTheDocument();
    expect(screen.getByText("홍")).toBeInTheDocument(); // 아바타 fallback 이니셜
    // 부정: 회원에겐 로그인 버튼이 없어야 한다
    expect(screen.queryByRole("link", { name: "로그인" })).not.toBeInTheDocument();
  });
});
