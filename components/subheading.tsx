import { cn } from "@/lib/cn";
import type { ComponentProps } from "react";

export function Subheading({
  children,
  className,
  ...props
}: ComponentProps<"h2">) {
  return (
    <h2
      className={cn(
        "font-serif text-3xl/9 font-medium tracking-[-0.03em] text-pretty text-sage-950 sm:text-[2rem]/10 dark:text-white",
        className,
      )}
      {...props}
    >
      {children}
    </h2>
  );
}
