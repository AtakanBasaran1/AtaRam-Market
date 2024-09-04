import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";
import Navbar from "./(navbar)/Navbar";
import Footer from "./Footer";

// Kanit fontunu içe aktarıyoruz
const kanit = Kanit({
  subsets: ["latin"],
  weight: ["100"],
  style: ["normal", "italic"]
});

export const metadata: Metadata = {
  title: "AtaRam & Market",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={kanit.className}>
        <Navbar />
        <Footer />
        {children}
      </body>
    </html>
  );
}
