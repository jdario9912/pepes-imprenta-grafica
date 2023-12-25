import { Inter } from "next/font/google";
import "./globals.css";
import { metadataInfo } from "./metadata";

const inter = Inter({ subsets: ["latin"] });

export const metadata = metadataInfo;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
