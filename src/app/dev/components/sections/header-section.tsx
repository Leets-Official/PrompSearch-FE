import { BellIcon, PencilIcon } from "lucide-react";

import { AppHeader } from "@/components/ui/app-header";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";
import { SearchBar } from "@/components/ui/search-bar";

import { SpecCell, SpecGroup, SpecSection } from "./spec";

/**
 * Header 스펙 시트 (Figma Header 340:2585 · Logo 401:6038).
 * 시안 구성: [로고] · [검색바(넓게)] · [업로드 버튼] · [알림 벨] · [아바타].
 */
export function HeaderSection() {
  return (
    <SpecSection id="header" label="Header">
      {/* 상단 헤더 — 시안 그대로 */}
      <SpecGroup title="App Header" className="block p-0">
        <div className="w-full overflow-hidden rounded-lg border border-stroke-secondary">
          <AppHeader
            center={<SearchBar placeholder="Placeholder" className="max-w-2xl" />}
            end={
              <>
                <Button variant="ghost" size="sm">
                  <PencilIcon /> 업로드
                </Button>
                <Button variant="plain" size="icon" aria-label="알림">
                  <BellIcon />
                </Button>
                <Avatar size="sm">
                  <AvatarFallback>U</AvatarFallback>
                </Avatar>
              </>
            }
          />
        </div>
      </SpecGroup>

      {/* Logo variants */}
      <SpecGroup title="Logo">
        <SpecCell label="symbol">
          <Logo variant="symbol" />
        </SpecCell>
        <SpecCell label="horizontal">
          <Logo variant="horizontal" />
        </SpecCell>
        <SpecCell label="vertical">
          <Logo variant="vertical" />
        </SpecCell>
      </SpecGroup>
    </SpecSection>
  );
}
