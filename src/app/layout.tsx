import type { Metadata } from "next";
import "./globals.css";
import { Akaya_Telivigala } from 'next/font/google'
import { AuroraBackground } from './components/ui/aurora-background'; // Import the AuroraBackground component

const akayaTelivigala = Akaya_Telivigala({
  subsets: ['latin'],
  weight: ['400'],
})

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
    <html lang="en" className={akayaTelivigala.className}>
      <body className="bg-custom-pink text-color">
          {children}
       
      </body>
    </html>
  );
}