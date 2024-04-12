'use client'
import Image from "next/image";
import { FC } from "react";
import { Icons } from "@/components/Icons";
import Link from "next/link";
import Calendar  from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

const Home = ({}) => {

  //Array of Calendar events

  const EventDates = [
    {title: 'Conference Highlight', date: '2024-04-05'},
    {title: 'Workshop SChedule', date: '2024-04-15'},
    {title: 'Community Outreach Program', date: '2024-04-25'}
  ];

  return (
    <>
      <div className=" relative flex flex-col justify-start items-center gap-2.5 bg-[#19251D]">
        <div className="flex flex-col items-center justify-start gap-5 p-2 text-white md:gap-16 md:p-20 grow shrink basis-0">
          <div className="flex flex-col items-start justify-start gap-12 p-2 ">
            <div className="flex flex-col items-center justify-start gap-5 ">
              <div className=" text-center text-xl  md:text-[32px] font-semibold  ">
                Events Calendar
              </div>
              <div className=" text-center text-normal  md:text-[22px]   ">
                <p>
                  Stay informed and engaged with our events calendar. Discover
                  upcoming conferences, workshops, and community outreach
                  initiatives. Plan your participation and be part of events
                  that align with your interests and goals
                </p>
              </div>
              <div className="" id="calendar">
                <Calendar
                  plugins={[ dayGridPlugin]}
                  initialView="dayGridMonth"
                  events={EventDates} 
                />
              </div>
            </div>
          </div>

          <div className="text-xl text-center font-semibold md:text-[32px]">
            Our Upcoming Events
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="  border border-zinc-200 flex-col   gap-[5px] inline-flex">
              <Image
                src={"/images/photo5.jpg"}
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
                  <div className="self-stretch  text-[40px] font-bold  leading-[44px]">
                    Conference Highlights
                  </div>
                </div>
                <div className="self-stretch text-2xl font-normal  leading-[33.60px]">
                  Get a glimpse of the impactful conferences and workshops
                  hosted by TYC Africa Trust. Stay updated on upcoming events
                  and mark your calendar for enriching experiences.
                </div>
              </div>
              <div className=" gap-4 p-4 ">
                <div className=" gap-4 py-4 pr-2 ">
                  <div className="">
                    <div className="text-xl font-medium leading-tight tracking-wide underline ">
                      <Link
                        href={"/"}
                        className="flex flex-row justify-between w-full"
                      >
                        <p>Learn more</p> <Icons.right />
                      </Link>
                    </div>
                  </div>
                  <div className="relative w-6 h-6" />
                </div>
              </div>
            </div>

            <div className="  border border-zinc-200 flex-col  gap-[5px] inline-flex ">
              <Image
                alt={""}
                src={"/images/photo6.jpg"}
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
                  <div className="self-stretch  text-[40px] font-bold  leading-[44px]">
                    Workshop Schedules
                  </div>
                </div>
                <div className="self-stretch text-2xl font-normal  leading-[33.60px]">
                  Find details about upcoming skill development workshops and
                  resilience-building sessions. Join us in person or virtually
                  to enhance your capabilities.
                </div>
              </div>

              <div className=" gap-4 p-4 ">
                <div className=" gap-4 py-4 pr-2 ">
                  <div className=" ">
                    <div className="text-xl font-medium leading-tight tracking-wide underline ">
                      <Link
                        href={"/"}
                        className="flex flex-row justify-between w-full"
                      >
                        <p>Learn more</p> <Icons.right />
                      </Link>
                    </div>
                  </div>
                  <div className="relative w-6 h-6" />
                </div>
              </div>
            </div>

            <div className="  border border-zinc-200 flex-col  gap-[5px] inline-flex ">
              <Image
                alt={""}
                src={"/images/photo7.jpg"}
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
                  <div className="self-stretch  text-[40px] font-bold  leading-[44px]">
                    Community Outreach
                  </div>
                </div>
                <div className="self-stretch text-2xl font-normal  leading-[33.60px]">
                  Stay connected with our community outreach programs. Explore
                  opportunities to contribute to societal well-being and make a
                  positive impact
                </div>
              </div>
              <div className=" gap-4 p-4 ">
                <div className=" h-12 py-4 pr-2 grow shrink basis-0">
                  <div className="">
                    <div className="text-xl font-medium leading-tight tracking-wide underline ">
                      <Link
                        href={"/"}
                        className="flex flex-row justify-between w-full"
                      >
                        <p>Learn more</p> <Icons.right />
                      </Link>
                    </div>
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
                  <div className="self-stretch  text-[40px] font-bold  leading-[44px]">
                    Youth Exchange Program
                  </div>
                </div>
                <div className="self-stretch text-2xl font-normal  leading-[33.60px]">
                  Navigate through our resources and empower yourself with the
                  knowledge to shape a brighter future. Whether you&apos;re a
                  participant in our programs or a curious mind seeking valuable
                  insights, TYC Africa Trust is here to support your journey
                </div>
              </div>
              <div className=" gap-4 p-4 ">
                <div className=" h-12 py-4 pr-2 grow shrink basis-0">
                  <div className="">
                    <div className="text-xl font-medium leading-tight tracking-wide underline ">
                      <Link
                        href={"/"}
                        className="flex flex-row justify-between w-full"
                      >
                        <p>Learn more</p> <Icons.right />
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

export default Home;
