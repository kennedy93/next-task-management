import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/assets/css/globals.css";
import Header from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Task Managenet App",
  description: "Task Management app built with Next.js and mongo db",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />

        <main className="container mx-auto px-4 py-8">
        {children}
        </main>
      </body>
    </html>
  );
}
