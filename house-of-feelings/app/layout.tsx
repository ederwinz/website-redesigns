import type { Metadata } from "next";
import { Archivo_Black, Space_Grotesk, Caveat } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const displayFont = Archivo_Black({
  variable: "--font-display",
  weight: "400",
  subsets: ["latin"],
});

const bodyFont = Space_Grotesk({
  variable: "--font-body",
  subsets: ["latin"],
});

const markerFont = Caveat({
  variable: "--font-marker",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "House of Feelings",
  description:
    "Exclusive videos, extended cuts, and the messiest confessions from House of Feelings.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${displayFont.variable} ${bodyFont.variable} ${markerFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-body">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
