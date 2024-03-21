import Link from "next/link";
import Image from "next/image";
import { Icons } from "./Icons";
import { Separator } from "./ui/separator";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

const Footer = ({}) => {
  return (
    <>
      <div className="inline-flex flex-col items-start justify-between w-full gap-12 px-7 md:px-20 py-12 bg-neutral-950">

        <div className="inline-flex items-center self-stretch justify-start gap-12">
          
            <div className="inline-flex justify-between w-full gap-1 ">
              
              <div className="inline-flex items-end justify-center ">
              <Link href={"/"}>
                  <Image
                  src={"/images/Layer 11.png"}
                  alt={"TYC Africa Logo"}
                  width={80}
                  height={80}
                />
              </Link>
                
                <Separator orientation="vertical" className="hidden mx-4 md:block"/>
              </div>
              
              <div className="p-2 text-xl text-white">
                <p className="grid justify-end underline p-1 ">Join Us</p>
                <div className="flex gap-2">
                <Link href={'/'}><Icons.youtube className="md:h-9 md:w-9"/></Link>
                <Link href={'/'}><Icons.twitter className="md:h-9 md:w-9"/></Link>
                <Link href={'/'}><Icons.facebook className="md:h-9 md:w-9"/></Link>
                <Link href={'/'}><Icons.Instagram className="md:h-9 md:w-9"/></Link>
                <Link href={'/'}><Icons.linkedin className="md:h-9 md:w-9"/></Link>

                </div>
              </div>
            </div>
          
          
        </div>

        <div className="self-stretch h-px bg-neutral-300" />

        <div className="inline-flex items-start self-stretch justify-start gap-12">
          <div className="flex-col items-start justify-start hidden gap-4 md:inline-flex grow shrink basis-0">
            <div className="inline-flex items-center justify-start gap-2 py-3">
              <div className="text-lg font-bold leading-tight text-white">
                Navigate
              </div>
            </div>
            <div className="inline-flex items-center justify-start gap-2">
              <div className="text-base font-medium leading-none text-white">
              <Link href={'/how-we-help'}>How we help</Link>
              </div>
            </div>
            <div className="inline-flex items-center justify-start gap-2">
              <div className="text-base font-medium leading-none text-white">
              <Link href={'/support-us'}>Support us</Link>
              </div>
            </div>
            <div className="inline-flex items-center justify-start gap-2">
              <div className="text-base font-medium leading-none text-white">
              <Link href={'/partner'}>Partner with us</Link>
              </div>
            </div>
            <div className="inline-flex items-center justify-start gap-2">
              <div className="text-base font-medium leading-none text-white">
              <Link href={'/about-us'}>About us</Link>
              </div>
            </div>
          </div>

          <div className="flex-col items-start justify-start hidden gap-4 md:inline-flex grow shrink basis-0">
            <div className="inline-flex items-center justify-start gap-2 py-3">
              <div className="text-lg font-bold leading-tight text-white">
                Quick Links
              </div>
            </div>
            <div className="inline-flex items-center justify-start gap-2">
              <div className="text-base font-medium leading-none text-white">
              <Link href={'/support-us/donate'}>Donate</Link>
              </div>
            </div>
            <div className="inline-flex items-center justify-start gap-2">
              <div className="text-base font-medium leading-none text-white">
              <Link href={'/frequently-asked-questions'}>Frequently Asked Questions</Link>
              </div>
            </div>
            <div className="inline-flex items-center justify-start gap-2">
              <div className="text-base font-medium leading-none text-white">
              <Link href={'/'}>Careers</Link>
              </div>
            </div>
            
          </div>

          <div className="flex-col items-start justify-start hidden gap-4 md:inline-flex grow shrink basis-0">
            <div className="inline-flex items-center justify-start gap-2 py-3">
              <div className="text-lg font-bold leading-tight text-white">
                Information Centre
              </div>
            </div>
            <div className="inline-flex items-center justify-start gap-2">
              <div className="text-base font-medium leading-none text-white">
              <Link href={'/support-us/youth-ambassador'}>Become a Youth Ambassador</Link>
              </div>
            </div>
            <div className="inline-flex items-center justify-start gap-2">
              <div className="text-base font-medium leading-none text-white">
              <Link href={'/gallery'}>Gallery</Link>
              </div>
            </div>
            <div className="inline-flex items-center justify-start gap-2">
              <div className="text-base font-medium leading-none text-white">
              <Link href={'/contact-us'}>Get in touch</Link>
              </div>
            </div>
            
          </div>


          <div className="flex w-full md:hidden">

          <Accordion type="single" collapsible className="w-full text-white">
          <AccordionItem value="item-1">
        <AccordionTrigger>Navigate</AccordionTrigger>
        <AccordionContent className="px-3 mb-2 text-white bg-gray-500 rounded-md">
        <ul className="flex flex-col font-[700] underline gap-3">
                  <li>
                    <Link href="/how-we-help">How we help</Link>
                  </li>
                  <li>
                    <Link href="/support-us">Support us</Link>
                  </li>
                  <li>
                    <Link href="/partner">Partner with us</Link>
                  </li>
                  <li>
                    <Link href="/about-us">About us</Link>
                  </li>
                  
                  
                </ul>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Quick Links</AccordionTrigger>
        <AccordionContent className="px-3 mb-2 text-white bg-gray-500 rounded-md">
        <ul className="flex flex-col font-[700] underline gap-3">
                  <li>
                    <Link href="/support-us/donate">Donate</Link>
                  </li>
                  <li>
                    <Link href="/freaquently-asked-questions">Frequently Asked Questions</Link>
                  </li>
                  <li>
                    <Link href="/careers">Careers</Link>
                  </li>
                  
                  
                </ul>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Information Centre</AccordionTrigger>
        <AccordionContent className="px-3 mb-2 text-white bg-gray-500 rounded-md">
        <ul className="flex flex-col font-[700] underline gap-3">
                  <li>
                    <Link href="/support-us/youth-ambassador">Become a Youth Ambassador</Link>
                  </li>
                  <li>
                    <Link href="/gallery">Gallery</Link>
                  </li>
                  <li>
                    <Link href="/contact-us">Get in touch</Link>
                  </li>
                  
                  
                </ul>
        </AccordionContent>
      </AccordionItem>
          </Accordion>
          </div>
        </div>
        <div className="self-stretch h-px bg-neutral-300" />
        <div className="inline-flex items-start self-stretch justify-start gap-12">
          <div className="text-sm font-normal leading-tight text-white">
            TYC Africa Trust @ 2023. All rights reserved.
          </div>
          <div className="flex items-center justify-end h-10 gap-4 grow shrink basis-0">
            <div className="flex items-center justify-start gap-2 px-2 py-3">
              <div className="text-base font-medium leading-none text-white">
                <Link
                  className="underline" 
                  href={"/privacy-policy"}>
                Privacy Policy
                </Link>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
