import React from 'react'
import { Montserrat } from 'next/font/google';
import { Itim } from 'next/font/google';
import Image from 'next/image';
import Timer from './ui/Timer';

const montserrat = Montserrat({ weight: ["500", "600"], subsets: ["latin"]});
const itim = Itim({weight: ["400"], subsets: ["latin"]});

const LaunchCountdown = () => {
  return (
    <main className="bg-yellow-400 container mx-auto h-screen flex justify-center items-center">
      <section className="px-4 w-full flex flex-col lg:flex-row justify-between items-center">
        <aside className="w-full lg:w-1/2 text-center lg:text-start">
          <h1 className='text-6xl lg:text-7xl xl:text-8xl mb-5 text-black'>
            <small className='text-3xl font-semibold'>Our Website is</small>
            <br />
            <span className={itim.className}>Launching Soon</span>
          </h1>
          <h2 className='text-black text-lg lg:text-xl'>
            We&apos;re{" "} 
            <span className='bg-white px-2 py-1 font-semibold rounded shadow-md'>Under Construction</span> will be here soon.
          </h2>
          <h3 className='bg-white text-black font-semibold text-xl lg:text-2xl uppercase px-2 py-1 inline-block rounded shadow-md mt-5'>Stay Tuned!</h3>
          <Timer launchDate='2024-14-12T10:00:00'/>
          
        </aside>
        <aside className="w-full lg:w-1/2 flex justify-center mt-5 lg:mt-0 lg:pl-4">
          <Image 
            src = "/funny-launch.png"
            alt = "developers at work"
            width = {650}
            height={450}
            className='w-full max-w-[650px] h-auto'
          />
        </aside>
      </section>
    </main>
  )
}

export default LaunchCountdown;