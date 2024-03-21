import Image from "next/image";
import { FC } from "react";
import { Icons } from "../Icons";
import Link from "next/link";

const EducationResources = ({}) => {
  return (
    <>
      <div className=" relative flex flex-col justify-start items-center gap-2.5 ">
        <div className="flex flex-col items-center justify-start gap-5 p-2 text-white md:gap-16 md:p-20 grow shrink basis-0">
          
          <div className="flex flex-col items-start justify-start gap-12 p-2 ">
            <div className="flex flex-col items-center justify-start gap-2 ">
              <div className=" text-center text-2xl  md:text-[42px] font-bold  ">
                Education resources
              </div>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">

            <div className="  border border-zinc-200 flex-col   gap-[5px] inline-flex">
             
              <Image src={"/images/photo4.jpg"} alt={""} height={400} width={400} sizes="100vw"
              // Make the image display full width
              style={{
                width: '100%',
                height: '400px',}}></Image>
              <div className="flex flex-col items-start self-stretch justify-start gap-4 px-4 pt-6 pb-4">
                <div className="flex flex-col items-start justify-start gap-1 ">
                  <div className="self-stretch  text-[40px] font-bold  leading-[44px]">
                   Skill Development
                  </div>
                </div>
                <div className="self-stretch text-2xl font-normal  leading-[33.60px]">
                Sharpen your skills through practical guides, tutorials, 
and interactive learning materials. From leadership to communication, we 
provide resources to help you excel.

                </div>
              </div>
              <div className=" gap-4 p-4 ">
                <div className=" gap-4 py-4 pr-2 ">
                  <div className="">
                  <div className="text-xl font-medium leading-tight tracking-wide underline ">
                     <Link href={'/'} className="flex flex-row justify-between w-full"><p>Learn more</p> <Icons.right/></Link>
                    </div>
                  </div>
                  <div className="relative w-6 h-6" />
                </div>
              </div>
            </div>

            <div className="  border border-zinc-200 flex-col  gap-[5px] inline-flex ">
              
              <Image  alt={""} src={"/images/photo5.jpg"} height={400} width={400} sizes="100vw"
              // Make the image display full width
              style={{
                width: '100%',
                height: '400px',}}></Image>

              <div className="flex flex-col items-start self-stretch justify-start gap-4 px-4 pt-6 pb-4">
                <div className="flex flex-col items-start justify-start gap-1 ">
                  <div className="self-stretch  text-[40px] font-bold  leading-[44px]">
                    Academic excellence
                  </div>
                </div>
                <div className="self-stretch text-2xl font-normal  leading-[33.60px]">
                Access educational materials to support your 
academic journey. Find study guides, reference materials, and learning aids 
to aid your pursuit of knowledge
                  
                </div>
              </div>

              <div className=" gap-4 p-4 ">
                <div className=" gap-4 py-4 pr-2 ">
                  <div className=" ">
                    <div className="text-xl font-medium leading-tight tracking-wide underline ">
                     <Link href={'/'} className="flex flex-row justify-between w-full"><p>Learn more</p> <Icons.right/></Link>
                    </div>
                  </div>
                  <div className="relative w-6 h-6" />
                </div>
              </div>
            </div>

            <div className="  border border-zinc-200 flex-col  gap-[5px] inline-flex ">
             

              <Image  alt={""} src={"/images/photo6.jpg"} height={400} width={400} sizes="100vw"
              // Make the image display full width
              style={{
                width: '100%',
                height: '400px',}}></Image>
              
              <div className="flex flex-col items-start self-stretch justify-start gap-4 px-4 pt-6 pb-4">
                <div className="flex flex-col items-start justify-start gap-1 ">
                  <div className="self-stretch  text-[40px] font-bold  leading-[44px]">
                    Life Skills
                  </div>
                </div>
                <div className="self-stretch text-2xl font-normal  leading-[33.60px]">
                Navigate the challenges of life with confidence. Our life skills 
resources cover essential aspects such as time management, resilience, and 
effective communication
                </div>
              </div>
              <div className=" gap-4 p-4 ">
                <div className=" h-12 py-4 pr-2 grow shrink basis-0">
                  <div className="">
                  <div className="text-xl font-medium leading-tight tracking-wide underline ">
                     <Link href={'/'} className="flex flex-row justify-between w-full"><p>Learn more</p> <Icons.right/></Link>
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

export default EducationResources;
