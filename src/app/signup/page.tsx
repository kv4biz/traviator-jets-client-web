import Link from "next/link";

import { content } from "@/content";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PageBanner } from "@/components/page-banner";

export default function SignupPage() {
  return (
    <>
      <PageBanner title="Sign Up" breadcrumb="Sign Up" />
      <main className="mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-6xl items-center px-4 py-12">
        <div className="mx-auto w-full max-w-md">
          <Card>
            <CardHeader>
              <CardTitle>{content.auth.signup.title}</CardTitle>
              <p className="mt-1 text-sm text-muted-foreground">
                {content.auth.signup.description}
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-2">
                <Label htmlFor="name">{content.auth.signup.nameLabel}</Label>
                <Input id="name" type="text" placeholder="Your name" />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="email">{content.auth.signup.emailLabel}</Label>
                <Input id="email" type="email" placeholder="you@company.com" />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="password">
                  {content.auth.signup.passwordLabel}
                </Label>
                <Input id="password" type="password" />
              </div>

              <Button className="w-full" type="button">
                {content.auth.signup.submitLabel}
              </Button>

              <p className="text-xs text-muted-foreground">
                {content.auth.signup.helperText}
              </p>

              <div className="text-sm">
                <Link
                  href={content.auth.signup.loginCta.href}
                  className="text-primary underline-offset-4 hover:underline"
                >
                  {content.auth.signup.loginCta.label}
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </>
  );
}
