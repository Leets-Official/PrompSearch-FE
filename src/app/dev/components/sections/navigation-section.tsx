"use client";

import { useState } from "react";

import { PaginationRoot } from "@/components/ui/pagination";
import { Sidebar, SidebarGroupLabel, SidebarMenu, SidebarMenuItem } from "@/components/ui/sidebar";

import { SpecCell, SpecGroup, SpecSection } from "./spec";

/**
 * Navigation 스펙 시트 (Figma Navigation 섹션 401:5929).
 * Side bar/Menu 상태(default/pressed/selected) + 전체 Side bar 예시 + Pagination.
 */

// 직군 목록 (Figma Side bar type=home)
const JOBS = ["학생", "직장인", "기획자", "개발자", "디자이너", "자영업자"];

export function NavigationSection() {
  const [page, setPage] = useState(1);
  const [active, setActive] = useState("home");

  return (
    <SpecSection id="navigation" label="Navigation">
      {/* Side bar / Menu — 상태 */}
      <SpecGroup
        title="Side bar / Menu (default / pressed / selected)"
        className="flex-col items-start gap-6"
      >
        <div className="flex flex-wrap gap-8">
          <SpecCell label="default" className="w-40 items-stretch">
            <SidebarMenuItem>Tab Name</SidebarMenuItem>
          </SpecCell>
          <SpecCell label="pressed" className="w-40 items-stretch">
            <SidebarMenuItem className="bg-bg-secondary">Tab Name</SidebarMenuItem>
          </SpecCell>
          <SpecCell label="selected" className="w-40 items-stretch">
            <SidebarMenuItem active>Tab Name</SidebarMenuItem>
          </SpecCell>
        </div>
      </SpecGroup>

      {/* 전체 Side bar */}
      <SpecGroup title="Side bar">
        <Sidebar>
          <SidebarMenu>
            <SidebarMenuItem active={active === "home"} onClick={() => setActive("home")}>
              홈
            </SidebarMenuItem>
            <SidebarMenuItem active={active === "popular"} onClick={() => setActive("popular")}>
              인기 프롬프트
            </SidebarMenuItem>
          </SidebarMenu>

          <div>
            <SidebarGroupLabel>직군별</SidebarGroupLabel>
            <SidebarMenu>
              {JOBS.map((job) => (
                <SidebarMenuItem
                  key={job}
                  size="sm"
                  active={active === job}
                  onClick={() => setActive(job)}
                >
                  {job}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </div>

          <div>
            <SidebarGroupLabel>프로필</SidebarGroupLabel>
            <SidebarMenu>
              <SidebarMenuItem active={active === "revenue"} onClick={() => setActive("revenue")}>
                수익
              </SidebarMenuItem>
              <SidebarMenuItem active={active === "settings"} onClick={() => setActive("settings")}>
                설정
              </SidebarMenuItem>
            </SidebarMenu>
          </div>
        </Sidebar>
      </SpecGroup>

      {/* Pagination */}
      <SpecGroup title="Pagination">
        <PaginationRoot page={page} pageCount={5} onPageChange={setPage} />
      </SpecGroup>
    </SpecSection>
  );
}
