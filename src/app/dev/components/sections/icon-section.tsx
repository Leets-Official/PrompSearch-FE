import {
  BellIcon,
  CheckIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronUpIcon,
  CircleAlertIcon,
  CircleHelpIcon,
  CopyIcon,
  CrownIcon,
  HomeIcon,
  ImageIcon,
  type LucideIcon,
  LockIcon,
  MenuIcon,
  PencilIcon,
  SearchIcon,
  SettingsIcon,
  XIcon,
} from "lucide-react";

import { SpecGroup, SpecSection } from "./spec";

/**
 * Icon 스펙 시트 (Figma Icon 섹션 309:1900).
 * 디자이너 아이콘 세트를 lucide-react 로 1:1 매핑(별도 아이콘 컴포넌트 없이 사용).
 */
const ICONS: [string, LucideIcon][] = [
  ["lock", LockIcon],
  ["x", XIcon],
  ["pencil", PencilIcon],
  ["chevron-left", ChevronLeftIcon],
  ["chevron-right", ChevronRightIcon],
  ["chevron-up", ChevronUpIcon],
  ["chevron-down", ChevronDownIcon],
  ["check", CheckIcon],
  ["alert", CircleAlertIcon],
  ["bell", BellIcon],
  ["search", SearchIcon],
  ["home", HomeIcon],
  ["setting", SettingsIcon],
  ["help", CircleHelpIcon],
  ["crown", CrownIcon],
  ["image", ImageIcon],
  ["menu", MenuIcon],
  ["copy", CopyIcon],
];

export function IconSection() {
  return (
    <SpecSection id="icon" label="Icon">
      <SpecGroup title="lucide-react (24px)">
        <div className="grid grid-cols-4 gap-x-6 gap-y-5 sm:grid-cols-6">
          {ICONS.map(([name, Icon]) => (
            <div key={name} className="flex flex-col items-center gap-1.5">
              <Icon className="size-6 text-text-primary" />
              <span className="text-caption-1 text-text-disabled">{name}</span>
            </div>
          ))}
        </div>
      </SpecGroup>
    </SpecSection>
  );
}
