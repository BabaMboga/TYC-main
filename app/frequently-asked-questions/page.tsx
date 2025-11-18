import HeroText from "@/components/frequently-asked-questions/HeroText";
import FAQ from "@/components/frequently-asked-questions/FAQ";
import OurSurvey from "@/components/frequently-asked-questions/OurTeam";

const Home = ({}) => {
    return (
        <>
            <HeroText />

            <FAQ />

            <section className='p-2 md:px-10 md:py-8 bg-[#0E3930] md:min-h-[600px]'>
                <div className=''>
                    <OurSurvey/>
                </div>
            </section>
        </>

    );
};

export default Home;