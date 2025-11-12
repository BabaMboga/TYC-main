import Image from "next/image";
import { FC } from "react";
import { Icons } from "../../Icons";
import Link from "next/link";

const OpportunitiesCard1 = ({}) => {
  return (
    <>
      <div className=" relative flex flex-col justify-start items-center gap-2.5 ">
        <div className="flex flex-col items-center justify-start gap-5 p-2 text-white md:gap-16 md:p-20 grow shrink basis-0">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="  border border-zinc-200 flex-col  items-center gap-[5px] ">
              
              <Image
                src={"https://res.cloudinary.com/djfitsjh9/image/upload/v1758003401/356faad1-6587-4fea-8d66-1ac673caad72_fymln9.jpg"}
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
                    Grassroots Impact
                  </div>
                </div>
                <div className="self-stretch text-base font-normal  leading-[33.60px]">
                  We work hand-in0hand with local communities to identify their needs and co-create sustainable 
                  solutions that uplift families and empower youth.
                </div>
              </div>
              <div className=" gap-4 p-4 ">
                <div className=" gap-4 py-4 pr-2 ">
                  <div className=" ">
                    <div className="text-base font-medium leading-tight tracking-wide underline flex justify-between w-full">
                      <Link className="flex" href={"/how-we-help/youth-development-hub"}>
                        Learn about our impact <Icons.right />
                      </Link>
                    </div>
                  </div>
                  <div className="relative w-6 h-6" />
                </div>
              </div>
            </div>

            <div className="  border border-zinc-200 flex-col  items-center gap-[5px] ">
              <Image
                src={"https://res.cloudinary.com/djfitsjh9/image/upload/v1706123276/tyc-images/image099_tpgsv1.jpg"}
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
                    Volunteer with us
                  </div>
                </div>
                <div className="self-stretch text-base font-normal  leading-[33.60px]">
                  Join our growing network of passionate volunteers making a difference in their communities.
                  Together, we create real change, one act at a time.
                </div>
              </div>
              <div className=" gap-4 p-4 ">
                <div className=" gap-4 py-4 pr-2 ">
                  <div className=" ">
                    <div className="text-base font-medium leading-tight tracking-wide underline flex justify-between w-full">
                      <Link className="flex" href={"/how-we-help/talent-discovery"}>
                        Get involved <Icons.right />
                      </Link>
                    </div>
                  </div>
                  <div className="relative w-6 h-6" />
                </div>
              </div>
            </div>

            <div className="  border border-zinc-200 flex-col  items-center gap-[5px] ">
              <Image
                src={"https://res.cloudinary.com/djfitsjh9/image/upload/v1706123257/tyc-images/image081_fhfh0d.jpg"}
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
                    Partnerships for Progress
                  </div>
                </div>
                <div className="self-stretch text-base font-normal  leading-[33.60px]">
                  Collaboration drives change. We partner with organisations, schools and local governments to expand our reach and multiply impact.
                </div>
              </div>
              <div className=" gap-4 p-4 ">
                <div className=" gap-4 py-4 pr-2 ">
                  <div className=" ">
                    <div className="text-base font-medium leading-tight tracking-wide underline flex justify-between w-full">
                      <Link className="flex" href={"/how-we-help/resilience-building"}>
                        Partner with us <Icons.right />
                      </Link>
                    </div>
                  </div>
                  <div className="relative w-6 h-6" />
                </div>
              </div>
            </div>

            <div className="  border border-zinc-200 flex-col  items-center gap-[5px] ">
              <Image
                src={"https://res.cloudinary.com/djfitsjh9/image/upload/v1706123189/tyc-images/image015_byqqvk.jpg"}
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
                    Empowering Communities
                  </div>
                </div>
                <div className="self-stretch text-base font-normal  leading-[33.60px]">
                  From education to health and environment, our outreach initiatives equip communities with tools and knowledge
                  to build brighter futures.
                </div>
              </div>
              <div className=" gap-4 p-4 ">
                <div className=" gap-4 py-4 pr-2 ">
                  <div className=" ">
                    <div className="text-base font-medium leading-tight tracking-wide underline flex justify-between w-full">
                      <Link className="flex" href={"/how-we-help/community-outreach"}>
                        See our initiatives <Icons.right />
                      </Link>
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
