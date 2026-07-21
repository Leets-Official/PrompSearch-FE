"use client";

import { Sidebar, SidebarGroupLabel, SidebarMenu, SidebarMenuItem } from "@/components/ui/sidebar";
import { JOB_CATEGORIES } from "@/features/gallery/categories";
import { useGalleryFilters } from "@/features/gallery/hooks/use-gallery-filters";

/**
 * 좌측 카테고리 사이드바.
 * - 홈 / 인기 프롬프트 (nav)
 * - 직군별: 학생/직장인/기획자/디자이너/개발자/자영업자 (nav=job)
 *
 * 직군 클릭은 해당 직군으로 필터링된 갤러리로 전환하는 느낌(라우팅형)이며,
 * 상단 필터와 AND 로 결합된다.
 */
export function CategoryNav() {
  const { query, setNav, selectJob } = useGalleryFilters();

  return (
    <Sidebar>
      <SidebarMenu>
        <SidebarMenuItem active={query.nav === "home"} onClick={() => setNav("home")}>
          홈
        </SidebarMenuItem>
        <SidebarMenuItem active={query.nav === "popular"} onClick={() => setNav("popular")}>
          인기 프롬프트
        </SidebarMenuItem>
      </SidebarMenu>

      <div className="flex flex-col">
        <SidebarGroupLabel>직군별</SidebarGroupLabel>
        <SidebarMenu>
          {JOB_CATEGORIES.map((job) => (
            <SidebarMenuItem
              key={job.value}
              size="sm"
              active={query.nav === "job" && query.job === job.value}
              onClick={() => selectJob(job.value)}
            >
              {job.label}
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </div>
    </Sidebar>
  );
}
