import { Container } from "./container";

export function SiteFooter() {
  return (
    <footer className="border-t border-sage-200 py-8 dark:border-sage-800">
      <Container className="flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-sage-500 dark:text-sage-500">
          &copy; {new Date().getFullYear()} Template Gateway. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a
            href="#"
            className="text-sm text-sage-500 transition-colors hover:text-sage-700 dark:hover:text-sage-300"
          >
            Privacy
          </a>
          <a
            href="#"
            className="text-sm text-sage-500 transition-colors hover:text-sage-700 dark:hover:text-sage-300"
          >
            Terms
          </a>
        </div>
      </Container>
    </footer>
  );
}
