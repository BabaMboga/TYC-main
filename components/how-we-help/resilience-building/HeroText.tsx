import Link from "next/link";
import { FC } from "react";

const HeroText = () => {
  return (
    <div className="flex  flex-col items-center gap-5 px-3 md:px-14 py-10 bg-[#19251D] text-slate-50">

      <div className="flex items-center md:px-12">
        <p className="text-2xl font-semibold text-center md:px-2">
        Mental health is a priority at TYC Africa Trust. Our Resilience Building program focuses on empowering youth with the tools to navigate the complexities of mental well-being. Through counseling, awareness campaigns, and support systems, we aim to create a community that values and prioritizes mental health.
         </p>

      </div>

      <div className=" flex flex-col  items-center md:px-12 w-11/12">
        <ul className="list-outside list-disc ">
          <li>
          <p className="text-2xl font-semibold py-2 md:px-2">
          <Link href={'/'} className="underline">Skills Assessments:</Link> Engage in dynamic events to uncover your innate talents and strengths through comprehensive skills assessments. Understand what makes you unique and how to harness your potential.
        </p>
          </li>
          <li>
          <p className="text-2xl font-semibold  py-3 md:px-2">
          <Link href={'/'} className="underline">Creative Workshops:</Link> Participate in workshops tailored to various talents, including arts, sports, technology, and more. Express yourself, discover new passions, and develop your skills.
        </p>
          </li>
          <li>
          <p className="text-2xl font-semibold  md:px-2">
          <Link href={'/'} className="underline">Showcase Events:</Link>Celebrate your achievements and talents through showcase events. These events provide a platform for young individuals to display their skills and inspire others.
        </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeroText;
