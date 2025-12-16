import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "./homepage/components/Navbar";

export const metadata: Metadata = {
  title: "Alpha Web",
  description: "A modern website built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full m-0 p-0 bg-white text-gray-900 antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}

