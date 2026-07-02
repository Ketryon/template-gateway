import { cn } from "@/lib/cn";
import type { ComponentProps } from "react";

export function Container({
  children,
  className,
  ...props
}: ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-2xl px-6 md:max-w-3xl lg:max-w-6xl lg:px-10",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
