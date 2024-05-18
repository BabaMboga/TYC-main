import { FC } from "react";

const HeroText = () => {
    return (
        <div className="flex flex-col gap-4 px-3 ,d:px-14 py-10 bg-[#19251D] text-slate-50">
            <div className="items-center md:px-12">
                <p className="font-semibold text-center text-xl md:px-2">
                    Frequently Asked Questions
                </p>
            </div>

            <div>
                <p>
                    Have questions? We&apos;ve got answers! Here are some of the most commonly 
                    asked questions from our community. If you don&apos;t find what you&apos;re 
                    looking for, feel free to reach out to us.
                </p>
            </div>
        </div>
    )
}