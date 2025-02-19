import "@/styles/globals.css";
import type React from "react";
import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Navik - The Future of Group Motorcycle Riding",
  description:
    "Navik is revolutionizing the way motorcycle enthusiasts connect, plan, and ride together. Join our waitlist for the ultimate group riding experience.",
  openGraph: {
    type: "website",
    countryName: "India",
    locale: "en_IN",
    url: "https://getnavik.com",
    title: "Navik - The Future of Group Motorcycle Riding",
    description:
      "Navik is revolutionizing the way motorcycle enthusiasts connect, plan, and ride together. Join our waitlist for the ultimate group riding experience.",
    siteName: "Navik",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
