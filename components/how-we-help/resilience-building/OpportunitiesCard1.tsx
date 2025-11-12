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
                Discover and Grow Your Talent
              </div>
            </div>
          </div>

          
          <div className="grid gap-4 md:grid-cols-2">

            <div className="  border border-zinc-200 flex-col  items-center gap-[5px] ">
             
              <Image src={"https://res.cloudinary.com/djfitsjh9/image/upload/v1706123296/tyc-images/image117_wzxq6p.jpg"} alt={"Talent discovery "} height={400} width={400} sizes="100vw"
              // Make the image display full width
              style={{
                width: '100%',
                height: '400px',}}></Image>
              <div className="flex flex-col items-start self-stretch justify-start gap-4 px-4 pt-6 pb-4">
                <div className="flex flex-col items-start justify-start gap-1 ">
                  <div className="self-stretch  text-[30px] font-semibold  leading-[34px]">
                    Identify your strengths
                  </div>
                </div>
                <div className="self-stretch text-base font-normal  leading-[33.60px]">
                Through our discovery programs, we help you recognize your innate talents, passions, and abilities — the first step to unlocking your potential.
                </div>
              </div>
              <div className=" gap-4 p-4 ">
                <div className=" gap-4 py-4 pr-2 ">
                  <div className=" ">
                    <div className="text-base font-medium leading-tight tracking-wide underline flex justify-between w-full">
                     <Link className="flex" href={'/resources-at-tyc-africa-trust'}>Begin your journey <Icons.right/></Link> 
                    </div>
                  </div>
                  <div className="relative w-6 h-6" />
                </div>
              </div>
            </div>

            <div className="  border border-zinc-200 flex-col  items-center gap-[5px] ">
             
              <Image src={"https://res.cloudinary.com/djfitsjh9/image/upload/v1706123267/tyc-images/image093_oijphy.jpg"} alt={""} height={400} width={400} sizes="100vw"
              // Make the image display full width
              style={{
                width: '100%',
                height: '400px',}}></Image>
              <div className="flex flex-col items-start self-stretch justify-start gap-4 px-4 pt-6 pb-4">
                <div className="flex flex-col items-start justify-start gap-1 ">
                  <div className="self-stretch  text-[30px] font-semibold  leading-[34px]">
                    Nurture Your Skills
                  </div>
                </div>
                <div className="self-stretch text-base font-normal  leading-[33.60px]">
                Our training and mentorship programs equip you with the skills and confidence to transform your talent into tangible success.
                </div>
              </div>
              <div className=" gap-4 p-4 ">
                <div className=" gap-4 py-4 pr-2 ">
                  <div className=" ">
                    <div className="text-base font-medium leading-tight tracking-wide underline flex justify-between w-full">
                     <Link className="flex" href={'/resources-at-tyc-africa-trust'}>Grow your abilities <Icons.right/></Link> 
                    </div>
                  </div>
                  <div className="relative w-6 h-6" />
                </div>
              </div>
            </div>

            <div className="  border border-zinc-200 flex-col  items-center gap-[5px] ">
             
              <Image src={"https://res.cloudinary.com/djfitsjh9/image/upload/v1706123276/tyc-images/image099_tpgsv1.jpg"} alt={""} height={400} width={400} sizes="100vw"
              // Make the image display full width
              style={{
                width: '100%',
                height: '400px',}}></Image>
              <div className="flex flex-col items-start self-stretch justify-start gap-4 px-4 pt-6 pb-4">
                <div className="flex flex-col items-start justify-start gap-1 ">
                  <div className="self-stretch  text-[30px] font-semibold  leading-[34px]">
                    Showcase Your Talent
                  </div>
                </div>
                <div className="self-stretch text-base font-normal  leading-[33.60px]">
                  Participate in our talent showcases, exhibitions and competitions - where we connect you with industry professionals and audiences that matter.
                </div>
              </div>
              <div className=" gap-4 p-4 ">
                <div className=" gap-4 py-4 pr-2 ">
                  <div className=" ">
                    <div className="text-base font-medium leading-tight tracking-wide underline flex justify-between w-full">
                     <Link className="flex" href={'/how-we-help/resilience-building'}>Step into the spotlight<Icons.right/></Link> 
                    </div>
                  </div>
                  <div className="relative w-6 h-6" />
                </div>
              </div>
            </div>

            <div className="  border border-zinc-200 flex-col  items-center gap-[5px] ">
             
              <Image src={"https://res.cloudinary.com/djfitsjh9/image/upload/v1758003401/17be2c68-9371-4f86-9a8c-06be2098c3f9_kqaod0.jpg"} alt={""} height={400} width={400} sizes="100vw"
              // Make the image display full width
              style={{
                width: '100%',
                height: '400px',}}></Image>
              <div className="flex flex-col items-start self-stretch justify-start gap-4 px-4 pt-6 pb-4">
                <div className="flex flex-col items-start justify-start gap-1 ">
                  <div className="self-stretch  text-[30px] font-semibold  leading-[44px]">
                    Connect to opportunities
                  </div>
                </div>
                <div className="self-stretch text-base font-normal  leading-[33.60px]">
                  We bridge talented youth with mentorship, internships and platforms that amplify their impact and visibility.
                </div>
              </div>
              <div className=" gap-4 p-4 ">
                <div className=" gap-4 py-4 pr-2 ">
                  <div className=" ">
                    <div className="text-base font-medium leading-tight tracking-wide underline flex justify-between w-full">
                     <Link className="flex" href={'https://forms.gle/2vatDWT7Pu16gJ646'}>Find your next opportunity <Icons.right/> </Link> 
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
