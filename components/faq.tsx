"use client";

import { cn } from "@/lib/cn";
import { Minus, Plus } from "lucide-react";
import { Subheading } from "@/components/subheading";
import { Text } from "@/components/text";
import type { ComponentProps, ReactNode } from "react";
import { useState } from "react";

export function Faq({
  question,
  answer,
}: {
  question: ReactNode;
  answer: ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-start justify-between gap-6 py-4 text-left text-base/7 text-sage-950 transition-colors duration-200 dark:text-white"
        aria-expanded={open}
      >
        {question}
        <span className="flex size-3.5 h-7 shrink-0 items-center transition-transform duration-200">
          {open ? <Minus className="size-3.5" /> : <Plus className="size-3.5" />}
        </span>
      </button>
      <div
        className="grid transition-[grid-template-rows] duration-300 ease-in-out"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <div className="-mt-2 flex flex-col gap-2 pb-4 pr-12 text-sm/7 text-sage-700 dark:text-sage-400">
            {answer}
          </div>
        </div>
      </div>
    </div>
  );
}

export function FAQSection({
  headline,
  subheadline,
  className,
  children,
  ...props
}: {
  headline?: ReactNode;
  subheadline?: ReactNode;
} & ComponentProps<"section">) {
  return (
    <section className={cn("py-16", className)} {...props}>
      <div className="mx-auto flex max-w-3xl flex-col gap-6 px-6 lg:max-w-5xl lg:px-10">
        <div className="flex flex-col gap-6">
          <Subheading>{headline}</Subheading>
          {subheadline && (
            <Text className="flex flex-col gap-4 text-pretty">
              {subheadline}
            </Text>
          )}
        </div>
        <div className="divide-y divide-sage-950/10 border-y border-sage-950/10 dark:divide-white/10 dark:border-white/10">
          {children}
        </div>
      </div>
    </section>
  );
}
