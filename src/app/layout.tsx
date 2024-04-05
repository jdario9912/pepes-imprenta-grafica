import "./globals.css";
import { metadataHome } from "../libs/client/metadata";
import ToastComponent from "../components/toast";
import classNames from "classnames";
import Providers from "./providers";
import { interFont } from "./fonts";

export const metadata = metadataHome;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={classNames("", interFont.className)}>
        <Providers>
          {children}
          <ToastComponent />
        </Providers>
      </body>
    </html>
  );
}
