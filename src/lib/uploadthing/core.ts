import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError, UTApi } from "uploadthing/server";
import { auth } from "../auth/auth";

const f = createUploadthing();

export const utapi = new UTApi();

// ✅ If you have auth, validate user here.
// For now: allow uploads for dashboard use.
const middleware = async ({ req }: { req: Request }) => {
  try {
    const session = await auth.api.getSession({ headers: req.headers });
    if (!session?.user?.id) throw new UploadThingError("Unauthorized");
    return { userId: session.user.id };
  } catch (e) {
    console.error("UploadThing middleware error:", e);
    throw new UploadThingError("Unauthorized");
  }
};

export const fileRouter = {
  // Crown Inn brand assets (logo, og, icons)
  brandImage: f({ image: { maxFileSize: "2MB", maxFileCount: 1 } })
    .middleware(middleware)
    .onUploadComplete(async ({ file }) => {
      return {
        url: file.url,
        name: file.name,
        key: file.key,
      };
    }),

  // Homepage banner / hero media
  heroMedia: f({
    image: { maxFileSize: "4MB", maxFileCount: 1 },
    // If you also want videos:
    // video: { maxFileSize: "32MB", maxFileCount: 1 },
  })
    .middleware(middleware)
    .onUploadComplete(async ({ file }) => {
      return { url: file.url, name: file.name, key: file.key };
    }),

  // Gallery (multiple images)
  galleryImages: f({ image: { maxFileSize: "4MB", maxFileCount: 12 } })
    .middleware(middleware)
    .onUploadComplete(async ({ file }) => {
      return { url: file.url, name: file.name, key: file.key };
    }),
} satisfies FileRouter;

export type AppFileRouter = typeof fileRouter;
