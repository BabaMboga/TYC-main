import Link from "next/link";
import { FC } from "react";

const HeroText = () => {
  return (
    <div className="flex items-start flex-col gap-4 px-3 md:px-14 py-10 bg-[#19251D] text-slate-50">

      <div className="flex items-center md:px-12">
        <p className="text-base md:text-lg font-normal text-center md:px-2">
          <Link href={'/how-we-help'}><span className="underline">Get empowered</span></Link> with the skills, knowledge, and support you need to
          overcome challenges and emerge as a confident, resilient, and
          responsible adult.
        </p>

      </div>

      <div className="flex items-center md:px-12">
        <p className="text-base md:text-lg font-normal text-center md:px-2">
          Or empower African Youth for a Brighter Tomorrow. Join Us in Making a
          Difference: <Link href={'/support-us'}><span className="underline"> Donate, Fundraise, or Participate </span></Link> in Our Initiatives.
        </p>
      </div>
    </div>
  );
};

export default HeroText;
