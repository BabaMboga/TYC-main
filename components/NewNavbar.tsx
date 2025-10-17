"use client";

import Link from "next/link";

interface NewNavbarProps {
  onClose: () => void;
}

const NewNavbar = ({onClose}: NewNavbarProps) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-50">
      <div className="bg-white rounded-lg shadow-lg max-w-2xl w-full p-6">
        <div className="grid gap-4">

          {/* About us */}
          <div 
            className="hover:bg-[#F1F5F9] rounded-md p-2"
            onClick={onClose}
          >
            <Link href="/about-us">
              <p className="font-[700]">About us</p>
              <p className="text-[#64748B] text-sm">
                Welcome to the heart of TYC Africa Trust, where our story unfolds,
                and our commitment to youth empowerment comes to life.
              </p>
            </Link>
          </div>

          {/* What we do */}
          <div 
            className="hover:bg-[#F1F5F9] rounded-md p-2"
            onClick={onClose}
          >
            <Link href="/how-we-help">
              <p className="font-[700]">What we do</p>
              <p className="text-[#64748B] text-sm">
                Our initiatives are designed to foster personal growth, leadership,
                and community engagement.
              </p>
            </Link>
          </div>

          {/* How to get involved */}
          <div 
            className="hover:bg-[#F1F5F9] rounded-md p-2"
            onClick={onClose}
          >
            <Link href="/support-us">
              <p className="font-[700]">How to get involved</p>
              <p className="text-[#64748B] text-sm">
                Explore our programs, read inspiring stories, and consider joining us
                in our mission to empower the next generation.
              </p>
            </Link>
          </div>

          {/* Contact us */}
          <div 
            className="hover:bg-[#F1F5F9] rounded-md p-2"
            onClick={onClose}
          >
            <Link href="/contact-us">
              <p className="font-[700]">Contact us</p>
              <p className="text-[#64748B] text-sm">
                Got questions about our programs, initiatives, or TYC Africa Trust in
                general? We&apos;re here to provide answers and assistance.
              </p>
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default NewNavbar;
