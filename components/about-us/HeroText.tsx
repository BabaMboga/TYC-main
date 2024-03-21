import Link from "next/link";
import { FC } from "react";

const HeroText = () => {
  return (
    <div className="flex items-center flex-col gap-4 px-3 md:px-14 py-10 bg-[#19251D] text-slate-50">

<div className="flex text-center md:px-12">
        <h1 className="font-semibold text-4xl">Our Story: Nurturing the future of African Youth</h1>

      </div>

      <div className="flex items-center md:px-12">
        <p className="text-2xl font-semibold text-center md:px-2">
        The roots of TYC Africa Trust trace back to a vision—a vision of empowered youth 
transforming communities. What started as a humble endeavor in  <Link href={'/'} aria-disabled target="_blank" style={{pointerEvents: 'none'}} className="underline">the Founder</Link>&apos;s 
house has evolved into a dynamic force for change, impacting lives and shaping 
futures. Our journey has been one of growth, resilience, and unwavering dedication 
to the cause of youth development.
</p>

      </div>

      <div className="flex items-center md:px-12">
        <p className="text-2xl font-semibold text-center md:px-2">
        Learn about our history, the structure that guides our efforts, and our unwavering commitment to making a positive impact. Discover what sets us apart and how we&apos;re dedicated to shaping resilient, responsible, and confident young adults.        </p>
      </div>

      
    </div>
  );
};

export default HeroText;
