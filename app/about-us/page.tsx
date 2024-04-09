import AnnualConferenceCard from '@/components/AnnualConferenceCard'
import GetInTouchCard from '@/components/GetInTouchCard'
import Hero from '@/components/Hero'
import HeroText from '@/components/about-us/HeroText'
import LandingSection1 from '@/components/LandingSection1'
import OpportunitiesCard1 from '@/components/about-us/OpportunitiesCard1'
import MoretoExplore from '@/components/about-us/MoretoExplore'
import SubscribeForm from '@/components/SubscribeForm'
import Image from 'next/image'
import SupportOurWorkCard from '@/components/SupportOurWorkCard'
import OurTeam from '@/components/about-us/OurTeam'
import ImpactStoriesText from '@/components/about-us/ImpactStoriesText'
import FactsSheet from '@/components/about-us/FactsSheet'
import Slider from '@/components/Slider'


export default function Home() {
  return (
    <>
    
    <div className="w-full lg:flex">
        <HeroText/>
    </div>

    <section>
      <Slider />
    </section>


    <section className='bg-[#0E3930] max-w-max'>
      <div className=''>
        <OpportunitiesCard1/>
      </div>
    </section>


    

    <section className='p-2 md:px-10 md:py-8 bg-slate-500 md:min-h-[600px]'>
          <div className=''>
            <OurTeam/>
          </div>
    </section>

    <div className="w-full lg:flex">
        <ImpactStoriesText/>
    </div>
    

    <section className='block p-2 md:px-10 md:py-8 md:min-h-[575px]  bg-slate-300'>
      <div className='text-start'>
        <FactsSheet/>
      </div>
    </section>

    <section className=''>
      <div className=''>
        <MoretoExplore/>
      </div>
    </section>


    <section className=''>
      <div className=''>
        <GetInTouchCard/>
      </div>
    </section>

    <section className=''>
      <div className=''>
        <SubscribeForm/>
      </div>
    </section>



    </>
  )
}
