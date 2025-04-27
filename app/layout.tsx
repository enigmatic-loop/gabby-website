import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const ubuntu = Ubuntu({ weight: "400", style: "italic", preload: false });

export const metadata: Metadata = {
  title: "Gabby Leiva - Aerialist",
  description: "Performer and aerialist",
  icons: {
    icon: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🎪</text></svg>",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head />
      <body className={ubuntu.className}>{children}</body>
    </html>
  );
}
