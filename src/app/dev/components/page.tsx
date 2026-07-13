import type { Metadata } from "next";

import { ButtonSection } from "./sections/button-section";
import { FeedbackSection } from "./sections/feedback-section";
import { InputSection } from "./sections/input-section";
import { OverlaySection } from "./sections/overlay-section";
import { TokenSection } from "./sections/token-section";

export const metadata: Metadata = {
  title: "공통 컴포넌트 갤러리 | PromSearch Dev",
  robots: { index: false },
};

const TOC = [
  ["#tokens", "디자인 토큰"],
  ["#button-variants", "Button"],
  ["#input-search", "Input · Select"],
  ["#overlay-dialog", "Dialog · Dropdown"],
  ["#feedback-badge", "Badge · Spinner · Icon"],
] as const;

/**
 * 개발용 공통 컴포넌트 갤러리.
 * 컴포넌트 시안 확정 전 초안 상태 — 기능/접근성 위주로 동작을 확인하는 페이지입니다.
 */
export default function ComponentsGalleryPage() {
  return (
    <div className="min-h-dvh bg-bg-primary">
      <header className="sticky top-0 z-40 border-b border-stroke-secondary bg-bg-primary/90 backdrop-blur">
        <div className="mx-auto flex max-w-4xl flex-wrap items-center gap-x-6 gap-y-2 px-6 py-3">
          <h1 className="text-title-1 text-text-primary">
            공통 컴포넌트 갤러리
            <span className="ml-2 rounded bg-brand-tint px-1.5 py-0.5 text-caption-1 text-text-brand">
              초안
            </span>
          </h1>
          <nav className="flex flex-wrap gap-x-4 gap-y-1">
            {TOC.map(([href, label]) => (
              <a
                key={href}
                href={href}
                className="text-title-3 text-text-secondary hover:text-text-brand"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-4xl space-y-10 px-6 py-10">
        <p className="rounded-lg border border-stroke-secondary bg-bg-elevated p-4 text-body-2 text-text-secondary">
          디자이너 컴포넌트 시안 확정 전의 <strong className="text-text-primary">초안</strong>
          입니다. 색·타이포는 디자인 시스템 토큰이 이미 적용돼 있고, 세부 수치(크기·radius·간격)는
          시안이 나오면 <code className="font-mono">src/components/ui/</code> 만 수정하면 사용처에
          일괄 반영됩니다. 각 예시의 &ldquo;코드 보기&rdquo;를 열면 그대로 복사해 쓸 수 있어요.
        </p>

        <TokenSection />
        <ButtonSection />
        <InputSection />
        <OverlaySection />
        <FeedbackSection />
      </main>
    </div>
  );
}
