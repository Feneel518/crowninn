"use server";

import { auth } from "@/lib/auth/auth";
import { redirect } from "next/navigation";
import { prisma } from "../prisma/db";
import { headers } from "next/headers";

export async function requireAuth() {
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session?.user) redirect("/");

  const allowedUser = await prisma.allowedUser.findUnique({
    where: {
      email: session.user.email,
    },
  });

  if (!allowedUser || !allowedUser.isActive) {
    redirect("/not-authorized");
  }

  return {
    user: session.user,
    role: allowedUser.role,
  };
}
