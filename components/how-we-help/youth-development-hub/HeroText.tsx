import Link from "next/link";
import { FC } from "react";

const HeroText = () => {
  return (
    <div className="flex  flex-col items-center gap-5 px-3 md:px-14 py-10 bg-[#19251D] text-slate-50">

      <div className="flex items-center md:px-12">
        <p className="text-2xl font-semibold text-center md:px-2">
        Our Youth Development program is a cornerstone of TYC Africa Trust, dedicated to equipping young individuals with the skills, knowledge, and experiences that pave the way for leadership and success. Through a diverse range of initiatives, we foster personal growth, resilience, and a sense of responsibility, preparing youth for the challenges of the future.
        </p>

      </div>

      <div className=" flex flex-col  items-center md:px-12 w-11/12">
        <ul className="list-outside list-disc ">
          <li>
          <p className="text-2xl font-semibold py-2 md:px-2">
          <Link href={'/'} className="underline">Conferences and Workshops:</Link> Engage in dynamic events designed to inspire, educate, and empower. Our conferences and workshops cover a spectrum of topics, from leadership and communication to personal development.
        </p>
          </li>
          <li>
          <p className="text-2xl font-semibold  py-3 md:px-2">
          <Link href={'/'} className="underline">Mentorship programs:</Link> Connect with experienced mentors who provide guidance, support, and real-world insights. Our mentorship programs bridge the gap between aspiration and achievement
        </p>
          </li>
          <li>
          <p className="text-2xl font-semibold  md:px-2">
          <Link href={'/'} className="underline">Education Specialists:</Link>Education Specialists: Benefit from workshops facilitated by experts focusing on academic excellence, social skills, and emotional intelligence. Education specialists guide youth on a journey of self-discovery and skill enhancement.
        </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeroText;
