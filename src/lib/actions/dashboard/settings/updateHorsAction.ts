"use server";

import { requireAuth } from "@/lib/checks/requireAuth";
import { success } from "@/lib/helpers/actionHelpers/actionHelpers";
import { getSingletonId } from "@/lib/helpers/actionHelpers/getSingletonId";
import { prisma } from "@/lib/prisma/db";
import {
  HoursEditorInput,
  hoursEditorSchema,
} from "@/lib/validators/settingsValidator";
import { fail } from "assert";

export async function updateHoursAction(value: HoursEditorInput) {

  await requireAuth()
  const parsed = hoursEditorSchema.safeParse(value);
  if (!parsed.success)
    return fail(parsed.error.issues[0]?.message ?? "Invalid");

  const id = await getSingletonId();
  await prisma.siteSettings.update({
    where: { id },
    data: { hoursJson: parsed.data as any },
  });
  return success("Trading hours updated.");
}
