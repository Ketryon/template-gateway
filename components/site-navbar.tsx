"use client";

import { cn } from "@/lib/cn";
import { useTheme } from "@/lib/theme-provider";
import { Container } from "./container";
import Link from "next/link";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "#features", label: "Features" },
  { href: "#faq", label: "FAQ" },
];

export function SiteNavbar() {
  const { theme, setTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-sage-200 bg-sage-50/80 backdrop-blur-md dark:border-sage-800 dark:bg-sage-950/80">
      <Container className="flex h-14 items-center justify-between">
        <Link
          href="/"
          className="text-sm font-semibold tracking-tight text-sage-950 dark:text-white"
        >
          Template Gateway
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 sm:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-sage-700 transition-colors hover:text-sage-950 dark:text-sage-400 dark:hover:text-white"
            >
              {link.label}
            </Link>
          ))}
          <button
            type="button"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="rounded-full p-1.5 text-sage-600 transition-colors hover:bg-sage-200 dark:text-sage-400 dark:hover:bg-sage-800"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="size-4" />
            ) : (
              <Moon className="size-4" />
            )}
          </button>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="rounded-full p-1.5 text-sage-600 sm:hidden dark:text-sage-400"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </Container>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav
          className={cn(
            "border-t border-sage-200 bg-sage-50 sm:hidden dark:border-sage-800 dark:bg-sage-950",
            "animate-[slideDown_200ms_ease-out]",
          )}
        >
          <Container className="flex flex-col gap-1 py-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-sage-700 transition-colors hover:bg-sage-100 dark:text-sage-400 dark:hover:bg-sage-900"
              >
                {link.label}
              </Link>
            ))}
            <button
              type="button"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-sage-700 transition-colors hover:bg-sage-100 dark:text-sage-400 dark:hover:bg-sage-900"
            >
              {theme === "dark" ? (
                <Sun className="size-4" />
              ) : (
                <Moon className="size-4" />
              )}
              Toggle theme
            </button>
          </Container>
        </nav>
      )}
    </header>
  );
}
