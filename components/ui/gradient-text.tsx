import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

/** Texto com gradiente na cor de destaque, como no portfólio. */
export function GradientText({ className, ...props }: ComponentPropsWithoutRef<"span">) {
  return <span className={cn("bg-gradient-to-r from-primary via-primary to-foreground/80 bg-clip-text text-transparent", className)} {...props} />;
}
