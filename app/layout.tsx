import type { Metadata } from "next";
import "./globals.css";
import { AlphaNavbar } from "@/components/ui/alpha-navbar";
import { StickyAlertBar } from "@/components/ui/sticky-alert-bar";
import { AlphaFooter } from "@/components/ui/alpha-footer";
import { JoinCircleProvider } from "@/components/ui/join-circle-provider";
import { PopupProvider } from "@/components/ui/popup-context";

export const metadata: Metadata = {
  title: "Alpha Web",
  description: "A modern website built with Next.js",
  icons: {
    icon: [
      { url: "/The Alpha Circle symbol.png", sizes: "any", type: "image/png" },
      { url: "/The Alpha Circle symbol.png", sizes: "512x512", type: "image/png" },
      { url: "/The Alpha Circle symbol.png", sizes: "192x192", type: "image/png" },
      { url: "/The Alpha Circle symbol.png", sizes: "96x96", type: "image/png" },
      { url: "/The Alpha Circle symbol.png", sizes: "64x64", type: "image/png" },
      { url: "/The Alpha Circle symbol.png", sizes: "32x32", type: "image/png" },
      { url: "/The Alpha Circle symbol.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/The Alpha Circle symbol.png",
    apple: [
      { url: "/The Alpha Circle symbol.png", sizes: "180x180", type: "image/png" },
      { url: "/The Alpha Circle symbol.png", sizes: "152x152", type: "image/png" },
      { url: "/The Alpha Circle symbol.png", sizes: "120x120", type: "image/png" },
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
        <JoinCircleProvider>
          <PopupProvider>
            <AlphaNavbar />
            <StickyAlertBar />
            <div className="flex-1">
              {children}
            </div>
            <AlphaFooter />
          </PopupProvider>
        </JoinCircleProvider>
      </body>
    </html>
  );
}

