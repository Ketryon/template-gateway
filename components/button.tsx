import { cn } from "@/lib/cn";
import Link from "next/link";
import type { ComponentProps } from "react";

const sizes = {
  md: "px-3 py-1",
  lg: "px-4 py-2",
};

export function Button({
  size = "md",
  type = "button",
  className,
  ...props
}: {
  size?: keyof typeof sizes;
} & ComponentProps<"button">) {
  return (
    <button
      type={type}
      className={cn(
        "inline-flex shrink-0 items-center justify-center gap-1 rounded-full text-sm/7 font-medium transition-colors duration-200",
        "bg-sage-950 text-white hover:bg-sage-800 dark:bg-sage-300 dark:text-sage-950 dark:hover:bg-sage-200",
        sizes[size],
        className,
      )}
      {...props}
    />
  );
}

export function ButtonLink({
  size = "md",
  className,
  ...props
}: {
  size?: keyof typeof sizes;
} & ComponentProps<typeof Link>) {
  return (
    <Link
      className={cn(
        "inline-flex shrink-0 items-center justify-center gap-1 rounded-full text-sm/7 font-medium transition-colors duration-200",
        "bg-sage-950 text-white hover:bg-sage-800 dark:bg-sage-300 dark:text-sage-950 dark:hover:bg-sage-200",
        sizes[size],
        className,
      )}
      {...props}
    />
  );
}

export function SoftButton({
  size = "md",
  type = "button",
  className,
  ...props
}: {
  size?: keyof typeof sizes;
} & ComponentProps<"button">) {
  return (
    <button
      type={type}
      className={cn(
        "inline-flex shrink-0 items-center justify-center gap-1 rounded-full text-sm/7 font-medium transition-colors duration-200",
        "bg-sage-950/10 text-sage-950 hover:bg-sage-950/15 dark:bg-white/10 dark:text-white dark:hover:bg-white/20",
        sizes[size],
        className,
      )}
      {...props}
    />
  );
}

export function SoftButtonLink({
  size = "md",
  className,
  ...props
}: {
  size?: keyof typeof sizes;
} & ComponentProps<typeof Link>) {
  return (
    <Link
      className={cn(
        "inline-flex shrink-0 items-center justify-center gap-1 rounded-full text-sm/7 font-medium transition-colors duration-200",
        "bg-sage-950/10 text-sage-950 hover:bg-sage-950/15 dark:bg-white/10 dark:text-white dark:hover:bg-white/20",
        sizes[size],
        className,
      )}
      {...props}
    />
  );
}
