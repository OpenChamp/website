import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OpenChamp",
  description: "OpenChamp is free-to-play Open Source MOBA game",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <Script
        src="https://kit.fontawesome.com/0ad82a1b51.js"
        crossOrigin="anonymous"
      ></Script>
    </html>
  );
}
