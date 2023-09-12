import "./globals.css";
import { Inter } from "next/font/google";
import Nav from "./components/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ian Meyer",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="w-screen overflow-x-hidden">
      <body className={inter.className}>
        <Nav />

        {children}
      </body>
    </html>
  );
}
