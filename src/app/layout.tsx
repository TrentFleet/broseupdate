import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Brose",
  description: "Brose Wine",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-custom-pink text-color">
        {children}
      </body>
    </html>
  );
}