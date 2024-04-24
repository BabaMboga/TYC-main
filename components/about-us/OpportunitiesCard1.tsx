import Image from "next/image";
import { FC } from "react";
import { Icons } from "@/components/Icons";
import Link from "next/link";
import people from "@/public/images/cardpicture1.png";
import OpportunityCard from "../Card";

const OpportunitiesCard1: FC = () => (
  <div className="relative flex flex-col justify-start items-center gap-2.5">
    <div className="flex flex-col items-center justify-start gap-5 p-2 text-white md:gap-16 md:p-20 grow shrink basis-0">
      <div className="grid gap-4 md:grid-cols-2">
        <OpportunityCard
          title="Our Initiates"
          description="Discover the diverse array of initiatives driving our mission. From empowering youth development to fostering mental wellness and contributing to community outreach, explore the heart of our efforts."
          link="/about-us"
          image="/images/new/photo1.jpg"
        />
        <OpportunityCard
          title="Our History"
          description="Dive into our rich history. Learn about the inception, growth, and milestones that define our path, shaping the present and paving the way for our future endeavors."
          link="/about-us"
          image="https://res.cloudinary.com/djfitsjh9/image/upload/v1706123094/tyc-images/image003_j1xgth.jpg"
        />
        <OpportunityCard
          title="Our Stories"
          description="Explore the compelling narratives and impactful stories that embody the essence of TYC Africa Trust. From transformational success stories to the narratives of change, our stories exemplify the spirit of our mission."
          link="/about-us"
          image="/images/new/photo3.jpg"
        />
        <OpportunityCard
          title="Our People"
          description="Meet the inspiring minds that shape the heart of TYC Africa Trust. Learn about the dedicated individuals behind our vision and their contributions to empowering youth and transforming communities."
          link="/about-us"
          image="/images/new/photo4.jpg"
        />
        <OpportunityCard
          title="Events Calendar"
          description="Stay updated on our upcoming events, conferences, and gatherings. Dive into a calendar brimming with opportunities to connect, learn, and collaborate."
          link="/our-events"
          image="https://res.cloudinary.com/djfitsjh9/image/upload/v1706123084/tyc-images/image039_youutg.jpg"
        />
      </div>
    </div>
  </div>
);

export default OpportunitiesCard1;
