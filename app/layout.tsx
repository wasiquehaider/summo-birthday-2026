import type { Metadata } from "next";
import "./globals.css";
import { content } from "@/content";

const base = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "https://summo-birthday-2026.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(base),
  title: "Something is coming... ♥",
  description: "Something is compiling for you. Come back at midnight.",
  openGraph: {
    title: "Something is coming... ♥",
    description: "Something is compiling for you. Come back at midnight.",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Something is coming" }],
  },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
