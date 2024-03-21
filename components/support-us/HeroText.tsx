import { FC } from "react";

const HeroText = () => {
  return (
    <div className="flex  flex-col gap-4 px-3 md:px-14 py-10 bg-[#19251D] text-slate-50">

      <div className="items-center md:px-12">
        <p className="font-semibold text-center text-3xl md:px-2">Your input can give young people hope</p>
      </div>

      <div className="flex items-center md:px-12">
        <p className="text-2xl font-semibold text-center md:px-2">
        We are dedicated to helping young individuals, providing them with the 
essential tools, resources and support you need to thrive and succeed in life.
Whether you want to gain confidence or essential skills, we will guide you through our divisions, initiatives and personalized approaches to help in your journey towards personal growth and well-being. Sign up for both in person and online engagement.
        </p>
      </div>
    </div>
  );
};

export default HeroText;
