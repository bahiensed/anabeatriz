import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dr.ª Ana Beatriz Winter | Endocrinologia & Metabologia",
  description: "Consultório de Endocrinologia e Metabologia em Petrópolis, RJ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body style={{ background: "#eee" }}>
        <Banner />
        {children}
        <Footer />
      </body>
    </html>
  );
}
