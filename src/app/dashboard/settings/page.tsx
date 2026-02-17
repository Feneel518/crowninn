import { BrandForm } from "@/components/dashboard/settings/BrandForm";
import { HoursForm } from "@/components/dashboard/settings/HoursForm";
import { IntegrationsForm } from "@/components/dashboard/settings/IntegrationsForm";

import { SeoForm } from "@/components/dashboard/settings/SeoForm";
import { SettingsShell } from "@/components/dashboard/settings/SettingShell";
import { SettingsNav } from "@/components/dashboard/settings/SettingsNav";
import { VenueForm } from "@/components/dashboard/settings/VenueForm";
import { prisma } from "@/lib/prisma/db";
import { Section } from "@/lib/types/settingsSection";
import { FC } from "react";

interface pageProps {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
}

const page: FC<pageProps> = async ({ searchParams }) => {
  const sp = (await searchParams) ?? {};
  const section = (sp.section as Section) ?? "venue";

  const settings =
    (await prisma.siteSettings.findFirst()) ??
    (await prisma.siteSettings.create({
      data: {
        venueName: "Crown Inn",
        hoursJson: {
          restaurant: "10:00 to 21:00",
          notes: "",
        },
        allowIndexing: true,
      },
    }));

  const hours = (settings.hoursJson ?? {}) as any;
  return (
    <SettingsShell
      title="Settings"
      subtitle="Manage Crown Inn website content, hours, SEO, and integrations."
      nav={<SettingsNav active={section} />}>
      {section === "venue" && (
        <VenueForm
          defaultValues={{
            venueName: settings.venueName ?? "Crown Inn",
            tagline: settings.tagline ?? "",
            phone: settings.phone ?? "",
            email: settings.email ?? "",
            addressLine: settings.addressLine ?? "",
            city: settings.city ?? "",
            state: settings.state ?? "",
            postcode: settings.postcode ?? "",
          }}
        />
      )}

      {section === "hours" && (
        <HoursForm
          defaultValues={{
            bar: hours.bar ?? "",
            bistroLunch: hours.bistroLunch ?? "",
            bistroDinner: hours.bistroDinner ?? "",
            pizza: hours.pizza ?? "",
            tea: hours.tea ?? "",
            notes: hours.notes ?? "",
          }}
        />
      )}

      {section === "brand" && (
        <BrandForm
          defaultValues={{
            instagramUrl: settings.instagramUrl ?? "",
            facebookUrl: settings.facebookUrl ?? "",
            logoUrl: settings.logoUrl ?? "",
            ogImageUrl: settings.ogImageUrl ?? "",
          }}
        />
      )}

      {section === "seo" && (
        <SeoForm
          defaultValues={{
            metaTitle: settings.metaTitle ?? "",
            metaDescription: settings.metaDescription ?? "",
            allowIndexing: Boolean(settings.allowIndexing),
          }}
        />
      )}

      {section === "integrations" && (
        <IntegrationsForm
          defaultValues={{
            mapLat:
              (settings as any).mapLat !== null &&
              (settings as any).mapLat !== undefined
                ? String((settings as any).mapLat)
                : "",
            mapLng:
              (settings as any).mapLng !== null &&
              (settings as any).mapLng !== undefined
                ? String((settings as any).mapLng)
                : "",
            uberEatsUrl: (settings as any).uberEatsUrl ?? "",
          }}
        />
      )}
    </SettingsShell>
  );
};

export default page;
