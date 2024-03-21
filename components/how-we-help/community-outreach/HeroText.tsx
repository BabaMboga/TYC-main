import Link from "next/link";
import { FC } from "react";

const HeroText = () => {
  return (
    <div className="flex flex-col items-center gap-4 px-3 md:px-14 py-10 bg-[#19251D] text-slate-50">

      <div className="flex items-center md:px-12">
        <p className="text-2xl font-semibold text-center md:px-2">
        TYC Africa Trust is committed to being a positive force in communities. Our 
Community Outreach program focuses on corporate social responsibility (CSR) 
initiatives, environmental conservation, and support for the disadvantaged. We 
actively contribute to societal well-being
        </p>

      </div>

      <div className=" flex flex-col place-content-center items-center md:px-12 w-11/12">
        <ul className="list-outside list-disc ">
          <li>
          <p className="text-2xl font-semibold py-2 md:px-2">
          <Link href={'/'} className="underline">Environmental Conservation:</Link> Engage in initiatives that promote 
environmental sustainability and address critical issues such as climate 
change. Join us in protecting and preserving our planet
        </p>
          </li>
          <li>
          <p className="text-2xl font-semibold  py-3 md:px-2">
          <Link href={'/'} className="underline">Community Development Projects:</Link> Collaborate with communities to 
implement projects that enhance infrastructure, education, healthcare, and 
access to clean water. Make a tangible impact on people&apos;s lives
        </p>
          </li>
          <li>
          <p className="text-2xl font-semibold  md:px-2">
          <Link href={'/'} className="underline">Support for the vulnerable:</Link>Contribute to initiatives supporting children&apos;s 
homes, the elderly, and orphanages. TYC Africa Trust believes in creating a 
compassionate society where everyone has the opportunity to thrive
        </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeroText;
