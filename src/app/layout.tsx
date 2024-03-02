import { Inter } from "next/font/google";
import "./globals.css";
import { metadataHome } from "../libs/client/metadata";
import ToastComponent from "../components/toast";
import classNames from "classnames";

const inter = Inter({ subsets: ["latin"] });

export const metadata = metadataHome;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={classNames("", inter.className)}>
        {children}
        <ToastComponent />
      </body>
    </html>
  );
}
