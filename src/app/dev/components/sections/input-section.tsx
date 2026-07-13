"use client";

import { SearchIcon } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

import { DemoSection } from "../demo-section";

const SEARCH_CODE = `
import { SearchIcon } from "lucide-react";
import { Input } from "@/components/ui/input";

// IA의 "검색 바" — 아이콘은 래퍼에 절대 배치
<div className="relative w-full max-w-sm">
  <SearchIcon className="absolute top-1/2 left-2.5 size-4 -translate-y-1/2 text-text-disabled" />
  <Input type="search" placeholder="아웃풋으로 검색해 보세요" className="pl-8" />
</div>
`;

const FORM_CODE = `
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

// 업로드 폼 필드 — Label 의 htmlFor 와 Input 의 id 를 반드시 연결
<div className="grid w-full max-w-sm gap-1.5">
  <Label htmlFor="title">제목</Label>
  <Input id="title" placeholder="프롬프트 제목" />
</div>

<div className="grid w-full max-w-sm gap-1.5">
  <Label htmlFor="prompt">프롬프트 본문</Label>
  <Textarea id="prompt" placeholder="프롬프트 내용을 붙여넣으세요" />
</div>

// 에러 상태는 aria-invalid 로 (react-hook-form 연동 시 자동)
<Input aria-invalid placeholder="제목을 입력해 주세요" />
`;

const SELECT_CODE = `
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

<Select>
  <SelectTrigger className="w-40">
    <SelectValue placeholder="직군 선택" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="dev">개발</SelectItem>
    <SelectItem value="design">디자인</SelectItem>
    <SelectItem value="marketing">마케팅</SelectItem>
    <SelectItem value="pm">기획</SelectItem>
  </SelectContent>
</Select>
`;

export function InputSection() {
  return (
    <div className="space-y-10">
      <DemoSection
        id="input-search"
        title="검색 바"
        description="IA의 탐색 > 검색 바 유스케이스. 포커스 링은 brand 토큰(red-500)이 적용됩니다."
        code={SEARCH_CODE}
      >
        <div className="relative w-full max-w-sm">
          <SearchIcon className="absolute top-1/2 left-2.5 size-4 -translate-y-1/2 text-text-disabled" />
          <Input type="search" placeholder="아웃풋으로 검색해 보세요" className="pl-8" />
        </div>
      </DemoSection>

      <DemoSection
        id="input-form"
        title="Input · Textarea · Label"
        description="업로드 폼(제목/본문 작성) 유스케이스. 에러 상태는 aria-invalid 속성으로 — react-hook-form 과 연동하면 자동으로 붙습니다."
        code={FORM_CODE}
      >
        <div className="grid w-full max-w-sm gap-1.5">
          <Label htmlFor="demo-title">제목</Label>
          <Input id="demo-title" placeholder="프롬프트 제목" />
        </div>
        <div className="grid w-full max-w-sm gap-1.5">
          <Label htmlFor="demo-prompt">프롬프트 본문</Label>
          <Textarea id="demo-prompt" placeholder="프롬프트 내용을 붙여넣으세요" />
        </div>
        <div className="grid w-full max-w-sm gap-1.5">
          <Label htmlFor="demo-error">에러 상태</Label>
          <Input id="demo-error" aria-invalid placeholder="제목을 입력해 주세요" />
        </div>
      </DemoSection>

      <DemoSection
        id="input-select"
        title="Select"
        description="업로드 폼의 태그(직군) 선택 유스케이스. 팝업은 포털로 떠서 z-index 걱정 없이 동작합니다."
        code={SELECT_CODE}
      >
        <Select>
          <SelectTrigger className="w-40">
            <SelectValue placeholder="직군 선택" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="dev">개발</SelectItem>
            <SelectItem value="design">디자인</SelectItem>
            <SelectItem value="marketing">마케팅</SelectItem>
            <SelectItem value="pm">기획</SelectItem>
          </SelectContent>
        </Select>
      </DemoSection>
    </div>
  );
}
