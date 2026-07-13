"use client";

import { useState } from "react";
import { CopyIcon, HeartIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";

import { DemoSection } from "../demo-section";

const VARIANT_CODE = `
import { Button } from "@/components/ui/button";

<Button>브랜드 (기본)</Button>
<Button variant="neutral">중립</Button>
<Button variant="outline">아웃라인</Button>
<Button variant="ghost">고스트</Button>
<Button variant="destructive">삭제</Button>
<Button variant="link">링크</Button>
<Button disabled>비활성</Button>
`;

const SIZE_CODE = `
<Button size="sm">작게</Button>
<Button size="default">기본</Button>
<Button size="lg">크게</Button>
<Button size="icon" aria-label="복사">
  <CopyIcon />
</Button>
<Button disabled>
  <Spinner /> 저장 중…
</Button>
`;

const CHIP_CODE = `
// IA의 "필터 (직군/태스크)" — neutral 버튼 + aria-pressed 로 선택 상태 표현
// 선택 색은 Interaction/Neutral/selected (red-400/25%) 토큰이 자동 적용됩니다.
const [selected, setSelected] = useState<string[]>([]);

{["개발", "디자인", "마케팅", "기획"].map((job) => (
  <Button
    key={job}
    variant="neutral"
    size="sm"
    aria-pressed={selected.includes(job)}
    onClick={() => toggle(job)}
  >
    {job}
  </Button>
))}
`;

export function ButtonSection() {
  const [selected, setSelected] = useState<string[]>(["디자인"]);
  const [liked, setLiked] = useState(false);

  const toggle = (job: string) =>
    setSelected((prev) => (prev.includes(job) ? prev.filter((j) => j !== job) : [...prev, job]));

  return (
    <div className="space-y-10">
      <DemoSection
        id="button-variants"
        title="Button — variant"
        description="색상은 디자인 시스템 Interaction 토큰(brand: 500→hover 400→pressed 600, neutral: gray-200→white→gray-300)을 따릅니다. 눌러보면 pressed 색 변화를 확인할 수 있어요."
        code={VARIANT_CODE}
      >
        <Button>브랜드 (기본)</Button>
        <Button variant="neutral">중립</Button>
        <Button variant="outline">아웃라인</Button>
        <Button variant="ghost">고스트</Button>
        <Button variant="destructive">삭제</Button>
        <Button variant="link">링크</Button>
        <Button disabled>비활성</Button>
      </DemoSection>

      <DemoSection
        id="button-sizes"
        title="Button — size · 아이콘 · 로딩"
        description="크기는 아직 컴포넌트 시안이 없어 초안값입니다. 아이콘 버튼(복사·추천 등)과 로딩 상태 조합 예시."
        code={SIZE_CODE}
      >
        <Button size="sm">작게</Button>
        <Button size="default">기본</Button>
        <Button size="lg">크게</Button>
        <Button size="icon" aria-label="복사">
          <CopyIcon />
        </Button>
        <Button
          variant="neutral"
          size="icon"
          aria-label="추천"
          aria-pressed={liked}
          onClick={() => setLiked((v) => !v)}
        >
          <HeartIcon className={liked ? "fill-red-500 text-red-500" : undefined} />
        </Button>
        <Button disabled>
          <Spinner /> 저장 중…
        </Button>
      </DemoSection>

      <DemoSection
        id="button-chips"
        title="필터 칩 (직군/태스크)"
        description="IA의 탐색 > 필터 유스케이스. neutral variant + aria-pressed 로 선택 상태(red-400/25%)를 표현합니다."
        code={CHIP_CODE}
      >
        {["개발", "디자인", "마케팅", "기획"].map((job) => (
          <Button
            key={job}
            variant="neutral"
            size="sm"
            aria-pressed={selected.includes(job)}
            onClick={() => toggle(job)}
          >
            {job}
          </Button>
        ))}
        <span className="text-caption-1 text-text-disabled">
          선택됨: {selected.length ? selected.join(", ") : "없음"}
        </span>
      </DemoSection>
    </div>
  );
}
