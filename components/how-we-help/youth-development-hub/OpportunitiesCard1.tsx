import Image from "next/image";
import { FC } from "react";
import { Icons } from "@/components/Icons";
import Link from "next/link";

const OpportunitiesCard1 = ({}) => {
  return (
    <>
      <div className=" relative flex flex-col justify-start items-center gap-2.5 ">
        <div className="flex flex-col items-center justify-start gap-5 p-2 text-white md:gap-16 md:p-20 grow shrink basis-0">
          
        <div className="flex flex-col items-start justify-start gap-12 p-2 ">
            <div className="flex flex-col items-center justify-start gap-2 ">
              <div className=" text-center text-2xl  md:text-[42px] font-bold  ">
                Explore our activities
              </div>
            </div>
          </div>

          
          <div className="grid gap-4 md:grid-cols-2">

            <div className="  border border-zinc-200 flex-col  items-center gap-[5px] ">
             
              <Image src={"/images/cardpicture2.png"} alt={""} height={400} width={400} sizes="100vw"
              // Make the image display full width
              style={{
                width: '100%',
                height: '400px',}}></Image>
              <div className="flex flex-col items-start self-stretch justify-start gap-4 px-4 pt-6 pb-4">
                <div className="flex flex-col items-start justify-start gap-1 ">
                  <div className="self-stretch  text-[30px] font-semibold  leading-[34px]">
                    Try our mentorship programs
                  </div>
                </div>
                <div className="self-stretch text-2xl font-normal  leading-[33.60px]">
                Experience personalized guidance and growth with our mentorship programs, where we help you navigate your professional journey.
                </div>
              </div>
              <div className=" gap-4 p-4 ">
                <div className=" gap-4 py-4 pr-2 ">
                  <div className=" ">
                    <div className="text-xl font-medium leading-tight tracking-wide underline flex justify-between w-full">
                     <Link href={'/resources-at-tyc-africa-trust'}>Start a journey to success</Link> <Icons.right/>
                    </div>
                  </div>
                  <div className="relative w-6 h-6" />
                </div>
              </div>
            </div>

            <div className="  border border-zinc-200 flex-col  items-center gap-[5px] ">
             
              <Image src={"/images/photo7.jpg"} alt={""} height={400} width={400} sizes="100vw"
              // Make the image display full width
              style={{
                width: '100%',
                height: '400px',}}></Image>
              <div className="flex flex-col items-start self-stretch justify-start gap-4 px-4 pt-6 pb-4">
                <div className="flex flex-col items-start justify-start gap-1 ">
                  <div className="self-stretch  text-[30px] font-semibold  leading-[34px]">
                    Explore our workshops
                  </div>
                </div>
                <div className="self-stretch text-2xl font-normal  leading-[33.60px]">
                Expand your horizons with our interactive workshops, tailored to empower you with new skills and fresh perspectives.
                </div>
              </div>
              <div className=" gap-4 p-4 ">
                <div className=" gap-4 py-4 pr-2 ">
                  <div className=" ">
                    <div className="text-xl font-medium leading-tight tracking-wide underline flex justify-between w-full">
                     <Link href={'/resources-at-tyc-africa-trust'}>Broaden your skill set</Link> <Icons.right/>
                    </div>
                  </div>
                  <div className="relative w-6 h-6" />
                </div>
              </div>
            </div>

            <div className="  border border-zinc-200 flex-col  items-center gap-[5px] ">
             
              <Image src={"/images/photo5.jpg"} alt={""} height={400} width={400} sizes="100vw"
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
                <div className="self-stretch text-2xl font-normal  leading-[33.60px]">
                Embark on a transformative journey with our personal development initiatives, fostering a stronger, more confident you                </div>
              </div>
              <div className=" gap-4 p-4 ">
                <div className=" gap-4 py-4 pr-2 ">
                  <div className=" ">
                    <div className="text-xl font-medium leading-tight tracking-wide underline flex justify-between w-full">
                     <Link href={'/how-we-help/resilience-building'}>A path to self discovery</Link> <Icons.right/>
                    </div>
                  </div>
                  <div className="relative w-6 h-6" />
                </div>
              </div>
            </div>

            <div className="  border border-zinc-200 flex-col  items-center gap-[5px] ">
             
              <Image src={"/images/photo4.jpg"} alt={""} height={400} width={400} sizes="100vw"
              // Make the image display full width
              style={{
                width: '100%',
                height: '400px',}}></Image>
              <div className="flex flex-col items-start self-stretch justify-start gap-4 px-4 pt-6 pb-4">
                <div className="flex flex-col items-start justify-start gap-1 ">
                  <div className="self-stretch  text-[30px] font-semibold  leading-[44px]">
                    Join us at our Annual Youth conference
                  </div>
                </div>
                <div className="self-stretch text-2xl font-normal  leading-[33.60px]">
                Engage with industry leaders and peers, exchange ideas, and be part of a transformative experience. Discover a platform where learning meets excitement, and join us in shaping a brighter future together.                </div>
              </div>
              <div className=" gap-4 p-4 ">
                <div className=" gap-4 py-4 pr-2 ">
                  <div className=" ">
                    <div className="text-xl font-medium leading-tight tracking-wide underline flex justify-between w-full">
                     <Link href={'https://forms.gle/2vatDWT7Pu16gJ646'}>Explore conference details</Link> <Icons.right/>
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
