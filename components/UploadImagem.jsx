"use client";
import { UploadButton } from "@uploadthing/react";
import "@uploadthing/react/styles.css";

export default function UploadImagem({ onUploadComplete }) {
  return (
    <div className="border border-gray-300 rounded-lg p-3 text-center">
      <UploadButton
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          const url = res?.[0]?.url;
          if (url && onUploadComplete) onUploadComplete(url);
        }}
        onUploadError={(err) => {
          console.error("UploadThing error:", err);
          alert("Erro ao enviar imagem: " + err.message);
        }}
      />
    </div>
  );
}
