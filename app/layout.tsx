import { Inter } from "next/font/google";
import React from "react";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ian Meyer",
  metadataBase: new URL("https://ianwmeyer.com"),
  description: "Full Stack Web Developer",
  themeColor: "#0F1729",
  openGraph: {
    title: "Ian Meyer",
    description: "Full Stack Web Developer",
    url: "https://ianwmeyer.com",
    siteName: "ianwmeyer.com",
    images: [
      {
        url: "https://ianwmeyer.com/meta-img.png",
        width: 477,
        height: 440,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: false,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
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
