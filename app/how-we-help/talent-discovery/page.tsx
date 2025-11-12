import AnnualConferenceCard from '@/components/AnnualConferenceCard'
import GetInTouchCard from '@/components/GetInTouchCard'
import SubscribeForm from '@/components/SubscribeForm'
import HeroText from '@/components/how-we-help/talent-discovery/HeroText'
import OpportunitiesCard1 from '@/components/how-we-help/resilience-building/OpportunitiesCard1'
import {FC} from 'react'

interface pageProps{

}

const page: FC<pageProps> = ({}) => {
   return (
   <>
   <HeroText/>

   <section className='bg-[#0E3930] max-w-max'>
      <div className=''>
        <OpportunitiesCard1/>
      </div>
    </section>

    <section className='p-2 md:px-10 md:py-8 bg-red-700 md:min-h-[600px]'>
          <div className=''>
            <AnnualConferenceCard/>
          </div>
        </section>

        <GetInTouchCard/>

        <SubscribeForm/>
   </>
    )
}

export default page