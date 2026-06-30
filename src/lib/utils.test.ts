import { cn } from "@/lib/utils";

describe("cn", () => {
  it("클래스 이름을 합친다", () => {
    expect(cn("a", "b")).toBe("a b");
  });

  it("충돌하는 Tailwind 클래스는 뒤의 것이 이긴다", () => {
    expect(cn("px-2", "px-4")).toBe("px-4");
  });

  it("falsy 값은 무시한다", () => {
    expect(cn("a", false, undefined, "b")).toBe("a b");
  });
});
