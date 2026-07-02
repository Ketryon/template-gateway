import { Heading } from "@/components/heading";
import { Text } from "@/components/text";
import { Section } from "@/components/section";
import { Container } from "@/components/container";
import { Button, ButtonLink, SoftButtonLink } from "@/components/button";
import { Wallpaper } from "@/components/wallpaper";
import { CornerDots } from "@/components/corner-dots";
import { DashedDivider } from "@/components/dashed-divider";
import { Faq, FAQSection } from "@/components/faq";
import { SiteNavbar } from "@/components/site-navbar";
import { SiteFooter } from "@/components/site-footer";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <>
      <SiteNavbar />

      {/* Hero */}
      <Wallpaper color="green" className="py-24 sm:py-32">
        <Container className="flex flex-col items-center gap-8 text-center">
          <Heading color="light">Next.js API Gateway Template</Heading>
          <Text className="max-w-xl text-white/80" size="lg">
            A scaffolding project built on the Ketryon ecosystem patterns.
            Design system, API proxy layer, and everything you need to start
            building.
          </Text>
          <div className="flex gap-3">
            <ButtonLink href="#features" size="lg">
              Get started <ArrowRight className="size-4" />
            </ButtonLink>
            <SoftButtonLink
              href="#faq"
              size="lg"
              className="border border-white/20 bg-white/10 text-white hover:bg-white/20"
            >
              Learn more
            </SoftButtonLink>
          </div>
        </Container>
      </Wallpaper>

      <DashedDivider />

      {/* Features */}
      <Section
        id="features"
        eyebrow="Architecture"
        headline="Built on proven patterns"
        subheadline="Every component and pattern in this template is extracted from the Ketryon production ecosystem — battle-tested across 7+ apps."
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="relative rounded-2xl border border-sage-200 p-6 dark:border-sage-800"
            >
              <CornerDots />
              <h3 className="text-sm font-semibold text-sage-950 dark:text-white">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm/6 text-sage-700 dark:text-sage-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <DashedDivider />

      {/* API Section */}
      <Section
        eyebrow="API Layer"
        headline="Proxy to any backend"
        subheadline="Your Next.js API routes forward requests to existing backend providers. Frontend consumers never talk to the backend directly."
      >
        <div className="overflow-hidden rounded-xl border border-sage-200 dark:border-sage-800">
          <div className="bg-sage-100 px-4 py-2 text-xs font-medium text-sage-600 dark:bg-sage-900 dark:text-sage-400">
            API Routes
          </div>
          <div className="divide-y divide-sage-200 font-mono text-sm dark:divide-sage-800">
            {endpoints.map((ep) => (
              <div
                key={ep.path}
                className="flex items-center gap-4 px-4 py-3"
              >
                <span className="w-14 shrink-0 text-xs font-semibold text-sage-500">
                  {ep.method}
                </span>
                <span className="text-sage-950 dark:text-white">
                  {ep.path}
                </span>
                <span className="ml-auto text-xs text-sage-500">
                  {ep.desc}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <DashedDivider />

      {/* FAQ */}
      <FAQSection
        id="faq"
        headline="Frequently asked questions"
        subheadline={
          <p>Everything you need to know about this template.</p>
        }
      >
        {faqs.map((faq) => (
          <Faq key={faq.q} question={faq.q} answer={<p>{faq.a}</p>} />
        ))}
      </FAQSection>

      <DashedDivider />

      {/* CTA */}
      <Wallpaper color="green" className="py-20">
        <Container className="flex flex-col items-center gap-6 text-center">
          <h2 className="font-serif text-3xl font-medium tracking-tight text-white">
            Start building
          </h2>
          <Text className="max-w-md text-white/70">
            Clone this template, set your API_BASE_URL, and start shipping.
          </Text>
          <Button
            size="lg"
            className="bg-white text-sage-950 hover:bg-sage-100"
          >
            pnpm install
          </Button>
        </Container>
      </Wallpaper>

      <SiteFooter />
    </>
  );
}

const features = [
  {
    title: "Design System",
    description:
      "Primitives (Heading, Text, Button, Eyebrow, Container, Section) with sage palette, Playfair Display serif, and bracket eyebrows.",
  },
  {
    title: "API Proxy Layer",
    description:
      "Catch-all /api/proxy/[...path] route forwards to your external backend. API keys stay server-side, never exposed to the client.",
  },
  {
    title: "Dark Mode",
    description:
      "System-aware dark mode via next-themes with class strategy. Every component supports light and dark variants.",
  },
  {
    title: "Tailwind CSS v4",
    description:
      "No tailwind.config — theme defined via @theme in globals.css using oklch perceptual colors. PostCSS pipeline.",
  },
  {
    title: "Security Headers",
    description:
      "HSTS, X-Content-Type-Options, X-Frame-Options, Referrer-Policy, and Permissions-Policy applied to all routes.",
  },
  {
    title: "CORS Middleware",
    description:
      "Edge middleware handles preflight and origin validation for API routes. Request ID tracing included.",
  },
];

const endpoints = [
  { method: "GET", path: "/api/health", desc: "Health check" },
  { method: "ANY", path: "/api/proxy/*", desc: "Proxy to backend" },
  { method: "POST", path: "/api/webhooks", desc: "Webhook receiver" },
];

const faqs = [
  {
    q: "How does the API proxy work?",
    a: "Frontend calls /api/proxy/users/123 → Next.js forwards to API_BASE_URL/users/123 with the API_KEY attached. Your backend credentials never reach the browser.",
  },
  {
    q: "Do I need a database?",
    a: "No. This template assumes your data lives in an existing backend. The Next.js API layer is a proxy — it forwards requests, not stores data.",
  },
  {
    q: "How do I add authentication?",
    a: "Install your provider (@clerk/nextjs, next-auth, etc.) and add middleware checks. The ecosystem uses Clerk — see disposal.space for a reference implementation.",
  },
  {
    q: "Can I customize the color palette?",
    a: "Yes. Edit the @theme block in globals.css. The sage palette uses oklch — change the hue value (145-155) to shift the entire palette. See the convert app (mist palette, hue 197-228) for an example.",
  },
];
