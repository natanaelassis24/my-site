// /app/api/uploadthing/core.js
import { createUploadthing } from "uploadthing/next";

const f = createUploadthing();

export const ourFileRouter = {
  imageUploader: f({ image: { maxFileSize: "4MB" } }).onUploadComplete(
    async ({ file }) => {
      // Aqui você pode salvar metadados no banco, log, etc.
      console.log("✅ Upload completo:", file.url);
    }
  ),
};
