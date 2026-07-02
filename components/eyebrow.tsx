import { cn } from "@/lib/cn";
import type { ComponentProps } from "react";

export function Eyebrow({
  children,
  className,
  ...props
}: ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "text-sm/7 font-semibold tracking-wide text-sage-700 dark:text-sage-400",
        className,
      )}
      {...props}
    >
      <span className="font-mono text-sage-400 dark:text-sage-600">[</span>{" "}
      {children}{" "}
      <span className="font-mono text-sage-400 dark:text-sage-600">]</span>
    </div>
  );
}
