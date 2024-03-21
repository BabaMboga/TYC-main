import AnnualConferenceCard from '@/components/AnnualConferenceCard'
import GetInTouchCard from '@/components/GetInTouchCard'
import Hero from '@/components/Hero'
import SubscribeForm from '@/components/SubscribeForm'
import HeroText from '@/components/how-we-help/HeroText'
import MoretoExplore from '@/components/how-we-help/MoretoExplore'
import OpportunitiesCard1 from '@/components/how-we-help/OpportunitiesCard1'
import {FC} from 'react'

interface pageProps{

}

const page: FC<pageProps> = ({}) => {
   return (
    <>
    <Hero/>
    <HeroText/>

    <section className='bg-[#0E3930] max-w-max'>
      <div className=''>
        <OpportunitiesCard1/>
      </div>
    </section>
    
    <GetInTouchCard/>

    <section className='p-2 md:px-10 md:py-8 bg-red-700 md:min-h-[600px]'>
          <div className=''>
            <AnnualConferenceCard/>
          </div>
        </section>

    <MoretoExplore/>

    <SubscribeForm/>

    </>
   )
}

export default page