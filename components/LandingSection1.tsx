import {FC} from 'react'
import Image from 'next/image'
import { Icons } from './Icons'
import { Button } from './ui/button'
import Link from 'next/link'

const LandingSection1 = ({}) => {
   return <>
    <div className='block '>
    <div className='relative items-center '>

        <div className='md:absolute md:h-full md:w-[55%]'>
            <div className='top-0 left-0 w-full h-full md:absolute '>
                <div className='overflow-hidden opacity-1 '>
                    <Image className='border' src={'/images/use/image063.jpg'} alt={'TYC members standing together'} width={720} height={994}></Image>
                </div>
            </div>
        </div>

        <div className='md:ml-[50%] md:w-1/2 md:z-10 border-b-4 border-b-black bg-white md:px-4 relative md:top-5 flex items-center flex-col'>
            <div className='py-3 font-semibold'>
                <h2 className='px-2 text-2xl text-center'>Unlocking Opportunities for Youth Success</h2>
            </div>

            <div className='grid gap-3 px-3 py-3 text-xl font-normal'>
                <div className='relative text-center whitespace-pre-wrap'>
                    <p>
                    Embarking on life&apos;s journey can be a challenge, but TYC Africa Trust is here to guide you through it. Regardless of the obstacles you face, know that we offer you steadfast support.
                    </p>
                </div>
                <div className='relative text-center whitespace-pre-wrap'>
                    <p>
                    Taking that first step is essential, and TYC Africa Trust is your trusted partner in that endeavor. 
                    </p>
                </div>
                <div className='relative text-center whitespace-pre-wrap'>
                    <p>
                    We&apos;re here to provide the guidance you need, even in the most trying times. Countless young individuals have started their journeys with TYC Africa Trust. Could you be next?
                    </p>
                </div>
            </div>
            
            <div className='flex items-center pb-4'>
            
            <Link href={'/how-we-help'}>
            <Button className='flex justify-betweenpy-4 px-8 transition-transform duration-1000 transform -skew-x-12 gap-1 shadow-[10px_8px_0px_rgba(63,226,211,1)] hover:shadow-[15px_8px_0px_rgba(63,226,211,1)]'>
                <span>Kick things off</span>
                <Icons.right/>
            </Button>
            </Link>
            
           </div>
           
        </div>
    </div>
    </div>
   </>
}

export default LandingSection1