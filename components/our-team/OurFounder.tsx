import {FC} from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/Icons";
import Link from "next/link";

const OurFounder = () => {
    return (
        <section className="p-2 md:px-10 md:py-8 bg-red-700 md:min-h-[600px]">
            <div className="relative flex flex-col-reverse items-center md:py-16">
                <div className="md:mr-[50%] md:w-1/2 md:z-10 border-b-4 border-b-black bg-white md:px-4 relative md:top-6 flex items-center flex-col">
                    <h2 className="py-3 px-2 text-2xl text-center font-semibold">
                        CAROLINE W. MUGWE
                    </h2>
                    <h2 className="py-3 px-2 text-2xl text-center font-semibold">
                        <Button className="flex justify-between py-4 px-8 transition-transform duration-1000 transform -skew-x-12 gap-1 shadow-[10px_8px_0px_rgba(185, 28, 28, 1)] hover:shadow-[15px_8px_0px_rgba(185, 28, 28,1)]">
                            <span>FOUNDER/DIRECTOR</span>
                        </Button>
                        
                    </h2>
                    <p className="px-3 py-3 text-base font-normal text-center">
                        Caroline is a highly motivated Kenyan, a human resource professional, a Certified Secretary and a 
                        Chartered Mediator with a first degree in Commerce( University of Nairobi, 1987 ) and a Master&apos;s 
                        degree in Business Administration. She has over thirty years of experience in human capital & administration
                        and is a team builder who is also very strong on governance issues. She has served on many Parastatal 
                        Boards within the Government of Kenya and she is also highly involved in Community interventions especially
                        touching on youth and vulnerable members of the society. Carole has undergone capacity building through training 
                        locally and abroad, thus acquiring skills and competencies that catapulted her into top leadership. She is passionate 
                        about using her skills to help people to become better and as she says, she is happily value-driven. She is a mother 
                        of two children. 
                    </p>
                </div>
                <div></div>
            </div>
        </section>
    )
}