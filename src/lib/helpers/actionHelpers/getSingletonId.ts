"use server";

import { prisma } from "@/lib/prisma/db";

export async function getSingletonId() {
  const existing = await prisma.siteSettings.findFirst({
    select: { id: true },
  });
  if (existing?.id) return existing.id;

  const created = await prisma.siteSettings.create({
    data: {
      venueName: "Crown Inn",
      hoursJson: {
        restaurant: "10:00 to 21:00",
        notes: "",
      },
      allowIndexing: true,
    },
    select: { id: true },
  });

  return created.id;
}
