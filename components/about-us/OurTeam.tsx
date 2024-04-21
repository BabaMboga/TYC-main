import { FC } from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import { Icons } from "../Icons";
import Link from "next/link";

const OurTeam = ({}) => {
  return (
    <>
      <div className="block ">
        <div className="relative flex flex-col-reverse items-center md:py-16">

          <div className="md:mr-[50%] md:w-1/2 md:z-10 border-b-4 border-b-black bg-white md:px-4 relative md:top-6 flex items-center flex-col">
            <div className="py-3 font-semibold">
              <h2 className="px-2 text-2xl text-center">
                Our Team
              </h2>
            </div>
            
            <div className="px-3 py-3 text-base font-normal">
              <div className="relative text-center whitespace-pre-wrap">
                <p>
                Meet the driving force behind TYC Africa Trust. Our team is a diverse blend of dedicated professionals, experts in youth development, mental health, education, and community engagement <br/> Together, we share a common goal: to be architects 
of positive change in the lives of young individuals.
                </p>
              </div>
            </div>

            <div className='flex items-center pb-4'>
            
            <Link href={'/about-us'}>
            <Button className='flex justify-betweenpy-4 px-8 transition-transform duration-1000 transform -skew-x-12 gap-1 shadow-[10px_8px_0px_rgba(100,116,139,1)] hover:shadow-[15px_8px_0px_rgba(100,116,139,1)]'>
                <span>Meet the team</span>
                <Icons.right/>
            </Button></Link>
           </div>
           
          </div>

          <div className="md:absolute inset-y-0  right-0 h-full md:w-[55%]">
            <div className="w-full h-full md:absolute ">
              <div className="overflow-hidden opacity-1 ">
                <Image
                  className="border"
                  src="https://res.cloudinary.com/djfitsjh9/image/upload/v1706124513/tyc-images/image052_tonrt3.jpg"
                  alt={"TYC members standing together"}
                  width={720}
                  height={994}
                ></Image>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurTeam;
