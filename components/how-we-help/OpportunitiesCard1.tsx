import Image from "next/image";
import { FC } from "react";
import { Icons } from "../Icons";
import Link from "next/link";

const OpportunitiesCard1 = ({}) => {
  return (
    <>
      <div className=" relative flex flex-col justify-start items-center gap-2.5 ">
        <div className="flex flex-col items-center justify-start gap-5 p-2 text-white md:gap-16 md:p-20 grow shrink basis-0">
          
          
          <div className="grid gap-4 md:grid-cols-2">

            <div className="  border border-zinc-200 flex-col  items-center gap-[5px] ">
             
              <Image src={"/images/cardpicture1.png"} alt={""} height={400} width={400}sizes="100vw"
              // Make the image display full width
              style={{
                width: '100%',
                height: '400px',}}></Image>
              <div className="flex flex-col items-start self-stretch justify-start gap-4 px-4 pt-6 pb-4">
                <div className="flex flex-col items-start justify-start gap-1 ">
                  <div className="self-stretch  text-[30px] font-semibold  leading-[34px]">
                    Youth Development program
                  </div>
                </div>
                <div className="self-stretch text-base font-normal  leading-[33.60px]">
                Our Youth Development program is a cornerstone at TYC Africa Trust. It&apos;s dedicated to equipping young individuals with the skills, knowledge, and experiences that pave the way for leadership and success
                </div>
              </div>
              <div className=" gap-4 p-4 ">
                <div className=" gap-4 py-4 pr-2 ">
                  <div className=" ">
                    <div className="text-base font-medium leading-tight tracking-wide underline flex justify-between w-full">
                     <Link className="flex" href={'/how-we-help'}>Learn more <Icons.right/></Link> 
                    </div>
                  </div>
                  <div className="relative w-6 h-6" />
                </div>
              </div>
            </div>

            <div className="  border border-zinc-200 flex-col  items-center gap-[5px] ">
             
              <Image src={"/images/use/image097.jpg"} alt={""} height={400} width={400} sizes="100vw"
              // Make the image display full width
              style={{
                width: '100%',
                height: '400px',}}></Image>
              <div className="flex flex-col items-start self-stretch justify-start gap-4 px-4 pt-6 pb-4">
                <div className="flex flex-col items-start justify-start gap-1 ">
                  <div className="self-stretch  text-[30px] font-semibold  leading-[34px]">
                    Talent Discovery
                  </div>
                </div>
                <div className="self-stretch text-base font-normal  leading-[33.60px]">
                We believe in the power of individuality. Our Talent Discovery program is designed to identify and nurture the unique abilities of every young person.
                </div>
              </div>
              <div className=" gap-4 p-4 ">
                <div className=" gap-4 py-4 pr-2 ">
                  <div className=" ">
                    <div className="text-base font-medium leading-tight tracking-wide underline flex justify-between w-full">
                     <Link className="flex" href={'/how-we-help'}>Learn more <Icons.right/></Link> 
                    </div>
                  </div>
                  <div className="relative w-6 h-6" />
                </div>
              </div>
            </div>

            <div className="  border border-zinc-200 flex-col  items-center gap-[5px] ">
             
              <Image src={"/images/cardpicture3.png"} alt={""} height={400} width={400}sizes="100vw"
              // Make the image display full width
              style={{
                width: '100%',
                height: '400px',}}></Image>
              <div className="flex flex-col items-start self-stretch justify-start gap-4 px-4 pt-6 pb-4">
                <div className="flex flex-col items-start justify-start gap-1 ">
                  <div className="self-stretch  text-[30px] font-semibold  leading-[34px]">
                    Resilience Building Program
                  </div>
                </div>
                <div className="self-stretch text-base font-normal  leading-[33.60px]">
                Mental health is a priority at TYC Africa Trust. Our Resilience Building program focuses on empowering youth with the tools to navigate the complexities of mental well-being.
                </div>
              </div>
              <div className=" gap-4 p-4 ">
                <div className=" gap-4 py-4 pr-2 ">
                  <div className=" ">
                    <div className="text-base font-medium leading-tight tracking-wide underline flex justify-between w-full">
                     <Link className="flex" href={'/how-we-help'}>Learn more <Icons.right/></Link> 
                    </div>
                  </div>
                  <div className="relative w-6 h-6" />
                </div>
              </div>
            </div>

            <div className="  border border-zinc-200 flex-col  items-center gap-[5px] ">
             
              <Image src={"/images/use/image085.jpg"} alt={""} height={400} width={400}sizes="100vw"
              // Make the image display full width
              style={{
                width: '100%',
                height: '400px',}}></Image>
              <div className="flex flex-col items-start self-stretch justify-start gap-4 px-4 pt-6 pb-4">
                <div className="flex flex-col items-start justify-start gap-1 ">
                  <div className="self-stretch  text-[30px] font-semibold  leading-[34px]">
                    Community Outreach
                  </div>
                </div>
                <div className="self-stretch text-base font-normal  leading-[33.60px]">
                We are committed to being a positive force in communities through our Community Outreach program, focusing on corporate social responsibility (CSR) initiatives, environmental conservation, and support for the disadvantaged.
                </div>
              </div>
              <div className=" gap-4 p-4 ">
                <div className=" gap-4 py-4 pr-2 ">
                  <div className=" ">
                    <div className="text-base font-medium leading-tight tracking-wide underline flex justify-between w-full">
                     <Link className="flex" href={'/how-we-help'}>Learn more <Icons.right/></Link> 
                    </div>
                  </div>
                  <div className="relative w-6 h-6" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default OpportunitiesCard1;
