import { cn } from "@/lib/cn";
import type { ComponentProps } from "react";

const html = String.raw;

const noisePattern = `url("data:image/svg+xml;charset=utf-8,${encodeURIComponent(
  html`
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="250"
      height="250"
      viewBox="0 0 100 100"
    >
      <filter id="n">
        <feTurbulence
          type="turbulence"
          baseFrequency="1.4"
          numOctaves="1"
          seed="2"
          stitchTiles="stitch"
          result="n"
        />
        <feComponentTransfer result="g">
          <feFuncR type="linear" slope="4" intercept="1" />
          <feFuncG type="linear" slope="4" intercept="1" />
          <feFuncB type="linear" slope="4" intercept="1" />
        </feComponentTransfer>
        <feColorMatrix type="saturate" values="0" in="g" />
      </filter>
      <rect width="100%" height="100%" filter="url(#n)" />
    </svg>
  `.replace(/\s+/g, " "),
)}")`;

const colorMap = {
  green:
    "from-[#9ca88f] to-[#596352] dark:from-[#333a2b] dark:to-[#26361b]",
  blue: "from-[#637c86] to-[#778599] dark:from-[#243a42] dark:to-[#232f40]",
  purple:
    "from-[#7b627d] to-[#8f6976] dark:from-[#412c42] dark:to-[#3c1a26]",
  brown:
    "from-[#8d7359] to-[#765959] dark:from-[#382d23] dark:to-[#3d2323]",
};

export function Wallpaper({
  children,
  color = "green",
  className,
  ...props
}: { color?: keyof typeof colorMap } & ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "relative overflow-hidden bg-linear-to-b",
        colorMap[color],
        className,
      )}
      {...props}
    >
      <div
        className="absolute inset-0 opacity-30 mix-blend-overlay dark:opacity-25"
        style={{
          backgroundPosition: "center",
          backgroundImage: noisePattern,
        }}
      />
      <div className="relative">{children}</div>
    </div>
  );
}
