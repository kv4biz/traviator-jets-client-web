import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PageBanner } from "@/components/page-banner";

export default function EmptyLegsServicePage() {
  return (
    <>
      <PageBanner title="Empty Legs" breadcrumb="Empty Legs" />
      <main className="mx-auto w-full max-w-6xl px-4 py-12">
        <Card>
          <CardHeader>
            <CardTitle>Empty Legs</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            TBD
          </CardContent>
        </Card>
      </main>
    </>
  );
}
