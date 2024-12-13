import React from 'react'
import { Montserrat } from 'next/font/google';
import { Itim } from 'next/font/google';
import Image from 'next/image';

const montserrat = Montserrat({ weight: ["500", "600"], subsets: ["latin"]});
const itim = Itim({weight: ["400"], subsets: ["latin"]});

const LaunchCountdown = () => {
  return (
    <main className="bg-yellow-400 container mx-auto h-screen flex justify-center items-center">
      <section className="px-4 w-full flex justify-between items-center">
        <aside className="w-1/2">
          <h1 className='text-8xl mb-5 text-black'>
            <small className='text-3xl font-semibold'>Our Website is</small>
            <br />
            <span className={itim.className}>Launching Soon</span>
          </h1>
          <h2 className='text-black text-xl'>
            We&apos;re{" "} 
            <span className='bg-white px-2 py-1 font-semibold rounded shadow-md'>Under Construction</span> will be here soon.
          </h2>
          <h3 className='bg-white text-black font-semibold text-2xl uppercase px-2 py-1 inline-block rounded shadow-md mt-5'>Stay Tuned!</h3>
          <div className='flex justify-start mt-10 gap-3'>
            <span className='flex flex-col justify-center items-center bg-black text-yellow text-5xl w-36 py-3 shadow-lg rounded-lg'>
              1<small className='text-sm uppercase font-semibold text-white'> Days</small>
            </span>
            <span className='flex flex-col justify-center items-center bg-black text-yellow text-5xl w-36 py-3 shadow-lg rounded-lg'>
              1<small className='text-sm uppercase font-semibold text-white'> Hours</small>
            </span>
            <span className='flex flex-col justify-center items-center bg-black text-yellow text-5xl w-36 py-3 shadow-lg rounded-lg'>
              1<small className='text-sm uppercase font-semibold text-white'> Minutes</small>
            </span>
            <span className='flex flex-col justify-center items-center bg-black text-yellow text-5xl w-36 py-3 shadow-lg rounded-lg'>
              1<small className='text-sm uppercase font-semibold text-white'> Seconds</small>
            </span>
          </div>
        </aside>
        <aside className="w-1/2 flex justify-center pl-4">
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