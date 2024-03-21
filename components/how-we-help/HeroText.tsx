import { FC } from "react";

const HeroText = () => {
  return (
    <div className="flex items-start flex-col gap-4 px-3 md:px-14 py-10 bg-[#19251D] text-slate-50">

      <div className="flex items-center md:px-12">
        <p className="text-2xl font-semibold text-center md:px-2">
        At TYC Africa Trust, our commitment is to empower and uplift youth across Africa, fostering their personal growth, well-being, and holistic development. We offer a range of impactful programs, each dedicated to specific areas of enrichment and growth.
        </p>

      </div>

      <div className="flex items-center md:px-12">
        <p className="text-2xl font-semibold text-center md:px-2">
        We aim to create a profound impact on the lives of young individuals, preparing them for the challenges and opportunities of the future. By focusing on key pillars — youth development, talent discovery, resilience building, and community outreach — we endeavor to provide a comprehensive support system that nurtures skills, fosters talents, strengthens mental well-being, and cultivates a compassionate society.
        </p>
      </div>

      <div className="flex items-center md:px-12">
        <p className="text-2xl font-semibold text-center md:px-2">
        Explore our array of initiatives below, each designed to serve as a catalyst for positive change and personal growth.
        </p>
      </div>
    </div>
  );
};

export default HeroText;
