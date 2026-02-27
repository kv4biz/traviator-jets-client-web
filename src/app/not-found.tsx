import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-12">
      <h1 className="title-lg">Page not found</h1>
      <p className="description mt-2">
        The page you’re looking for doesn’t exist.
      </p>
      <div className="mt-6">
        <Button asChild>
          <Link href="/">Go home</Link>
        </Button>
      </div>
    </main>
  );
}
