import Link from "next/link";

import { content } from "@/content";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function ServicesPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-12">
      <div className="mb-8">
        <h1 className="title-lg">{content.home.services.title}</h1>
        <p className="description mt-2">{content.home.services.subtitle}</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {content.home.services.items.map((s) => (
          <Link key={s.href} href={s.href} className="block">
            <Card className="h-full transition-colors hover:bg-accent">
              <CardHeader>
                <CardTitle>{s.title}</CardTitle>
                <CardDescription>{s.description}</CardDescription>
              </CardHeader>
              <CardContent />
            </Card>
          </Link>
        ))}
      </div>
    </main>
  );
}
