import { createUploadthing, type FileRouter } from "uploadthing/next";
import { ENV } from "@/lib/env";

const f = createUploadthing({
  token: ENV.UPLOADTHING_TOKEN,
});

export const ourFileRouter = {
  productImage: f({ image: { maxFileSize: "4MB", maxFileCount: 1 } })
    .onUploadComplete(async ({ file }) => {
      console.log("Upload complete:", file.url);
      return { url: file.url };
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
