import type { Metadata } from "next";
import {
  Amarante,
  Geist,
  Geist_Mono,
  Inter,
  Playfair_Display,
} from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import Navbar from "@/components/global/Navbar";
import "mapbox-gl/dist/mapbox-gl.css";
import Cursor from "@/components/global/Cursor";
import { Footer } from "@/components/global/Footer";
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const amarante = Amarante({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "Crown Inn",
  description: "Premium dining, cocktails, and events.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${amarante.variable} antialiased flex flex-col min-h-svh`}>
        <Navbar></Navbar>
        <div className="flex-1">{children}</div>
        <Toaster richColors />
        <Cursor></Cursor>
        <Footer></Footer>
      </body>
    </html>
  );
}
