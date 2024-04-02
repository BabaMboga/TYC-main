import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import { Icons } from "@/components/Icons";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import logo from '@/public/TYC-Logo-Large.svg'

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TYC Africa Trust",
  description: "Championing Youth Excellence, Shaping Tommorow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className={poppins.className}>
        <div className="flex flex-col min-h-screen max-w-[1920px]">
          <div className="top-0 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="border-b flex sm:h-20 md:h-16 items-center justify-between px-4 md:px-[80px] bg-navbar">
              <div className="flex items-center gap-3 px-3 border-r">
              <Link href={"/"} className="flex items-center gap-3 px-3 border-r">
                <Image
                
                  src={logo}
                  alt={"TYC Africa Logo"}
                  width={40}
                  height={60}
                />
                <p className ="sm:text-sm md:text-xl text-navtext text-[15px]">TYC AFRICA TRUST</p>
              </Link>
              </div>
              
              <div className="flex  min-h-[30px] justify-end items-center gap-4 text-navtext text-[15px]">
                <div className="flex items-center gap-3 px-3 border-r">
                  <Link href={"/"}>
                    <p className="hidden md:block md:text-xl"> Search</p>
                  </Link>{" "}
                  <Icons.search />
                </div>
                <div className="flex items-center gap-3 px-3 border-r">
                  <Link href={"/support-us/donate"}>
                    <p className="block sm:text-sm md:text-xl"> Donate</p>{" "}
                  </Link>{" "}
                  <Icons.donate />
                </div>
                <Navbar />
              </div>
            </div>
          </div>
          <div className="flex-1 w-full ">{children}</div>

          <Footer/>

        </div>

      </body>
    </html>
  );
}
