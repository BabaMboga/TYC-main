import { FC } from "react";
import { Button } from "../ui/button";
import { Icons } from "../Icons";
import Link from "next/link";

const MoretoExplore = ({}) => {
  return (
    <>
      <div className="w-full md:px-20 py-14 bg-violet-100 flex-col justify-start items-center inline-flex">
        
        <div className="flex flex-col items-start justify-start gap-12 md:h-14 mb-6">
          <div className="flex flex-col items-center self-stretch justify-start gap-2 md:h-14">
            <div className="self-stretch text-3xl font-bold leading-10 text-center text-primary md:text-5xl">
              More to explore
            </div>
            <div className="self-stretch  font-bold leading-10 text-center text-primarymd:text-2xl">
              <p className=" my-3 font-normal leading-10 text-center text-primary md:text-xl">
              Contact us using the contact details above and we’ll be happy to help. Or check out the following pages to learn more about how TYC Africa Trust can help you.
              </p>
            </div>
          </div>
        </div>
        
        <div className="grid items-start justify-start gap-5 py-5 md:gap-24 md:grid-cols-2 md:py-20 px-14">
          <div className="relative rounded-md w-96 h-36 bg-primary text-primary-foreground hover:bg-primary/90 transition-transform duration-1000 transform -skew-x-12 gap-1 shadow-[10px_8px_0px_rgba(29,78,216,1)] hover:shadow-[15px_8px_0px_rgba(29,78,216,1)]">
            <div className="w-80 h-16 left-[19px] top-[58px] absolute  text-3xl font-normal  leading-10 tracking-wide">
            <Link href={'/partner'}>Partner with us</Link>
            </div>
            <div className="w-44 h-36 left-[274px] top-0 absolute opacity-70" />
          </div>


          <div className="relative rounded-md w-96 h-36 bg-primary text-primary-foreground hover:bg-primary/90 transition-transform duration-1000 transform -skew-x-12 gap-1 shadow-[10px_8px_0px_rgba(29,78,216,1)] hover:shadow-[15px_8px_0px_rgba(29,78,216,1)]">
            <div className="w-80 h-16 left-[19px] top-[58px] absolute  text-3xl font-normal  leading-10 tracking-wide">
              <Link href={'/resources-at-tyc-africa-trust'}>Knowledge hub</Link>
            </div>
            <div className="w-44 h-36 left-[274px] top-0 absolute opacity-70" />
          </div>


          <div className="relative rounded-md w-96 h-36 bg-primary text-primary-foreground hover:bg-primary/90 transition-transform duration-1000 transform -skew-x-12 gap-1 shadow-[10px_8px_0px_rgba(29,78,216,1)] hover:shadow-[15px_8px_0px_rgba(29,78,216,1)]">
            <div className="w-80 h-16 left-[19px] top-[58px] absolute  text-3xl font-normal  leading-10 tracking-wide">
              Refer a young person
            </div>
            <div className="w-44 h-36 left-[274px] top-0 absolute opacity-70" />
          </div>

          
          <div className="relative rounded-md w-96 h-36 bg-primary text-primary-foreground hover:bg-primary/90 transition-transform duration-1000 transform -skew-x-12 gap-1 shadow-[10px_8px_0px_rgba(29,78,216,1)] hover:shadow-[15px_8px_0px_rgba(29,78,216,1)]">
            <div className="w-80 h-16 left-[19px] top-[58px] absolute  text-3xl font-normal  leading-10 tracking-wide">
            <Link href={'/frequently-asked-questions'}>Frequently Asked Questions</Link>
            </div>
            <div className="w-44 h-36 left-[274px] top-0 absolute opacity-70" />
          </div>
        </div>
      </div>
    </>
  );
};

export default MoretoExplore;
