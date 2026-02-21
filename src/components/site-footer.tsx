import Link from "next/link";

import { content } from "@/content";

export function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-12 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="font-semibold tracking-tight">{content.metadata.title}</div>
          <p className="mt-2 text-sm text-muted-foreground">
            {content.metadata.description}
          </p>
        </div>

        {content.footer.groups.map((group) => (
          <div key={group.title} className="md:col-span-1">
            <div className="text-sm font-medium">{group.title}</div>
            <ul className="mt-3 space-y-2">
              {group.links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-6">
          <p className="text-sm text-muted-foreground">{content.footer.note}</p>
        </div>
      </div>
    </footer>
  );
}
