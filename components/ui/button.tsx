import { cva, type VariantProps } from "class-variance-authority";

/** Mesmo desenho dos botões do portfólio: mono, caixa alta, cor de destaque com brilho. Usado em links (`<a>`). */
export const buttonVariants = cva(
  "group/button inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 rounded-lg border font-mono font-bold tracking-wider whitespace-nowrap uppercase transition-[background-color,border-color,color,box-shadow,transform] duration-200 select-none active:translate-y-px [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "border-transparent bg-primary-strong text-white shadow-[0_0_28px_color-mix(in_oklch,var(--color-primary)_38%,transparent)] hover:bg-primary-strong/85 hover:shadow-[0_0_40px_color-mix(in_oklch,var(--color-primary)_55%,transparent)]",
        outline: "border-primary/35 bg-background/50 text-foreground hover:border-primary/60 hover:bg-primary/10",
        ghost: "border-transparent text-muted-foreground hover:bg-muted hover:text-foreground",
      },
      size: {
        sm: "h-9 px-3 text-[11px] [&_svg]:size-3.5",
        md: "h-10 px-4 text-xs [&_svg]:size-4",
        lg: "h-12 px-6 text-xs sm:text-[13px] [&_svg]:size-4",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export type ButtonVariantProps = VariantProps<typeof buttonVariants>;
