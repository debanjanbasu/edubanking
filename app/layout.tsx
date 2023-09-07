
import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import localFont from "next/font/local";
import Navbar from "./components/Navbar";
import { BtmNav } from "./components/BtmNav";

// If loading a variable font, you don't need to specify the font weight
const montserrat = Montserrat({ subsets: ["latin"] });
// Font files can be colocated inside of `app`
const westpacBold = localFont({ src: "./Westpac-Bold-v2.007.woff2" });

export const metadata: Metadata = {
  title: "Banking made fun - Edu Banking",
  description: "A platform for children to learn about banking",
};

type NewType = {
  children: React.ReactNode;
};

export default function RootLayout({
  children,
}: NewType) {
  return (
    <html lang="en" data-theme="mytheme">
      <body className={montserrat.className}>
        <Navbar/>
        <BtmNav/>
        {children}
        </body>
    </html>
  );
}
