import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Blip - The Simplest Bulk Ad Uploader for Meta",
  description:
    "Launch 100s of ads together. Unlimited Ad Accounts. Save your settings and launch ads in seconds.",
  keywords: "Meta ads, Facebook ads, bulk upload, ad management, advertising",
  themeColor: "#fffbf3", // Safari/Chrome theme color

  openGraph: {
    title: "Blip - The Simplest Bulk Ad Uploader for Meta",
    description:
      "Launch 100s of ads together. Unlimited Ad Accounts. Save your settings and launch ads in seconds.",
    url: "https://withblip.com",
    siteName: "Blip",
    images: [
      {
        url: "https://withblip.com/images/preview.jpg", // must be absolute URL
        width: 1200,
        height: 630,
        alt: "Landing page preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blip - The Simplest Bulk Ad Uploader for Meta",
    description:
      "Launch 100s of ads together. Unlimited Ad Accounts. Save your settings and launch ads in seconds.",
    images: ["https://withblip.com/images/preview.jpg"], // same image
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          href="/fonts/NexaRound/subset-NexaRound-Bold.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/NexaRound/subset-NexaRound-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
