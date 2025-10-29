import "./globals.css";
import Header from "../components/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Azalea Painting",
  description: "Professional painters & painting materials",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <Header /> {/* ← Esse Header já aparece em TODAS as páginas */}
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}
