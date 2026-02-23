import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PageBanner } from "@/components/page-banner";
import { content } from "@/content";

export default function AboutPage() {
  return (
    <>
      <PageBanner title="About" breadcrumb="About" />
      <main className="mx-auto w-full max-w-6xl px-4 py-12">
        <Card>
          <CardHeader>
            <CardTitle>{content.about.title}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-muted-foreground">
            {content.about.body.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </CardContent>
        </Card>
      </main>
    </>
  );
}
