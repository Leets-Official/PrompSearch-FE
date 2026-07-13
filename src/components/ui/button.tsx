import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

/**
 * 색상은 디자인 시스템 Interaction 시맨틱 토큰을 따릅니다.
 * - brand   : default red-500 → hover red-400 → pressed red-600 → disabled gray-200
 * - neutral : default gray-200 → hover white → pressed gray-300 → selected(aria-pressed) red-400/25%
 * 크기(size)는 아직 컴포넌트 시안이 없어 shadcn 기본값 유지 — 시안 확정 후 조정.
 */
const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        brand:
          "bg-interaction-brand text-text-on-brand hover:bg-interaction-brand-hover active:bg-interaction-brand-pressed disabled:bg-interaction-brand-disabled disabled:text-text-disabled",
        neutral:
          "bg-interaction-neutral text-text-primary hover:bg-interaction-neutral-hover active:bg-interaction-neutral-pressed aria-pressed:bg-interaction-neutral-selected disabled:bg-interaction-neutral-disabled disabled:text-text-disabled",
        outline:
          "border-input bg-bg-elevated text-text-primary hover:bg-bg-secondary aria-expanded:bg-bg-secondary disabled:text-text-disabled",
        ghost:
          "text-text-primary hover:bg-bg-secondary aria-expanded:bg-bg-secondary disabled:text-text-disabled",
        destructive:
          "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 disabled:text-text-disabled",
        link: "text-text-brand underline-offset-4 hover:underline disabled:text-text-disabled",
      },
      size: {
        default:
          "h-8 gap-1.5 px-2.5 text-title-3 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        xs: "h-6 gap-1 rounded-[min(var(--radius-md),10px)] px-2 text-caption-1 in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-7 gap-1 rounded-[min(var(--radius-md),12px)] px-2.5 text-title-3 in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
        lg: "h-9 gap-1.5 px-2.5 text-title-1 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        icon: "size-8",
        "icon-xs":
          "size-6 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3",
        "icon-sm":
          "size-7 rounded-[min(var(--radius-md),12px)] in-data-[slot=button-group]:rounded-lg",
        "icon-lg": "size-9",
      },
    },
    defaultVariants: {
      variant: "brand",
      size: "default",
    },
  },
);

function Button({
  className,
  variant = "brand",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
