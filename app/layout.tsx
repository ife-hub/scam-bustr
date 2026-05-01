import type { Metadata } from "next";
import { Open_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";
import TawkChat from "@/components/TawkChat";

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700", "800"], // Open Sans supports these
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Scam Bustr — Cyber Intelligence & Fraud Recovery",
  description:
    "Scam Bustr is a cybersecurity firm specializing in digital fraud recovery, chargeback solutions, and cyber intelligence. Your strategic advantage in security.",
  keywords: [
    "cybersecurity",
    "fraud recovery",
    "chargeback solutions",
    "cyber intelligence",
    "stolen funds recovery",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${openSans.variable} ${ibmPlexMono.variable}`}>
      <body>
        {children}
        <WhatsAppButton />
        <TawkChat />
      </body>
    </html>
  );
}