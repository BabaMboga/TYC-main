import AnnualConferenceCard from "@/components/AnnualConferenceCard";
import GetInTouchCard from "@/components/GetInTouchCard";
import Hero from "@/components/Hero";
import HeroText from "@/components/resources/HeroText";
import LandingSection1 from "@/components/LandingSection1";
import OpportunitiesCard1 from "@/components/OpportunitiesCard1";
import MoretoExplore from "@/components/MoretoExplore";
import SubscribeForm from "@/components/SubscribeForm";
import Image from "next/image";
import SupportOurWorkCard from "@/components/SupportOurWorkCard";
import EducationResources from "@/components/resources/EducationResources";
import Insights from "@/components/resources/Insights";
import Events from "@/components/resources/Events";

export default function Home() {
  return (
    <>
      <div className="w-full lg:flex">
        <HeroText />
      </div>

      <section className="bg-[#0E3930] max-w-max">
        <div className="">
          <EducationResources />
        </div>
      </section>

      <section className="bg-primary max-w-max">
        <div className="">
          <Insights />
        </div>
      </section>

      {/* <section className="bg-red-400 max-w-max">
        <div className="">
          <Events />
        </div>
      </section> */}

      <section className="">
        <div className="">
          <GetInTouchCard />
        </div>
      </section>

      <section className="">
        <div className="">
          <SubscribeForm />
        </div>
      </section>
    </>
  );
}
