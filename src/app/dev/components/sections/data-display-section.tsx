import { CircleHelpIcon } from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { PromptCard } from "@/components/ui/prompt-card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Thumbnail } from "@/components/ui/thumbnail";

import { SpecCell, SpecGroup, SpecSection } from "./spec";

/**
 * Data Display 스펙 시트 (Figma Data Display 섹션 309:1875).
 * Tag · Card/Info · Card/Profile · Card/Prompt · Table · thumbnail · Profile(Avatar).
 */

const PROMPT_TAGS = ["직군", "AI모델", "태스크", "결과물 타입"];

export function DataDisplaySection() {
  return (
    <SpecSection id="data" label="Data Display">
      {/* Tag */}
      <SpecGroup title="Tag">
        <Badge>Placeholder</Badge>
      </SpecGroup>

      {/* Card/Info */}
      <SpecGroup title="Card / Info">
        <Card className="w-52 gap-2">
          <span className="flex items-center gap-1 text-title-3 text-text-secondary">
            보유 포인트 <CircleHelpIcon className="size-4 text-text-disabled" />
          </span>
          <span className="text-heading-1 text-text-primary">
            1,000 <span className="text-title-2 text-text-secondary">P</span>
          </span>
        </Card>
      </SpecGroup>

      {/* Card/Profile */}
      <SpecGroup title="Card / Profile">
        <Card className="w-full max-w-md flex-row items-center gap-4">
          <Avatar size="lg">
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
          <div className="flex flex-col gap-0.5">
            <span className="text-heading-2 text-text-primary">Username</span>
            <span className="text-body-1 text-text-secondary">email@gmail.com</span>
          </div>
        </Card>
      </SpecGroup>

      {/* Card/Prompt */}
      <SpecGroup title="Card / Prompt">
        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-3">
          {[0, 1, 2].map((i) => (
            <PromptCard key={i} title="프롬프트 제목을 쓰는 곳입니다" tags={PROMPT_TAGS} />
          ))}
        </div>
      </SpecGroup>

      {/* Table */}
      <SpecGroup title="Table">
        <Table className="max-w-md">
          <TableHeader>
            <TableRow>
              <TableHead>Header</TableHead>
              <TableHead>Header</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Cell</TableCell>
              <TableCell>Cell</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Cell</TableCell>
              <TableCell>Cell</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </SpecGroup>

      {/* thumbnail · Profile(Avatar) */}
      <SpecGroup title="thumbnail · Profile">
        <SpecCell label="thumbnail (16:9)" className="items-start">
          <Thumbnail className="w-72" />
        </SpecCell>
        <SpecCell label="sm">
          <Avatar size="sm">
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
        </SpecCell>
        <SpecCell label="md">
          <Avatar size="md">
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
        </SpecCell>
        <SpecCell label="lg">
          <Avatar size="lg">
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
        </SpecCell>
      </SpecGroup>
    </SpecSection>
  );
}
