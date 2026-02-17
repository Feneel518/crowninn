"use server";

import { requireAuth } from "@/lib/checks/requireAuth";
import { fail, success } from "@/lib/helpers/actionHelpers/actionHelpers";
import { getSingletonId } from "@/lib/helpers/actionHelpers/getSingletonId";
import { prisma } from "@/lib/prisma/db";
import {
  IntegrationsInput,
  integrationsSchema,
} from "@/lib/validators/settingsValidator";

export async function updateIntegrationsAction(value: IntegrationsInput) {

  await requireAuth()
  const parsed = integrationsSchema.safeParse(value);
  if (!parsed.success)
    return fail(parsed.error.issues[0]?.message ?? "Invalid");

  const id = await getSingletonId();

  await prisma.siteSettings.update({
    where: { id },
    data: {
      mapboxToken: parsed.data.mapboxToken || null,
      uberEatsUrl: parsed.data.uberEatsUrl || null,
      bookingUrl: parsed.data.bookingUrl || null,
      // store coordinates either as separate columns or embed in JSON;
      // here: embed in hoursJson OR create fields in schema.
      mapLat: parsed.data.mapLat ? Number(parsed.data.mapLat) : null,
      mapLng: parsed.data.mapLng ? Number(parsed.data.mapLng) : null,
    } as any,
  });

  return success("Integrations updated.");
}
