import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "\u0627\u0644\u062D\u0642\u064A\u0642\u0629 \u0627\u0644\u0645\u062F\u0641\u0648\u0646\u0629 | Buried Truth",
  description: "\u0627\u0643\u062A\u0634\u0641 \u0645\u0627 \u0628\u064A\u0646 \u0627\u0644\u062D\u0642\u064A\u0642\u0629 \u0648\u0627\u0644\u0633\u0631 \u0648\u0627\u0644\u0623\u0633\u0637\u0648\u0631\u0629 - Discover What Lies Beneath",
  keywords: ["buried truth", "\u0627\u0644\u062D\u0642\u064A\u0642\u0629 \u0627\u0644\u0645\u062F\u0641\u0648\u0646\u0629", "secrets", "facts", "mystery", "arabic"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
