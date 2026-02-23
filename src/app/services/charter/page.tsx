import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PageBanner } from "@/components/page-banner";

export default function CharterServicePage() {
  return (
    <>
      <PageBanner title="Jet Chartering" breadcrumb="Jet Chartering" />
      <main className="mx-auto w-full max-w-6xl px-4 py-12">
        <Card>
          <CardHeader>
            <CardTitle>Charter</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            TBD
          </CardContent>
        </Card>
      </main>
    </>
  );
}
