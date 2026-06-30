import { render, screen } from "@testing-library/react";
import { Button } from "@/components/ui/button";

describe("Button", () => {
  it("children 을 버튼으로 렌더한다", () => {
    render(<Button>클릭</Button>);
    expect(screen.getByRole("button", { name: "클릭" })).toBeInTheDocument();
  });
});
