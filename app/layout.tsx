
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import NavbarWrapper from "@/components/NavbarWrapper"; // 👈 new client wrapper

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TYC Africa Trust",
  description: "Championing Youth Excellence, Shaping Tomorrow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <div className="flex flex-col min-h-screen max-w-[1920px]">
          {/* Navbar handled by a client component */}
          <NavbarWrapper />

          <div className="flex-1 w-full">{children}</div>

          <Footer />
        </div>
      </body>
    </html>
  );
}
