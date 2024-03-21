import { FC } from "react";
import { Button } from "./ui/button";
import { Icons } from "./Icons";
import Link from "next/link";

const MoretoExplore = ({}) => {
  return (
    <>
      <div className="w-full px-4 md:px-20 py-14 bg-[#810E0E] flex-col justify-start items-center inline-flex">
        
        <div className="flex flex-col items-start justify-start gap-12 md:h-14">
          <div className="flex flex-col items-center self-stretch justify-start gap-2 md:h-14">
            <div className="self-stretch text-3xl font-bold leading-10 text-center text-white md:text-5xl">
              More to explore
            </div>
          </div>
        </div>
        
        <div className="grid items-start justify-start gap-5 py-5 md:gap-24 md:grid-cols-2 md:py-20 md:px-14">

          <div className="hidden md:block relative rounded-md w-96 h-36 bg-primary text-primary-foreground hover:bg-primary/90 transition-transform duration-1000 transform -skew-x-12 gap-1 shadow-[10px_8px_0px_rgba(29,78,216,1)] hover:shadow-[15px_8px_0px_rgba(29,78,216,1)]">
            <div className="w-80 h-16 left-[19px] top-[58px] absolute  text-4xl font-semibold  leading-10 tracking-wide">
            <Link href={'/partner'}>Partner with us</Link>
            </div>
            <div className="w-44 h-36 left-[274px] top-0 absolute opacity-70" />
          </div>

          <div className="rounded-sm  flex md:hidden bg-primary text-primary-foreground border-b-[6px] border-b-[rgb(29,78,216)]">
            <div className="text-2xl flex p-4">
              <Link href={'/partner'}>Partner with us</Link>
            </div>
          </div>


          <div className="hidden md:block relative rounded-md w-96 h-36 bg-primary text-primary-foreground hover:bg-primary/90 transition-transform duration-1000 transform -skew-x-12 gap-1 shadow-[10px_8px_0px_rgba(29,78,216,1)] hover:shadow-[15px_8px_0px_rgba(29,78,216,1)]">
            <div className="w-80 h-16 left-[19px] top-[58px] absolute  text-4xl font-semibold  leading-10 tracking-wide">
            <Link href={'/resource-at-tyc-africa-trust'}>Knowledge hub</Link>
            </div>
            <div className="w-44 h-36 left-[274px] top-0 absolute opacity-70" />
          </div>

          <div className="rounded-sm  flex md:hidden bg-primary text-primary-foreground border-b-[6px] border-b-[rgb(29,78,216)]">
            <div className="text-2xl flex p-4">
            <Link href={'/resource-at-tyc-africa-trust'}>Knowledge hub</Link>
            </div>
          </div>


          <div className="hidden md:block relative rounded-md w-96 h-36 bg-primary text-primary-foreground hover:bg-primary/90 transition-transform duration-1000 transform -skew-x-12 gap-1 shadow-[10px_8px_0px_rgba(29,78,216,1)] hover:shadow-[15px_8px_0px_rgba(29,78,216,1)]">
            <div className="w-80 h-16 left-[19px] top-[58px] absolute  text-4xl font-semibold  leading-10 tracking-wide">
            <Link href={'/support-us'}>Refer a young person</Link>
            </div>
            <div className="w-44 h-36 left-[274px] top-0 absolute opacity-70" />
          </div>

          <div className="rounded-sm  flex md:hidden bg-primary text-primary-foreground border-b-[6px] border-b-[rgb(29,78,216)]">
            <div className="text-2xl flex p-4">
            <Link href={'/support-us'}>Refer a young person</Link>
            </div>
          </div>

          
          <div className="hidden md:block relative rounded-md w-96 h-36 bg-primary text-primary-foreground hover:bg-primary/90 transition-transform duration-1000 transform -skew-x-12 gap-1 shadow-[10px_8px_0px_rgba(29,78,216,1)] hover:shadow-[15px_8px_0px_rgba(29,78,216,1)]">
            <div className="w-80 h-16 left-[19px] top-[58px] absolute  text-4xl font-semibold  leading-10 tracking-wide">
            <Link href={'/frequently-asked-questions'}>Frequently Asked Questions</Link>
            </div>
            <div className="w-44 h-36 left-[274px] top-0 absolute opacity-70" />
          </div>

          <div className="rounded-sm  flex md:hidden bg-primary text-primary-foreground border-b-[6px] border-b-[rgb(29,78,216)]">
            <div className="text-2xl flex p-4">
            <Link href={'/frequently-asked-questions'}>Frequently Asked Questions</Link>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default MoretoExplore;
