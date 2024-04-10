import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pdf",
};

export default function SystemLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
