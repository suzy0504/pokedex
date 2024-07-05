import type { Metadata } from "next";
import "./globals.css";
import Providers from "./Providers";

export const metadata: Metadata = {
  title: "Pokédex",
  description: "Pokédex app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="flex justify-center">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
