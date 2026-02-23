import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PageBanner } from "@/components/page-banner";
import { content } from "@/content";

export default function ContactPage() {
  return (
    <>
      <PageBanner title="Contact Us" breadcrumb="Contact" />
      <main className="mx-auto w-full max-w-6xl px-4 py-12">
        <Card>
          <CardHeader>
            <CardTitle>{content.contact.title}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2 text-sm text-muted-foreground">
              {content.contact.body.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>

            <div className="grid gap-2 text-sm">
              <div>
                <span className="font-medium">Email:</span>{" "}
                <span className="text-muted-foreground">
                  {content.contact.email ?? "TBD"}
                </span>
              </div>
              <div>
                <span className="font-medium">Phone:</span>{" "}
                <span className="text-muted-foreground">
                  {content.contact.phone ?? "TBD"}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </>
  );
}
