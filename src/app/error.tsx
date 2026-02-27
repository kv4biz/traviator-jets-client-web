"use client";

import { useEffect } from "react";

import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-12">
      <h1 className="title-lg">Something went wrong</h1>
      <p className="description mt-2">Please try again.</p>
      <div className="mt-6">
        <Button onClick={reset}>Retry</Button>
      </div>
    </main>
  );
}
