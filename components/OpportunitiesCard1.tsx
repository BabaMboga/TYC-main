import OpportunityCard from "./Card";


const OpportunitiesCard1 = () => (
  <div className="relative flex flex-col justify-start items-center gap-2.5">
    <div className="flex flex-col items-center justify-start gap-5 p-2 text-white md:gap-16 md:p-20 grow shrink basis-0">
      <h1 className="text-center text-xl md:text-[36px] font-bold">
        Explore and embrace opportunities for you
      </h1>
      <div className="grid gap-4 md:grid-cols-3">
        <OpportunityCard
          title="Get Inspired"
          description="Develop life skills by joining our conferences, workshops, seminars and mentorship programs"
          link="/how-we-help"
          image="/images/cardpicture1.png"
        />
        <OpportunityCard
          title="Get Empowered"
          description="Work with us to discover internship opportunities, student exchange programs and other campaigns in your chosen field."
          link="/how-we-help"
          image="https://res.cloudinary.com/djfitsjh9/image/upload/v1706123848/tyc-images/image131_j6xplp.jpg"
        />
        <OpportunityCard
          title="Get Involved"
          description="Join us in engaging initiatives to protect and preserve the environment as well as develop our communities"
          link="/how-we-help"
          image="/images/cardpicture3.png"
        />
      </div>
    </div>
  </div>
);

export default OpportunitiesCard1;
