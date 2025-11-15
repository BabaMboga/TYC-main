"use client";

import { FC } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import Link from "next/link";
import {useState} from "react";

const SubscribeForm = ({}) => {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [timestamp, setTimeStamp] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] =useState("");

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("GOOGLE_APPS_SCRIPT_WEB_APP_URL", {
        method: "POST",
        body: JSON.stringify({
          timestamp,
          firstName,
          lastName,
          email
        }),
        headers: {
          "Content-Type": "application/json"
        }
      });

      const result = await res.json();

      if (result.status === "success") {
        setMessage("Thank you for subscribing! 🎉 Check your email.");
        setFirstName("");
        setLastName("");
        setEmail("");
      } else {
        setMessage("Something went wrong. Please try again");
      }
    } catch (error) {
      setMessage("Network error - please try again.")
    }

    setLoading(false);
  };

  return (
    <>
      <div className="  px-5 bg-[#3FE2D3] flex-col justify-center items-center gap-3 inline-flex">
        <div className="items-start self-stretch justify-center gap-8 px-4 py-12 md:inline-flex grow shrink basis-0 backdrop-blur-sm">
          
          <div className="inline-flex flex-col items-start justify-start gap-6 grow shrink basis-0">
            <div className="flex flex-col items-start self-stretch justify-center gap-2 md:h-60">
              
              <div className="flex flex-col items-start justify-start ">
                <div className="text-3xl font-semibold md:text-4xl">
                  We&apos;re eager to keep you in the loop.
                </div>
              </div>
             
              <div className="text-2xl font-normal md:h-28 text-teal-950">
                If you’d like to stay updated with our latest news and info, subscribe today
              </div>
            </div>
          </div>
          
          <form 
    
            className="inline-flex flex-col items-center justify-start gap-4 mt-4 grow shrink basis-0 "
            onSubmit={handleSubmit}
          >
            <div className="">
            <div className="inline-flex items-center self-stretch justify-start h-12 gap-2 px-4 py-3 ">
              
              <Input 
                placeholder="First name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>
            <div className="inline-flex items-center self-stretch justify-start h-12 gap-2 px-4 py-3 ">
              
              <Input 
                placeholder="Last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
            <div className="md:inline-flex items-center self-stretch justify-start gap-1 md:gap-4">
              <div className="flex items-center justify-start h-12 gap-2 px-4 py-3 grow shrink basis-0 ">
                
                <Input 
                  placeholder="Email" 
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className=" px-3 py-4 ">
                <div className="w-full">
                  <Button type="submit" disabled={loading}>
                    {loading ? "Sending..." : "Subscribe"}
                  </Button>
                </div>
              </div>
            </div>
            {/* Message */}
            {
              message && (
                <div className="text-center text-lg text-teal-900 font-medium">
                  {message}
                </div>
              )
            }
            <div className="h-20 text-center ">
              <span className="text-xl font-normal  ">
                To understand how we will store and use your details please see
                our{" "}
              </span>
              <a href="/docs/TYC-Privacy-Policy.pdf" download="TYC-Privacy-Policy.pdf">
                <span className="text-xl font-normal  underline ">
                  privacy policy
                </span>
              </a>
              
            </div>
            </div>
          </form>
          
        </div>
      </div>
    </>
  );
};

export default SubscribeForm;
