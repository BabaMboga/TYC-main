"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Icons } from "@/components/Icons";
import NewNavbar from "@/components/NewNavbar";
import logo from "@/public/TYC-Logo-Large.svg";

const NavbarWrapper = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
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
              <p className="sm:text-sm md:text-xl text-navtext text-[15px]">
                TYC AFRICA TRUST
              </p>
            </Link>
          </div>

          <div className="flex min-h-[30px] justify-end items-center gap-4 text-navtext text-[15px]">
            <div className="flex items-center gap-3 px-3 border-r">
              <Link href={"/support-us/donate"}>
                <p className="block sm:text-sm md:text-xl">Donate</p>
              </Link>
              <Icons.donate />
            </div>

            <button
              onClick={() => setIsMenuOpen(true)}
              className="flex items-center gap-2 focus:outline-none"
            >
              <p className="block sm:text-sm md:text-xl">Menu</p>
              <Icons.menu />
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/40"
          onClick={() => setIsMenuOpen(false)}
        >
          <div
            className="bg-white z-[1000] rounded-lg shadow-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <NewNavbar />
            <button
              className="absolute top-3 right-4 z-[50] text-gray-600 hover:text-black text-2xl font-bold focus:outline-none bg-white/80 backdrop-blur-sm rounded-full  "
              onClick={() => setIsMenuOpen(false)}
            >
              ✕
            </button>
            
          </div>
        </div>
      )}
    </>
  );
};

export default NavbarWrapper;
