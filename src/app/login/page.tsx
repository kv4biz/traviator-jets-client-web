import Link from "next/link";

import { content } from "@/content";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LoginPage() {
  return (
    <main className="mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-6xl items-center px-4 py-12">
      <div className="mx-auto w-full max-w-md">
        <Card>
          <CardHeader>
            <CardTitle>{content.auth.login.title}</CardTitle>
            <p className="mt-1 text-sm text-muted-foreground">
              {content.auth.login.description}
            </p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid gap-2">
              <Label htmlFor="email">{content.auth.login.emailLabel}</Label>
              <Input id="email" type="email" placeholder="you@company.com" />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="password">{content.auth.login.passwordLabel}</Label>
              <Input id="password" type="password" />
            </div>

            <div className="flex items-center gap-2">
              <Checkbox id="remember" />
              <Label htmlFor="remember">{content.auth.login.rememberMeLabel}</Label>
            </div>

            <Button className="w-full" type="button">
              {content.auth.login.submitLabel}
            </Button>

            <p className="text-xs text-muted-foreground">
              {content.auth.login.helperText}
            </p>

            <div className="text-sm">
              <Link
                href={content.auth.login.signupCta.href}
                className="text-primary underline-offset-4 hover:underline"
              >
                {content.auth.login.signupCta.label}
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
