import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PageBanner } from "@/components/page-banner";

export default function FAQPage() {
  return (
    <>
      <PageBanner title="FAQ" breadcrumb="FAQ" />
      <main className="mx-auto w-full max-w-6xl px-4 py-12">
        <Card>
          <CardHeader>
            <CardTitle>Frequently Asked Questions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-muted-foreground">
            <p>FAQ content coming soon.</p>
          </CardContent>
        </Card>
      </main>
    </>
  );
}
