import {FC} from 'react'
import Image from 'next/image'
import { Button } from '../ui/button'
import { Icons } from '../Icons'

const FactsSheet = ({}) => {
   return <>
    <div className='block min-h-[600px]  bg-slate-300'>
    <div className='relative items-center md:py-16 md:flex bg-slate-300'>

        <div className='md:absolute h-full md:w-[55%]'>
            <div className='top-0 left-0 w-full h-full md:absolute '>
                <div className='overflow-hidden opacity-1 '>
                    <img className='border' src={'https://res.cloudinary.com/djfitsjh9/image/upload/v1706123146/tyc-images/image146_lwfm75.jpg'} alt={'TYC members being adviced'} width={720} height={994} />
                </div>
            </div>
        </div>

        <div className='md:ml-[50%] md:w-1/2 md:z-10 border-b-4 border-b-blue-700 bg-slate-300 px-4 relative md:top-2  flex flex-col items-center py-3 border'>
            <div className='py-3 font-semibold'>
            <div className="py-3 font-semibold">
              <h2 className="px-2 text-2xl text-center">
                What We Have Done
              </h2>
            </div>
            
            </div>
            
            <div className='grid gap-2 px-3 py-3 text-base font-normal'>
                
                <div className='relative text-center '>
                    <p>
                        At TYC, our recent endeavors have revolved around a dynamic blend of teaching, molding, nurturing and giving back to the community.
                        Our team has meticulously curated programs that not only educate but also inspire young minds to pursue their passions and make 
                        and make positive contributions to society. We instill a sense of social responsibility & empathy by actively engaging in community 
                        outreach initiatives, organizing events and volunteering efforts such as:
                    </p>
                </div>
                
            </div>
           
           <div className='flex items-center gap-3 pb-2 justify-beween'>
            <a href="/docs/TYC-AFRICA-2023.pdf" download="TYC-AFRICA-2023.pdf">
                <Button className='flex justify-betweenpy-4 px-8 transition-transform duration-1000 transform -skew-x-12 gap-1 shadow-[10px_8px_0px_rgba(29,78,216,1)] hover:shadow-[15px_8px_0px_rgba(29,78,216,1)]'>
                    <span>TYC 2023</span>
                    <Icons.right/>
                </Button>
            </a>
            
            <a href='/docs/ilovepdf_merged.pdf' download='ilovepdf_merged.pdf'>
                <Button className='flex justify-betweenpy-4 px-8 transition-transform duration-1000 transform -skew-x-12 gap-1 shadow-[10px_8px_0px_rgba(29,78,216,1)] hover:shadow-[15px_8px_0px_rgba(29,78,216,1)]'>
                    <span>Love Visits</span>
                    <Icons.right/>
                </Button>
            </a>
            

            <a href='' download=''>
                <Button className='flex justify-betweenpy-4 px-8 transition-transform duration-1000 transform -skew-x-12 gap-1 shadow-[10px_8px_0px_rgba(29,78,216,1)] hover:shadow-[15px_8px_0px_rgba(29,78,216,1)]'>
                    <span>Programme</span>
                    <Icons.right/>
                </Button>
            </a>
            
           </div>

        </div>
    </div>
    </div>
   </>
}

export default FactsSheet