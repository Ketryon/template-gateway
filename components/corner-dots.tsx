export function CornerDots({ className }: { className?: string }) {
  return (
    <>
      <span
        className={`absolute top-0 left-0 size-1 rounded-full bg-sage-400 dark:bg-sage-600 ${className || ""}`}
      />
      <span
        className={`absolute top-0 right-0 size-1 rounded-full bg-sage-400 dark:bg-sage-600 ${className || ""}`}
      />
      <span
        className={`absolute bottom-0 left-0 size-1 rounded-full bg-sage-400 dark:bg-sage-600 ${className || ""}`}
      />
      <span
        className={`absolute bottom-0 right-0 size-1 rounded-full bg-sage-400 dark:bg-sage-600 ${className || ""}`}
      />
    </>
  );
}
