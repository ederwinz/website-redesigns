import type { Metadata } from "next";
import { Bodoni_Moda, Literata, Fragment_Mono } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import "./globals.css";

const displayFont = Bodoni_Moda({
  variable: "--font-display",
  weight: ["500", "600", "700"],
  subsets: ["latin"],
});

const bodyFont = Literata({
  variable: "--font-body",
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const labelFont = Fragment_Mono({
  variable: "--font-label",
  weight: ["400"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Henry Pan",
  description:
    "Work at everything with all your heart, as working for the Lord and not human masters.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${displayFont.variable} ${bodyFont.variable} ${labelFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-body">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <Toaster />
      </body>
    </html>
  );
}
