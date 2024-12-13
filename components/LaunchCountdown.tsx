import React from 'react'
import { Montserrat } from 'next/font/google';
import { Itim } from 'next/font/google';

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
          <div>
            <span className='flex flex-col justify-center items-center bg-black text-yellow text-5xl w-36 py-3 shadow-lg rounded-lg'>
              1<small> Days</small>
            </span>
            <span className='flex flex-col justify-center items-center bg-black text-yellow text-5xl w-36 py-3 shadow-lg rounded-lg'>
              1<small> Hours</small>
            </span>
            <span className='flex flex-col justify-center items-center bg-black text-yellow text-5xl w-36 py-3 shadow-lg rounded-lg'>
              1<small> Minutes</small>
            </span>
            <span className='flex flex-col justify-center items-center bg-black text-yellow text-5xl w-36 py-3 shadow-lg rounded-lg'>
              1<small> Seconds</small>
            </span>
          </div>
        </aside>
        <aside className="w-1/2"></aside>
      </section>
    </main>
  )
}

export default LaunchCountdown;