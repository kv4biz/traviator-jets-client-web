import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { content } from "@/content";

export default function PrivacyPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-12">
      <Card>
        <CardHeader>
          <CardTitle>{content.legal.privacy.title}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm text-muted-foreground">
          {content.legal.privacy.body.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </CardContent>
      </Card>
    </main>
  );
}
