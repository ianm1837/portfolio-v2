import { Inter } from "next/font/google";
import React from "react";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ian Meyer",
  description: "Full Stack Web Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="w-screen overflow-x-hidden scroll-smooth">
      <body className={inter.className}>
        <Nav />

        {children}
        <Footer />
      </body>
    </html>
  );
}
