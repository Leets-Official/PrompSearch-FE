"use client";

import {
  CopyIcon,
  GitForkIcon,
  HeartIcon,
  MessageCircleIcon,
  SearchIcon,
  UploadIcon,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Spinner } from "@/components/ui/spinner";

import { DemoSection } from "../demo-section";

const BADGE_CODE = `
import { Badge } from "@/components/ui/badge";

<Badge>NEW</Badge>
<Badge variant="secondary">#로고 디자인</Badge>
<Badge variant="outline">GPT-4o</Badge>
<Badge variant="destructive">신고됨</Badge>
`;

const SPINNER_CODE = `
import { Spinner } from "@/components/ui/spinner";

<Spinner />                    // 기본 16px
<Spinner className="size-6" /> // 크기는 size-* 로
<Spinner className="size-8 text-text-brand" />
`;

const ICON_CODE = `
import { CopyIcon, HeartIcon, GitForkIcon, MessageCircleIcon } from "lucide-react";

// 아이콘은 lucide-react 를 그대로 사용합니다 (별도 래퍼 없음).
// 크기는 size-*, 색은 text-* 토큰으로 제어.
<CopyIcon className="size-4 text-text-secondary" />
<HeartIcon className="size-4 text-text-brand" />
`;

const ICONS = [
  ["SearchIcon", SearchIcon, "검색"],
  ["CopyIcon", CopyIcon, "프롬프트 복사"],
  ["HeartIcon", HeartIcon, "추천"],
  ["MessageCircleIcon", MessageCircleIcon, "댓글"],
  ["GitForkIcon", GitForkIcon, "fork"],
  ["UploadIcon", UploadIcon, "업로드"],
] as const;

export function FeedbackSection() {
  return (
    <div className="space-y-10">
      <DemoSection
        id="feedback-badge"
        title="Badge"
        description="태그·상태 표시 유스케이스 (갤러리 카드의 직군/태스크 태그 등)."
        code={BADGE_CODE}
      >
        <Badge>NEW</Badge>
        <Badge variant="secondary">#로고 디자인</Badge>
        <Badge variant="outline">GPT-4o</Badge>
        <Badge variant="destructive">신고됨</Badge>
      </DemoSection>

      <DemoSection
        id="feedback-spinner"
        title="Spinner"
        description="로딩 표시. 버튼 안에 넣으면 자동으로 크기가 맞습니다 (Button 섹션 참고)."
        code={SPINNER_CODE}
      >
        <Spinner />
        <Spinner className="size-6" />
        <Spinner className="size-8 text-text-brand" />
      </DemoSection>

      <DemoSection
        id="feedback-icons"
        title="Icon (lucide-react)"
        description="별도 아이콘 컴포넌트 없이 lucide-react 를 그대로 씁니다. IA의 복사·추천·댓글·fork 액션에 대응하는 아이콘 예시."
        code={ICON_CODE}
      >
        {ICONS.map(([name, Icon, label]) => (
          <div key={name} className="flex flex-col items-center gap-1">
            <Icon className="size-5 text-text-secondary" />
            <span className="text-caption-1 text-text-disabled">{label}</span>
          </div>
        ))}
      </DemoSection>
    </div>
  );
}
