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
                    <Image className='border' src={'/images/photo7.jpg'} alt={'TYC members being adviced'} width={720} height={994}></Image>
                </div>
            </div>
        </div>

        <div className='md:ml-[50%] md:w-1/2 md:z-10 border-b-4 border-b-blue-700 bg-slate-300 px-4 relative md:top-2  flex flex-col items-center py-3 border'>
            <div className='py-3 font-semibold'>
            <div className="py-3 font-semibold">
              <h2 className="px-2 text-2xl text-center">
                2021 - 2022 Facts and Figures
              </h2>
            </div>
            
            </div>
            
            <div className='grid gap-2 px-3 py-3 text-lg font-normal'>
                
                <div className='relative text-center '>
                    <p>
                    Last year we impacted over ----- young people into (jobs, education, counseling , etc) Find out more about our impact in young peoples lives</p>
                </div>
                
            </div>
           
           <div className='flex items-center pb-2'>
            
            <Button className='flex justify-betweenpy-4 px-8 transition-transform duration-1000 transform -skew-x-12 gap-1 shadow-[10px_8px_0px_rgba(29,78,216,1)] hover:shadow-[15px_8px_0px_rgba(29,78,216,1)]'>
                <span>Download</span>
                <Icons.right/>
            </Button>
           </div>

        </div>
    </div>
    </div>
   </>
}

export default FactsSheet