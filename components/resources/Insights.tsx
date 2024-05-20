import Image from "next/image";
import { FC } from "react";
import { Icons } from "../Icons";
import Link from "next/link";

const Insights = ({}) => {
  return (
    <>
      <div className=" relative flex flex-col justify-start items-center gap-2.5 ">
        <div className="flex flex-col items-center justify-start gap-5 p-2 text-white md:gap-16 md:p-20 grow shrink basis-0">
          <div className="flex flex-col items-start justify-start gap-12 p-2 ">
            <div className="flex flex-col items-center justify-start gap-5 ">
              <div className=" text-center text-2xl  md:text-[42px] font-bold  ">
                Blogs and Insights
              </div>
              <div className=" text-center text-lg  md:text-[22px]   ">
                <p>
                  Dive into our regularly updated blog, where we share
                  insightful articles, stories, and advice. Our blog covers a
                  spectrum of topics related to youth development, mental
                  wellness, community impact, and more.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="  border border-zinc-200 flex-col   gap-[5px] inline-flex">
              <Image
                src={"/images/photo6.jpg"}
                alt={""}
                height={400}
                width={400}
                sizes="100vw"
                // Make the image display full width
                style={{
                  width: "100%",
                  height: "400px",
                }}
              ></Image>
              <div className="flex flex-col items-start self-stretch justify-start gap-4 px-4 pt-6 pb-4">
                <div className="flex flex-col items-start justify-start gap-1 ">
                  <div className="self-stretch  text-[30px] font-bold  leading-[44px]">
                    Success Stories
                  </div>
                </div>
                <div className="self-stretch text-lg font-normal  leading-[33.60px]">
                  Be inspired by success stories of individuals who have thrived
                  through TYC Africa Trust&apos;s programs. Learn from their
                  journeys and discover the possibilities that await you.
                </div>
              </div>
              <div className=" gap-4 p-4 ">
                <div className=" gap-4 py-4 pr-2 ">
                  <div className="">
                    {/* <div className="text-xl font-medium leading-tight tracking-wide underline ">
                      <Link
                        href={"/resources-at-tyc-africa-trust/success-stories"}
                        className="flex flex-row justify-between w-full"
                      >
                        <p>Learn more</p> <Icons.right />
                      </Link>
                    </div> */}
                  </div>
                  <div className="relative w-6 h-6" />
                </div>
              </div>
            </div>

            <div className="  border border-zinc-200 flex-col  gap-[5px] inline-flex ">
              <Image
                alt={""}
                src={"/images/cardpicture3.png"}
                height={400}
                width={400}
                sizes="100vw"
                // Make the image display full width
                style={{
                  width: "100%",
                  height: "400px",
                }}
              ></Image>

              <div className="flex flex-col items-start self-stretch justify-start gap-4 px-4 pt-6 pb-4">
                <div className="flex flex-col items-start justify-start gap-1 ">
                  <div className="self-stretch  text-[30px] font-bold  leading-[44px]">
                    Expert Advice
                  </div>
                </div>
                <div className="self-stretch text-lg font-normal  leading-[33.60px]">
                  Gain valuable insights from experts in various fields. Our
                  blog features expert advice on personal development, mental
                  health, and strategies for success.
                </div>
              </div>

              <div className=" gap-4 p-4 ">
                <div className=" gap-4 py-4 pr-2 ">
                  <div className=" ">
                    {/* <div className="text-xl font-medium leading-tight tracking-wide underline ">
                      <Link
                        href={"/resources-at-tyc-africa-trust/expert-opinions"}
                        className="flex flex-row justify-between w-full"
                      >
                        <p>Learn more</p> <Icons.right />
                      </Link>
                    </div> */}
                  </div>
                  <div className="relative w-6 h-6" />
                </div>
              </div>
            </div>

            <div className="  border border-zinc-200 flex-col  gap-[5px] inline-flex ">
              <Image
                alt={""}
                src={"/images/photo4.jpg"}
                height={400}
                width={400}
                sizes="100vw"
                // Make the image display full width
                style={{
                  width: "100%",
                  height: "400px",
                }}
              ></Image>

              <div className="flex flex-col items-start self-stretch justify-start gap-4 px-4 pt-6 pb-4">
                <div className="flex flex-col items-start justify-start gap-1 ">
                  <div className="self-stretch  text-[30px] font-bold  leading-[44px]">
                    Youth Perspectives
                  </div>
                </div>
                <div className="self-stretch text-lg font-normal  leading-[33.60px]">
                  Hear directly from youth about their experiences, challenges,
                  and triumphs. Connect with the voices that resonate with your
                  own aspirations and dreams.
                </div>
              </div>
              <div className=" gap-4 p-4 ">
                <div className=" h-12 py-4 pr-2 grow shrink basis-0">
                  <div className="">
                    {/* <div className="text-xl font-medium leading-tight tracking-wide underline ">
                      <Link
                        href={"/resources-at-tyc-africa-trust/youth-perspectives"}
                        className="flex flex-row justify-between w-full"
                      >
                        <p>Learn more</p> <Icons.right />
                      </Link>
                    </div> */}
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

export default Insights;
