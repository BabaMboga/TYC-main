import AnnualConferenceCard from '@/components/AnnualConferenceCard'
import GetInTouchCard from '@/components/GetInTouchCard'
import Hero from '@/components/Hero'
import SubscribeForm from '@/components/SubscribeForm'
import HeroText from '@/components/support-us/HeroText'
import MoretoExplore from '@/components/support-us/MoretoExplore'
import OpportunitiesCard1 from '@/components/support-us/OpportunitiesCard1'
import {FC} from 'react'
import DonationCard from '@/components/DonationCard'
import MpesaCard from '@/components/MpesaCard'

interface pageProps{

}

const page: FC<pageProps> = ({}) => {
   return (
    <>
    
    <HeroText/>
    <div className='flex items-center h-fit m-7'>
         <p className='font-semibold text-2xl mx-6'>
            Help support young people by donating today
         </p>
         <DonationCard/>

    </div>

    <MpesaCard />    
    
    
    <GetInTouchCard/>

    

    <MoretoExplore/>

    <SubscribeForm/>

    </>
   )
}

export default page