import { FC } from "react";
import { Button } from "../ui/button";
import { Icons } from "../Icons";
import Link from "next/link";

const MoretoExplore = ({}) => {
  return (
    <>
      <div className="w-full md:px-20 py-14 bg-[#810E0E] flex-col justify-start items-center inline-flex">
        
        <div className="flex flex-col items-start justify-start gap-12 md:h-14">
          <div className="flex flex-col items-center self-stretch justify-start gap-2 md:h-14">
            <div className="self-stretch text-xl font-bold leading-10 text-center text-white md:text-5xl">
              Find out more about us
            </div>
          </div>
        </div>
        
        <div className="grid items-start justify-start gap-5 py-5 md:gap-24 md:grid-cols-2 md:py-20 px-14">
          <div className="relative rounded-md w-96 h-36 bg-primary text-primary-foreground hover:bg-primary/90 transition-transform duration-1000 transform -skew-x-12 gap-1 shadow-[10px_8px_0px_rgba(29,78,216,1)] hover:shadow-[15px_8px_0px_rgba(29,78,216,1)]">
            <div className="w-80 h-16 skew-x-12 left-[19px] top-[58px] absolute  text-3xl font-normal  leading-10 tracking-wide">
              Our events
            </div>
            {/* <div className="w-44 h-36 left-[274px] top-0 absolute opacity-70" /> */}
          </div>


          <div className="relative rounded-md w-96 h-36 bg-primary text-primary-foreground hover:bg-primary/90 transition-transform duration-1000 transform -skew-x-12 gap-1 shadow-[10px_8px_0px_rgba(29,78,216,1)] hover:shadow-[15px_8px_0px_rgba(29,78,216,1)]">
          <Link href={'/tyc-gallery'}></Link>
            <div className="w-80 skew-x-12 h-16 left-[19px] top-[58px] absolute  text-3xl font-normal  leading-10 tracking-wide">
              TYC Gallery
            </div>
            {/* <div className="w-44 h-36 left-[274px] top-0 absolute opacity-70" /> */}
          </div>


          <div className="relative rounded-md w-96 h-36 bg-primary text-primary-foreground hover:bg-primary/90 transition-transform duration-1000 transform -skew-x-12 gap-1 shadow-[10px_8px_0px_rgba(29,78,216,1)] hover:shadow-[15px_8px_0px_rgba(29,78,216,1)]">
            <div className="w-80 h-16 skew-x-12 left-[19px] top-[58px] absolute  text-3xl font-normal  leading-10 tracking-wide">
             Success Stories
            </div>
            {/* <div className="w-44 h-36 left-[274px] top-0 absolute opacity-70" /> */}
          </div>

          
          <div className="relative rounded-md w-96 h-36 bg-primary text-primary-foreground hover:bg-primary/90 transition-transform duration-1000 transform -skew-x-12 gap-1 shadow-[10px_8px_0px_rgba(29,78,216,1)] hover:shadow-[15px_8px_0px_rgba(29,78,216,1)]">
            <div className="w-80 h-16 skew-x-12 left-[19px] top-[58px] absolute  text-3xl font-normal  leading-10 tracking-wide">
              Partner with us
            </div>
            {/* <div className="w-44 h-36 left-[274px] top-0 absolute opacity-70" /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default MoretoExplore;
