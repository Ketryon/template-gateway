import { cn } from "@/lib/cn";
import type { ComponentProps } from "react";

export function Text({
  children,
  className,
  size = "md",
  ...props
}: ComponentProps<"div"> & { size?: "md" | "lg" }) {
  return (
    <div
      className={cn(
        size === "md" && "text-base/7",
        size === "lg" && "text-lg/8",
        "text-sage-700 dark:text-sage-400",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
