import { FC } from "react";
import { Icons } from "./Icons";
import { Button } from "./ui/button";
import Link from "next/link";

const GetInTouchCard = ({}) => {
  return (
    <div>
      <div className="w-full inline-flex items-center justify-center gap-20 md:p-20 bg-violet-100">
        
        <div className="inline-flex flex-col items-center justify-start gap-16 px-2 py-8">
          
          <div className="flex flex-col items-start justify-start gap-12 md:h-40">
            <div className="flex flex-col items-center justify-start gap-4 md:h-40">
              <div className="text-4xl font-bold leading-10 text-center md:text-4xl text-zinc-800">
                Get in touch
              </div>
              <div className="text-xl font-normal leading-10 text-center text-zinc-800">
                Want to know how we can be of service? Share your thoughts with
                us!
              </div>
            </div>
          </div>
          
          <div className="grid gap-12 md:justify-between md:inline-flex">
            
            <div className="relative border md:w-80 h-14">
              <div className=" md:absolute flex flex-col justify-center items-center gap-3.5 ">
                
                <div className="flex items-center pb-4">
                  <Button className="flex h-auto justify-between  px-8 transition-transform duration-1000 transform -skew-x-12 gap-1 shadow-[10px_8px_0px_rgba(63,226,211,1)] hover:shadow-[15px_8px_0px_rgba(63,226,211,1)]">
                  <Icons.phone className="skew-x-12 h-11 w-11 stroke-pink-600" />
                    <div className="flex flex-col skew-x-12">
                      <span className="text-2xl font-medium leading-normal tracking-wide ">
                        Call us
                      </span>
                      <span className="text-xl font-medium leading-tight tracking-wide ">
                        254-7000000
                      </span>
                    </div>
                    
                  </Button>
                </div>

              </div>
             
            </div>
            
            <div className="relative md:w-64 h-14">
              <div className="md:w-44 md:left-[87px]  md:absolute flex-col justify-start items-start gap-0.5 inline-flex">

              <div className="flex items-center pb-4">
                  <Button className="flex h-auto justify-between  px-8 transition-transform duration-1000 transform -skew-x-12 gap-1 shadow-[10px_8px_0px_rgba(63,226,211,1)] hover:shadow-[15px_8px_0px_rgba(63,226,211,1)]">
                  <Icons.whatsapp className="skew-x-12" />
                    <div className="flex flex-col skew-x-12 ">
                      <span className="text-2xl font-medium leading-normal tracking-wide ">
                        WhatsApp
                      </span>
                      <span className="text-xl font-medium leading-tight tracking-wide ">
                        Launch chat
                      </span>
                    </div>
                    
                  </Button>
                </div>

               
              </div>
            </div>
          </div>

          <div className="mt-4 text-center ">
            <span className="text-xl font-normal leading-10 text-zinc-800">
              We’re open on 254-700 000 000 from 9 am to 6 pm, Monday to Friday.
              <br />
              Outside these hours, you can{" "}
            </span>
            <Link href={'mailto:enquiries@tycafricatrust.org'}>
            <span className="text-xl font-normal leading-10 underline text-zinc-800">
              send us an email
            </span></Link>
            <span className="text-xl font-normal leading-10 text-zinc-800">
              {" "}
              and we’ll get back to you when we’re back online.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouchCard;
