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
                        FOUNDER/DIRECTOR
                    </h2>
                </div>
            </div>
        </section>
    )
}