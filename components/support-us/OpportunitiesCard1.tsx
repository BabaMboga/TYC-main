import Image from "next/image";
import { FC } from "react";
import { Icons } from "@/components/Icons";
import Link from "next/link";

const OpportunitiesCard1 = ({}) => {
  return (
    <>
      <div className=" relative flex flex-col justify-start items-center gap-2.5 ">
        <div className="flex flex-col items-center justify-start gap-5 p-2 text-white md:gap-16 md:p-20 grow shrink basis-0">
          
        
          
          <div className="grid gap-4 md:grid-cols-2">

            <div className="  border border-zinc-200 flex-col  items-center gap-[5px] ">
             
              <Image src={"/images/new/photo1.jpg"} alt={""} height={400} width={400} sizes="100vw"
              // Make the image display full width
              style={{
                width: '100%',
                height: '400px',}}></Image>
              <div className="flex flex-col items-start self-stretch justify-start gap-4 px-4 pt-6 pb-4">
                <div className="flex flex-col items-start justify-start gap-1 ">
                  <div className="self-stretch  text-[40px] font-bold  leading-[44px]">
                    Volunteer your time
                  </div>
                </div>
                <div className="self-stretch text-2xl font-normal  leading-[33.60px]">
                Give the gift of your time. Join our team of passionate volunteers and help us create a better world through your actions and dedication.
                </div>
              </div>
              <div className=" gap-4 p-4 ">
                <div className=" gap-4 py-4 pr-2 ">
                  <div className=" ">
                    <div className="text-xl font-medium leading-tight tracking-wide underline flex justify-between w-full">
                     <Link href={'/'}>Be a catalyst for change</Link> <Icons.right/>
                    </div>
                  </div>
                  <div className="relative w-6 h-6" />
                </div>
              </div>
            </div>

            <div className="  border border-zinc-200 flex-col  items-center gap-[5px] ">
             
              <Image src={"/images/new/photo4.jpg"} alt={""} height={400} width={400} sizes="100vw"
              // Make the image display full width
              style={{
                width: '100%',
                height: '400px',}}></Image>
              <div className="flex flex-col items-start self-stretch justify-start gap-4 px-4 pt-6 pb-4">
                <div className="flex flex-col items-start justify-start gap-1 ">
                  <div className="self-stretch  text-[40px] font-bold  leading-[44px]">
                    Fundraise with us
                  </div>
                </div>
                <div className="self-stretch text-2xl font-normal  leading-[33.60px]">
                Join hands with us to raise funds for critical initiatives. Be a part of our fundraising efforts and help us make a difference.
                </div>
              </div>
              <div className=" gap-4 p-4 ">
                <div className=" gap-4 py-4 pr-2 ">
                  <div className=" ">
                    <div className="text-xl font-medium leading-tight tracking-wide underline flex justify-between w-full">
                     <Link href={'/'}>Help amplify our impact</Link> <Icons.right/>
                    </div>
                  </div>
                  <div className="relative w-6 h-6" />
                </div>
              </div>
            </div>

            <div className="  border border-zinc-200 flex-col  items-center gap-[5px] ">
             
              <Image src={"/images/use/image031.jpg"} alt={""} height={400} width={400} sizes="100vw"
              // Make the image display full width
              style={{
                width: '100%',
                height: '400px',}}></Image>
              <div className="flex flex-col items-start self-stretch justify-start gap-4 px-4 pt-6 pb-4">
                <div className="flex flex-col items-start justify-start gap-1 ">
                  <div className="self-stretch  text-[40px] font-bold  leading-[44px]">
                    Leave a gift in your will
                  </div>
                </div>
                <div className="self-stretch text-2xl font-normal  leading-[33.60px]">
                Secure the future of the causes you care about by leaving a legacy gift in your will. Ensure that your values live on and continue to make a difference.                </div>
              </div>
              <div className=" gap-4 p-4 ">
                <div className=" gap-4 py-4 pr-2 ">
                  <div className=" ">
                    <div className="text-xl font-medium leading-tight tracking-wide underline flex justify-between w-full">
                     <Link href={'/'}>Leave a lasting legacy</Link> <Icons.right/>
                    </div>
                  </div>
                  <div className="relative w-6 h-6" />
                </div>
              </div>
            </div>

            <div className="  border border-zinc-200 flex-col  items-center gap-[5px] ">
             
              <Image src={"/images/use/image023.jpg"} alt={""} height={400} width={400} sizes="100vw"
              // Make the image display full width
              style={{
                width: '100%',
                height: '400px',}}></Image>
              <div className="flex flex-col items-start self-stretch justify-start gap-4 px-4 pt-6 pb-4">
                <div className="flex flex-col items-start justify-start gap-1 ">
                  <div className="self-stretch  text-[40px] font-bold  leading-[44px]">
                    Join our campaigns
                  </div>
                </div>
                <div className="self-stretch text-2xl font-normal  leading-[33.60px]">
                Be part of our journey for change. Discover our impactful campaigns and find your place in our mission for a better world.             </div>
              </div>
              <div className=" gap-4 p-4 ">
                <div className=" gap-4 py-4 pr-2 ">
                  <div className=" ">
                    <div className="text-xl font-medium leading-tight tracking-wide underline flex justify-between w-full">
                     <Link href={'/'}>Join our cause</Link> <Icons.right/>
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
