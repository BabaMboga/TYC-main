import Link from "next/link";
import { FC } from "react";

const HeroText = () => {
  return (
    <div className="flex items-start flex-col gap-4 px-3 md:px-14 py-10 bg-[#19251D] text-slate-50">

      <div className="flex items-center md:px-12">
        <p className="text-base md:text-lg font-normal text-center md:px-2">
          Welcome to TYC Africa Trust, where we empower youth and uplift communities across Africa. Through our programs, we provide 
          the skills, knowledge and support necessary for young individuals to overcome challenges and emerge as confident, resilient, 
          and responsible adults. Whether it&apos;s through education, mentorship or skill-builidng initiatives, we&apos;re dedicated 
          to nurturing the potential of African youth and preparing them for a brighter future.

        </p>

      </div>

      <div className="flex items-center md:px-12">
        <p className="text-base md:text-lg font-normal text-center md:px-2">
          Join us in making a difference by empowering African youth for a brighter tomorrow. Your support matters. 
          Whether you choose to donate, fundraise or participate in our initiatives, you&apos;re contributing to positive 
          change in communities. Together, let&apos;s create opportunities, inspire growth, and build a better future of Africa.
        </p>
      </div>
    </div>
  );
};

export default HeroText;
