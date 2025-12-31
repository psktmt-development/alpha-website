import type { Metadata } from "next";
import "./globals.css";
import { AlphaNavbar } from "@/components/ui/alpha-navbar";
import { StickyAlertBar } from "@/components/ui/sticky-alert-bar";
import { AlphaFooter } from "@/components/ui/alpha-footer";
import { JoinCircleProvider } from "@/components/ui/join-circle-provider";
import { PopupProvider } from "@/components/ui/popup-context";

export const metadata: Metadata = {
  title: "The Alpha Circle",
  description: "An invite-only global collective uniting visionaries, and pioneers.",
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "any", type: "image/png" },
      { url: "/favicon.png", sizes: "512x512", type: "image/png" },
      { url: "/favicon.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon.png", sizes: "64x64", type: "image/png" },
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/favicon.png",
    apple: [
      { url: "/favicon.png", sizes: "180x180", type: "image/png" },
      { url: "/favicon.png", sizes: "152x152", type: "image/png" },
      { url: "/favicon.png", sizes: "120x120", type: "image/png" },
    ],
  },
  openGraph: {
    title: "The Alpha Circle",
    description: "An invite-only global collective uniting visionaries, and pioneers.",
    url: "https://thealphacircle.world",
    siteName: "The Alpha Circle",
    images: [
      {
        url: "/favicon.png", // Or a larger specific OG image if available
        width: 800,
        height: 600,
        alt: "The Alpha Circle Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Alpha Circle",
    description: "An invite-only global collective uniting visionaries, and pioneers.",
    images: ["/favicon.png"], // Or a larger specific OG image
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

