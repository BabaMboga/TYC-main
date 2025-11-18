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
                Build Your Inner Strength
              </div>
              <p className="text-center text-base md:text-lg text-white/90">
                Resilience is the power to rise again - stronger, wiser and
                unshaken.
              </p>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid gap-4 md:grid-cols-2">
            {/* Pillar 1 - purpose */}

            <div className="  border border-zinc-200 flex-col  items-center gap-[5px] ">
              <Image
                src={
                  "https://res.cloudinary.com/djfitsjh9/image/upload/v1706123111/tyc-images/image025_oeet8x.jpg"
                }
                alt={"Talent discovery "}
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
                  <div className="self-stretch  text-[30px] font-semibold  leading-[34px]">
                    Purpose
                  </div>
                </div>
                <div className="self-stretch text-base font-normal  leading-[33.60px]">
                  A clear sense of purpose gives you direction. It anchors you
                  when life becomes overwhelming and reminds you why you keep
                  going.
                </div>
              </div>
              <div className=" gap-4 p-4 ">
                <div className=" gap-4 py-4 pr-2 ">
                  <div className=" ">
                    {/* <div className="text-base font-medium leading-tight tracking-wide underline flex justify-between w-full">
                      <Link
                        className="flex"
                        href={"/resources-at-tyc-africa-trust"}
                      >
                        Begin your journey <Icons.right />
                      </Link>
                    </div> */}
                  </div>
                  <div className="relative w-6 h-6" />
                </div>
              </div>
            </div>

            {/* Pillar 2 - positive attitude */}

            <div className="  border border-zinc-200 flex-col  items-center gap-[5px] ">
              <Image
                src={
                  "https://res.cloudinary.com/djfitsjh9/image/upload/v1706123207/tyc-images/image029_u0oy13.jpg"
                }
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
                  <div className="self-stretch  text-[30px] font-semibold  leading-[34px]">
                    Positive Attitude
                  </div>
                </div>
                <div className="self-stretch text-base font-normal  leading-[33.60px]">
                  A hopeful mind sees possibilities even in storms. At TYC, we
                  help you shape a mindset that bends but never breaks.
                </div>
              </div>
              <div className=" gap-4 p-4 ">
                <div className=" gap-4 py-4 pr-2 ">
                  <div className=" ">
                    {/* <div className="text-base font-medium leading-tight tracking-wide underline flex justify-between w-full">
                      <Link
                        className="flex"
                        href={"/resources-at-tyc-africa-trust"}
                      >
                        Grow your abilities <Icons.right />
                      </Link>
                    </div> */}
                  </div>
                  <div className="relative w-6 h-6" />
                </div>
              </div>
            </div>

            {/* Pillar 3 - perseverance */}

            <div className="  border border-zinc-200 flex-col  items-center gap-[5px] ">
              <Image
                src={
                  "https://res.cloudinary.com/djfitsjh9/image/upload/v1706123112/tyc-images/image035_znukn9.jpg"
                }
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
                  <div className="self-stretch  text-[30px] font-semibold  leading-[34px]">
                    Perseverance
                  </div>
                </div>
                <div className="self-stretch text-base font-normal  leading-[33.60px]">
                  Keep walking, even when the path feels rough. We teach young
                  people the power of rising again - every time.
                </div>
              </div>
              <div className=" gap-4 p-4 ">
                <div className=" gap-4 py-4 pr-2 ">
                  <div className=" ">
                    {/* <div className="text-base font-medium leading-tight tracking-wide underline flex justify-between w-full">
                      <Link
                        className="flex"
                        href={"/how-we-help/resilience-building"}
                      >
                        Step into the spotlight
                        <Icons.right />
                      </Link>
                    </div> */}
                  </div>
                  <div className="relative w-6 h-6" />
                </div>
              </div>
            </div>

            {/* Pillar 4 - Support Systems  */}

            <div className="  border border-zinc-200 flex-col  items-center gap-[5px] ">
              <Image
                src={
                  "https://res.cloudinary.com/djfitsjh9/image/upload/v1706123095/tyc-images/image007_v4aiua.jpg"
                }
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
                  <div className="self-stretch  text-[30px] font-semibold  leading-[44px]">
                    Support Systems
                  </div>
                </div>
                <div className="self-stretch text-base font-normal  leading-[33.60px]">
                  No one stands alone. TYC builds a family of mentors, peers and
                  community - your pillars in tough seasons.
                </div>
              </div>
              <div className=" gap-4 p-4 ">
                <div className=" gap-4 py-4 pr-2 ">
                  <div className=" ">
                    {/* <div className="text-base font-medium leading-tight tracking-wide underline flex justify-between w-full">
                      <Link
                        className="flex"
                        href={"https://forms.gle/2vatDWT7Pu16gJ646"}
                      >
                        Find your next opportunity <Icons.right />{" "}
                      </Link>
                    </div> */}
                  </div>
                  <div className="relative w-6 h-6" />
                </div>
              </div>
            </div>

            {/* Pillar 5 - faith & hope */}
            <div className="  border border-zinc-200 flex-col  items-center gap-[5px] ">
              <Image
                src={
                  "https://res.cloudinary.com/djfitsjh9/image/upload/v1758003401/17be2c68-9371-4f86-9a8c-06be2098c3f9_kqaod0.jpg"
                }
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
                  <div className="self-stretch  text-[30px] font-semibold  leading-[44px]">
                    Faith & Hope
                  </div>
                </div>
                <div className="self-stretch text-base font-normal  leading-[33.60px]">
                  Faith lifts you. Hope strengthens you. Like the palm tree -
                  you may bend, but you will rise taller.
                </div>
              </div>
              <div className=" gap-4 p-4 ">
                <div className=" gap-4 py-4 pr-2 ">
                  <div className=" ">
                    {/* <div className="text-base font-medium leading-tight tracking-wide underline flex justify-between w-full">
                      <Link
                        className="flex"
                        href={"https://forms.gle/2vatDWT7Pu16gJ646"}
                      >
                        Find your next opportunity <Icons.right />{" "}
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

export default OpportunitiesCard1;
