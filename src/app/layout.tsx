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
      <body className={`${inter.variable} ${amarante.variable} antialiased`}>
        <Navbar></Navbar>
        {children}
        <Toaster richColors />
      </body>
    </html>
  );
}
