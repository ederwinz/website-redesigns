import type { Metadata } from "next";
import { Cinzel, Newsreader, Space_Mono } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const displayFont = Cinzel({
  variable: "--font-display",
  weight: ["500", "600", "700"],
  subsets: ["latin"],
});

const bodyFont = Newsreader({
  variable: "--font-body",
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const labelFont = Space_Mono({
  variable: "--font-label",
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Athenaeum — A School of Language",
  description:
    "A society of learners, open to all: languages taught in the tradition of the academy, not the algorithm.",
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
        {children}
        <Toaster />
      </body>
    </html>
  );
}
