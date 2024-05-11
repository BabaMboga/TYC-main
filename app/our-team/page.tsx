import HeroText from "@/components/our-team/HeroText";
import OurFounder from "@/components/our-team/OurFounder";
import ManagementCarousel from "@/components/our-team/ManagementCarousel";

const Home = ({}) => {
  return (
    <>
      <HeroText />

      <OurFounder />

      <section className='block p-2 md:px-10 md:py-8 bg-[#3FE2D3] min-h-[570px]'>
        <div className="text-start">
          <h2 className="py-3 px-2 text-4xl text-center font-bold text-white">
            FACILITATORS
          </h2>
          <ManagementCarousel />
        </div>
        
      </section>
    </>
  );
};

export default Home;
