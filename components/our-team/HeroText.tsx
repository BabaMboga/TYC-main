const HeroText = () => {
    return (
        <div className="flex flex-col gap-4 px-3 md:px-14 py-10 bg-[#19251D] text-slate-50">
            <div className="items-center md:px-12">
                <p className="font-semibold text-center text-xl md:px-2">
                    Meet Our Dedicated Team.
                </p>
            </div>

            <div className="flex items-center md:px-12">
                <p className="text-xl font-normal text-center md:px-2">
                    Our team is comprised of passionate individuals who are committed to making a difference. 
                    With diverse backgrounds and expertise, we come together to provide unwavering support and 
                    guidance to our community. Whether it&apos;s mentoring, coaching, or simply lending a listening 
                    ear, we strive to empower each other and those we serve. Join us on this journey of 
                    collaboration and growth as we work towards a brighter future together. 
                </p>
            </div>
        </div>
    );
};

export default HeroText;