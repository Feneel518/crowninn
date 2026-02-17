"use server";

import { requireAuth } from "@/lib/checks/requireAuth";
import { fail, success } from "@/lib/helpers/actionHelpers/actionHelpers";
import { getSingletonId } from "@/lib/helpers/actionHelpers/getSingletonId";
import { prisma } from "@/lib/prisma/db";
import { SeoInput, seoSchema } from "@/lib/validators/settingsValidator";

export async function updateSeoAction(value: SeoInput) {

  await requireAuth()
  const parsed = seoSchema.safeParse(value);
  if (!parsed.success)
    return fail(parsed.error.issues[0]?.message ?? "Invalid");
  const id = await getSingletonId();
  await prisma.siteSettings.update({ where: { id }, data: parsed.data });
  return success("SEO updated.");
}
