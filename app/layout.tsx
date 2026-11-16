import type { Metadata } from "next";
import "./globals.css";
import { content } from "@/content";

const base = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(base),
  title: "Something is coming... ♥",
  description: "Something is compiling for you. Come back at midnight.",
  openGraph: {
    title: "Something is coming... ♥",
    description: "Something is compiling for you. Come back at midnight.",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
