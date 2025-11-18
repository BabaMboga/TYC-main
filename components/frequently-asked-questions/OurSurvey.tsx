import { FC } from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import { Icons } from "../Icons";
import Link from "next/link";

const OurSurvey = ({}) => {
  return (
    <>
      <div className="block ">
        <div className="relative flex flex-col-reverse items-center md:py-16">
          <div className="md:mr-[50%] md:w-1/2 md:z-10 border-b-4 border-b-black bg-white md:px-4 relative md:top-6 flex items-center flex-col">
            <div className="py-3 font-semibold">
              <h2 className="px-2 text-2xl text-center">
                Take our Youth Impact Survey
              </h2>
            </div>

            <div className="px-3 py-3 text-base font-normal">
              <div className="relative text-center whitespace-pre-wrap">
                <p>
                  Help us shape programs that truly serve the young people of
                  our communities. Your feedback plays a crucial role in
                  imrpoving mental health support, leadertship development and
                  community outreach intiatives. <br />
                </p>
              </div>
            </div>

            <div className="flex items-center pb-4">
              <Link
              target="_blank"
              rel="noopener noreferrer"
                href={
                  "https://docs.google.com/forms/d/e/1FAIpQLSdabpg5MpWC-QH0GIU6G21sOo6VqJbVyGN1Umilf-m0eUWLpg/viewform?usp=publish-editor"
                }
              >
                <Button className="flex justify-betweenpy-4 px-8 transition-transform duration-1000 transform -skew-x-12 gap-1 shadow-[10px_8px_0px_rgba(100,116,139,1)] hover:shadow-[15px_8px_0px_rgba(100,116,139,1)]">
                  <span>Start Survey</span>
                  <Icons.right />
                </Button>
              </Link>
            </div>
          </div>

          <div className="md:absolute inset-y-0  right-0 h-full md:w-[55%]">
            <div className="w-full h-full md:absolute ">
              <div className="overflow-hidden opacity-1 ">
                <Image
                  className="border"
                  src={
                    "https://res.cloudinary.com/djfitsjh9/image/upload/v1758003399/b6122430-aef1-477d-acc2-9d28acf4963a_enl4l7.jpg"
                  }
                  alt={"TYC members standing together"}
                  width={720}
                  height={994}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurSurvey;
