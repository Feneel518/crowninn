import { ReactNode } from "react";

export function SettingsShell({
  title,
  subtitle,
  nav,
  children,
}: {
  title: string;
  subtitle?: string;
  nav: ReactNode;
  children: ReactNode;
}) {
  return (
    <section className=" w-full p-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">
          {title}
        </h1>
        {subtitle ? (
          <p className="text-sm leading-6 text-muted-foreground">{subtitle}</p>
        ) : null}
      </div>

      <div className="mt-10 grid gap-10 md:grid-cols-12 md:items-start">
        <aside className="md:col-span-4">{nav}</aside>
        <main className="md:col-span-8 space-y-6">{children}</main>
      </div>
    </section>
  );
}
