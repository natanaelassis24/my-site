import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Azalea Painting",
  description: "Professional painters & painting materials",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#ff0000" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-gray-50 text-gray-900 flex flex-col min-h-screen">
        <Header /> {/* aparece 1x em todas as páginas */}
        <main className="flex-grow">{children}</main>
        <Footer /> {/* aparece 1x em todas as páginas */}
      </body>
    </html>
  );
}
