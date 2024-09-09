import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Dr.ª Ana Beatriz Winter | Endocrinologia & Metabologia",
  description: "Consultório Médico de Endocrinologia e Metabologia em Petrópolis, RJ. Marque agora a sua consulta pelo site. Cuide de sua saúde.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body style={{ background: "#eee" }}>

        {children}

      </body>
    </html>
  );
}
