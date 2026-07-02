import { cn } from "@/lib/cn";
import type { ComponentProps } from "react";

export function Heading({
  children,
  color = "dark/light",
  className,
  ...props
}: { color?: "dark/light" | "light" } & ComponentProps<"h1">) {
  return (
    <h1
      className={cn(
        "font-serif text-5xl/12 font-medium tracking-[-0.03em] text-balance sm:text-[3.5rem]/14",
        color === "dark/light" && "text-sage-950 dark:text-white",
        color === "light" && "text-white",
        className,
      )}
      {...props}
    >
      {children}
    </h1>
  );
}
