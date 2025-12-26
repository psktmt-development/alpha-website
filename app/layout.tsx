import type { Metadata } from "next";
import "./globals.css";
import { AlphaNavbar } from "@/components/ui/alpha-navbar";
import { AlphaFooter } from "@/components/ui/alpha-footer";

export const metadata: Metadata = {
  title: "Alpha Web",
  description: "A modern website built with Next.js",
  icons: {
    icon: [
      { url: "/image.png", sizes: "any", type: "image/png" },
      { url: "/image.png", sizes: "512x512", type: "image/png" },
      { url: "/image.png", sizes: "192x192", type: "image/png" },
      { url: "/image.png", sizes: "96x96", type: "image/png" },
      { url: "/image.png", sizes: "64x64", type: "image/png" },
      { url: "/image.png", sizes: "32x32", type: "image/png" },
      { url: "/image.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/image.png",
    apple: [
      { url: "/image.png", sizes: "180x180", type: "image/png" },
      { url: "/image.png", sizes: "152x152", type: "image/png" },
      { url: "/image.png", sizes: "120x120", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-screen flex flex-col m-0 p-0 bg-white text-gray-900 antialiased">
        <AlphaNavbar />
        <div className="flex-1">
          {children}
        </div>
        <AlphaFooter />
      </body>
    </html>
  );
}

