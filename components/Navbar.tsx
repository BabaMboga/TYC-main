"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Icons } from "./Icons";
import Link from "next/link";
import { useState } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const Navbar = () => {
  const [activeTab, setActiveTab] = useState("null");

  return (
    <div>
      <Sheet>
        <SheetTrigger className="flex flex-col-reverse items-center text-sm sm:gap-1 md:gap-3 md:text-xl md:flex-row">
          Menu <Icons.menu className=""/>
        </SheetTrigger>

        <SheetContent className="border rounded-lg scroll-auto" side="top">
          <div className="hidden grid-flow-col gap-2 rounded md:grid grid-col-3">
            
            <div className="flex-col gap-2 p-3 border-r ">

            <div 
                onMouseEnter={() => setActiveTab("aboutn")}
                // onMouseLeave={() => setActiveTab("null")}
                className="hover:bg-[#F1F5F9] rounded-md p-2">
                  <Link href={'/about-us'}>
                <p className="font-[700]">About us</p>
                <p className="text-[#64748B] text-sm">
                  Welcome to the heart of TYC Africa Trust, where our story
                  unfolds, and our commitment to youth empowerment comes to
                  life.
                </p></Link>
              </div>


              <div
                onMouseEnter={() => setActiveTab("helpn")}
                // onMouseLeave={() => setActiveTab("null")}
                className="hover:bg-[#F1F5F9] rounded-md p-2"
              >
                <Link href={'/how-we-help'}>
                <p className="font-[700]">What we do</p>
                <p className="text-[#64748B] text-sm">
                  Our initiatives are designed to designed to foster personal
                  growth, leadership, and community engagement.
                </p></Link>
              </div>

              <div
                onMouseEnter={() => setActiveTab("supportn")}
                // onMouseLeave={() => setActiveTab("null")}
                id="support"
                className="hover:bg-[#F1F5F9] rounded-md p-2"
              >
                <Link href={'/support-us'}>
                <p className="font-[700]">How to get involved</p>
                <p className="text-[#64748B] text-sm">
                  Explore our programs, read inspiring stories, and consider
                  joining us in our mission to empower the next generation.
                </p></Link>
              </div>

              

              

              <div 
                onMouseEnter={() => setActiveTab("resourcesn")}
                // onMouseLeave={() => setActiveTab("null")}
                className="hover:bg-[#F1F5F9] rounded-md p-2 hidden">
                  <Link href={'/resources-at-tyc-africa-trust'}>
                <p className="font-[700]">Resources at TYC Africa Trust</p>
                <p className="text-[#64748B] text-sm">
                  Discover a wealth of educational materials, insightful blogs,
                  and valuable downloads to support your journey of personal
                  growth and development.
                </p></Link>
              </div>

              <div className="hover:bg-[#F1F5F9] rounded-md p-2">
              <Link href={'/contact-us'}>
                <p className="font-[700]">Contact us</p>
                <p className="text-[#64748B] text-sm">
                  Got questions about our programs, initiatives, or TYC Africa
                  Trust in general? We&apos;re here to provide answers and assistance
                </p>
                </Link>
              </div>
            </div>
            
            <div className="lg:w-80 hidden">

              <div id="help" style={{display: activeTab==='help'? 'block':'none'}}>
                <ul className="flex flex-col font-[700] underline gap-3">
                  <li>
                    <Link href="/how-we-help/youth-development-hub">Youth Development Hub</Link>
                  </li>
                  <li>
                    <Link href="/how-we-help/talent-discovery">Talent Discovery</Link>
                  </li>
                  <li>
                    <Link href="/how-we-help/resilience-building">Resilience Building</Link>
                  </li>
                  <li>
                    <Link href="/how-we-help/community-outreach">Community Outreach</Link>
                  </li>
                </ul>
              </div>

              <div id="support" style={{display: activeTab==='support'? 'block':'none'}}>
                <ul className="flex flex-col font-[700] underline gap-3">
                  <li>
                    <Link href="/support-us/donate">Donate</Link>
                  </li>
                  <li>
                    <Link href="/support-us/youth-ambassador">Become a Youth Ambassador</Link>
                  </li>
                  <li>
                    <Link href="/support-us/volunteer">Volunteer</Link>
                  </li>
                  <li>
                    <Link href="/support-us/events">Take part in an event</Link>
                  </li>
                  <li>
                    <Link href="/support-us/giving">Legacy giving</Link>
                  </li>
                  <li>
                    <Link href="/support-us/giving">Large gifts</Link>
                  </li>
                  <li>
                    <Link href="/support-us/contact">More options</Link>
                  </li>
                </ul>
              </div>

              <div id="partner" style={{display: activeTab==='partner'? 'block':'none'}}>
                <ul className="flex flex-col font-[700] underline gap-3">
                  <li>
                    <Link href="/">Non Governmental Institutions</Link>
                  </li>
                  <li>
                    <Link href="/">Government Institutions</Link>
                  </li>
                  <li>
                    <Link href="/">Education Institutes</Link>
                  </li>
                  <li>
                    <Link href="/">Businesses</Link>
                  </li>
                  <li>
                    <Link href="/">Get in touch</Link>
                  </li>
                </ul>
              </div>

              <div id="partner" style={{display: activeTab==='about'? 'block':'none'}}>
                <ul className="flex flex-col font-[700] underline gap-3">
                  <li>
                    <Link href="/about-us">About us</Link>
                  </li>
                  <li className="hidden">
                    <Link href="/about-us/initiatives">Our latest initiatives</Link>
                  </li>
                  <li>
                    <Link href="/about-us/history">Our history</Link>
                  </li>
                  <li>
                    <Link href="/about-us/our-people">Our people</Link>
                  </li>
                  <li>
                    <Link href="/about-us/impact-stories">Our impact stories</Link>
                  </li>
                  <li>
                    <Link href="/about-us/gallery">Gallery</Link>
                  </li>
                  <li>
                    <Link href="/about-us/core-values">Our core values</Link>
                  </li>
                  <li>
                    <Link href="/about-us/events">Our events</Link>
                  </li>
                </ul>
              </div>

              <div id="partner" style={{display: activeTab==='resources'? 'block':'none'}}>
                <ul className="flex flex-col font-[700] underline gap-3">
                  <li>
                    <Link href="/resources-at-tyc-africa-trust" target="_blank">Youth Exchange Program</Link>
                  </li>
                  <li>
                    <Link href="/resources-at-tyc-africa-trust">Internships</Link>
                  </li>
                  <li>
                    <Link href="/resources-at-tyc-africa-trust/success-stories">Success Stories</Link>
                  </li>
                  <li>
                    <Link href="/resources-at-tyc-africa-trust/expert-opinions">Expert Advice</Link>
                  </li>
                  <li>
                    <Link href="/resources-at-tyc-africa-trust/youth-perspectives">Youth Perspectives</Link>
                  </li>
                  <li>
                    <Link href="/resources-at-tyc-africa-trust/events-calendar">Events calendar</Link>
                  </li>
                  
                </ul>
              </div>
            </div>

            
            <div className="hidden">

              <div id="help" className="flex-col h-auto gap-3" style={{display: activeTab==='help'? 'grid':'none'}}>

                <div className="h-[12rem]  block rounded">
                    <div className="h-full p-2 rounded bg-gradient-to-b from-[#DB4E66] via-[#A24688] to-[#4E3ABA]"></div>
                    <p className="underline">Join us in our Annual Youth Conference</p>
                </div>

                <div className="h-[12rem] block rounded">
                    <div className="h-full p-2 rounded bg-gradient-to-b from-[#DB4E66] via-[#A24688] to-[#4E3ABA]"></div>
                    <p className="underline">Our community outreach program</p>
                </div>
              </div>

              <div id="support" className="flex-col h-auto gap-3" style={{display: activeTab==='support'? 'grid':'none'}}>
                <div className="h-[12rem] block rounded">
                    <div className="h-full p-2 rounded bg-gradient-to-b from-[#DB4E66] via-[#A24688] to-[#4E3ABA]"></div>
                    <p className="underline">Learn more about volunteering</p>
                </div>
                <div className="h-[12rem] block rounded">
                    <div className="h-full p-2 rounded bg-gradient-to-b from-[#DB4E66] via-[#A24688] to-[#4E3ABA]"></div>
                    <p className="underline">Making a positive impact on communities</p>
                </div>
              </div>

              <div id="help" className="flex-col h-auto gap-3" style={{display: activeTab==='partner'? 'grid':'none'}}>

                <div className="h-[12rem]  block rounded">
                    <div className="h-full p-2 rounded bg-gradient-to-b from-[#DB4E66] via-[#A24688] to-[#4E3ABA]"></div>
                    <p className="underline">Education Development Programs with TYC</p>
                </div>

                <div className="h-[12rem] block rounded">
                    <div className="h-full p-2 rounded bg-gradient-to-b from-[#DB4E66] via-[#A24688] to-[#4E3ABA]"></div>
                    <p className="underline">Make a positive impact on communities</p>
                </div>
              </div>

              <div id="help" className="flex-col h-auto gap-3" style={{display: activeTab==='about'? 'grid':'none'}}>

                <div className="h-[12rem]  block rounded">
                    <div className="h-full p-2 rounded bg-gradient-to-b from-[#DB4E66] via-[#A24688] to-[#4E3ABA]"></div>
                    <p className="underline">Join us in our Annual Youth Conference</p>
                </div>

                <div className="h-[12rem] block rounded">
                    <div className="h-full p-2 rounded bg-gradient-to-b from-[#DB4E66] via-[#A24688] to-[#4E3ABA]"></div>
                    <p className="underline">Make a positive impact on communities</p>
                </div>
              </div>

              <div id="help" className="flex-col h-auto gap-3" style={{display: activeTab==='resources'? 'grid':'none'}}>

                <div className="h-[12rem]  block rounded">
                    <div className="h-full p-2 rounded bg-gradient-to-b from-[#DB4E66] via-[#A24688] to-[#4E3ABA]"></div>
                    <p className="underline">Join us in our Annual Youth Conference</p>
                </div>

                <div className="h-[12rem] block rounded">
                    <div className="h-full p-2 rounded bg-gradient-to-b from-[#DB4E66] via-[#A24688] to-[#4E3ABA]"></div>
                    <p className="underline">Make a positive impact on communities</p>
                </div>
              </div>
            </div>
            
          </div>

          
          <div className="md:hidden">
          <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-4">
        <AccordionTrigger>About us</AccordionTrigger>
        <AccordionContent className="px-3 rounded-md bg-blue-50">
        <ul className="flex flex-col font-[700] underline gap-3">
                  <li>
                    <Link href="/about-us">About us</Link>
                  </li>
                  <li>
                    <Link href="/">Our latest initiatives</Link>
                  </li>
                  <li>
                    <Link href="/">Our history</Link>
                  </li>
                  <li>
                    <Link href="/">Our people</Link>
                  </li>
                  <li>
                    <Link href="/">Our impact stories</Link>
                  </li>
                  <li>
                    <Link href="/">Media centre</Link>
                  </li>
                  <li>
                    <Link href="/">Our core values</Link>
                  </li>
                  <li>
                    <Link href="/">Our events</Link>
                  </li>
                </ul>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-1">
        <AccordionTrigger>What we do</AccordionTrigger>
        <AccordionContent className="px-3 rounded-md bg-blue-50">
                <ul className="flex flex-col font-[700] underline gap-3">
                  <li>
                    <Link href="/how-we-help">Youth Development Hub</Link>
                  </li>
                  <li className="hidden">
                    <Link href="/">Talent Discovery</Link>
                  </li>
                  <li className="hidden">
                    <Link href="/">Resilience Building</Link>
                  </li>
                  <li className="hidden">
                    <Link href="/">Community Outreach</Link>
                  </li>
                </ul>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>How to get involved</AccordionTrigger>
        <AccordionContent className="px-3 rounded-md bg-blue-50">
        <ul className="flex flex-col font-[700] underline gap-3">
                  <li>
                    <Link href="/support-us">How to get involved</Link>
                  </li>
                  <li className="hidden">
                    <Link href="/">Become a Youth Ambassador</Link>
                  </li>
                  <li className="hidden">
                    <Link href="/">Volunteer</Link>
                  </li>
                  <li className="hidden">
                    <Link href="/">Take part in an event</Link>
                  </li>
                  <li className="hidden">
                    <Link href="/">Legacy giving</Link>
                  </li>
                  <li className="hidden">
                    <Link href="/">Large gifts</Link>
                  </li>
                  <li className="hidden">
                    <Link href="/">More options</Link>
                  </li>
                </ul>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3" className="hidden">
        <AccordionTrigger>Partner with us</AccordionTrigger>
        <AccordionContent className="px-3 rounded-md bg-blue-50">
        <ul className="flex flex-col font-[700] underline gap-3">
                  <li>
                    <Link href="/">Non Governmental Institutions</Link>
                  </li>
                  <li>
                    <Link href="/">Government Institutions</Link>
                  </li>
                  <li>
                    <Link href="/">Education Institutes</Link>
                  </li>
                  <li>
                    <Link href="/">Businesses</Link>
                  </li>
                  <li>
                    <Link href="/">Get in touch</Link>
                  </li>
                </ul>
        </AccordionContent>
      </AccordionItem>
      
      <AccordionItem value="item-5" className="hidden">
        <AccordionTrigger>Resources at TYC</AccordionTrigger>
        <AccordionContent className="px-3 rounded-md bg-blue-50">
        <ul className="flex flex-col font-[700] underline gap-3">
                  <li>
                    <Link href="/">Education Materials</Link>
                  </li>
                  <li>
                    <Link href="/">Expert Advice</Link>
                  </li>
                  <li>
                    <Link href="/">Youth Perspectives</Link>
                  </li>
                  <li>
                    <Link href="/">Events calendar</Link>
                  </li>
                  
                </ul>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-6">
        <AccordionTrigger>Contact us</AccordionTrigger>
        <AccordionContent className="px-3 rounded-md bg-blue-50">
        <ul className="flex flex-col font-[700] underline gap-3">
                  <li>
                    <Link href="/">Get in touch</Link>
                  </li>
                  <li>
                    <Link href="/">Meet our team</Link>
                  </li>
                  <li>
                    <Link href="/">Subscribe to our newsletter</Link>
                  </li>
                  
                  
                </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>

    
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Navbar;
