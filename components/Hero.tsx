"use client";
import { CldVideoPlayer } from "next-cloudinary";
import Image from "next/image";
import "next-cloudinary/dist/cld-video-player.css";
import { useState } from "react"

const Hero = () => {

  const [videoLoaded, setVideoLoaded] = useState(false);

  const handleVideoLoaded = () => {
    setVideoLoaded(true);
  };

  return (
    <div className="h-fit relative">
      {/* Fallback Image */}
      <Image
        src={"/images/hero.jpg"}
        alt={"TYC youth holding hands"}
        width={1440}
        height={700}
        className={`min-h-[390px] ${videoLoaded ? 'hidden' : 'block'} absolute w-full h-full object-cover`}
      />

       {/* Video Player */}
       <CldVideoPlayer
        width="1920"
        height="1080"
        src="mevv8tnxabpoem4tde7k"
        fluid
        muted
        controls
        hideContextMenu
        autoPlay="always"
        loop
        onDataLoad={handleVideoLoaded}
        className={`${videoLoaded ? 'block' : 'hidden'} absolute z-20 w-full h-full`}
      />

     

      {/* Centered Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="flex flex-row items-center gap-2 md:gap-5 ">
          <div className="bg-transparent mix-blend-overlay">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="120"
              height="120"
              viewBox="0 0 144 120"
              fill="none"
            >
              <path
                d="M36.5176 111.229C44.2984 104.702 55.8329 95.1259 58.686 90.4997C65.9067 84.6395 71.394 70.1467 66.6983 63.4998C64.2055 56.7575 44.4856 50.4973 32.8398 50.2443C42.8421 51.4437 69.8421 50.9014 70.5753 44.1381C72.1793 38.3527 58.4706 24.3236 48.5613 15.7422C70.4486 25.3499 86.5344 46.2875 85.1799 63.4998C83.6734 82.6429 68.2515 95.7042 36.5176 111.229Z"
                fill="#3F5787"
                stroke="black"
              />
              <path
                opacity="0.65"
                d="M106.884 74.097L106.884 74.0969L106.875 74.095C104.437 73.5255 100.466 73.6101 96.2244 74.1046C92.6274 74.524 88.7864 75.2444 85.4323 76.145C86.477 74.8777 87.3302 73.3596 87.8988 71.8505C88.5919 70.011 88.8985 68.0846 88.5186 66.602C88.6799 66.5803 88.8684 66.5633 89.0847 66.5522C89.5706 66.5272 90.1666 66.5332 90.855 66.5707C92.2311 66.6457 93.9508 66.8448 95.849 67.1575C99.6468 67.7831 104.125 68.8578 107.951 70.279L107.964 70.284L107.978 70.2882C112.585 71.7069 115.288 73.5417 116.713 75.513C118.124 77.465 118.329 79.6161 117.798 81.7976C117.35 83.638 116.614 85.8592 115.613 87.9308C114.88 89.4479 114.015 90.8637 113.033 91.9904C113.093 91.7559 113.158 91.5046 113.227 91.2379C113.352 90.7529 113.491 90.2172 113.636 89.6403C114.179 87.4842 114.781 84.8852 114.816 83.3515C114.859 81.4757 114.448 79.5444 113.214 77.8804C111.978 76.2143 109.958 74.8706 106.884 74.097Z"
                fill="#3F5787"
                stroke="black"
              />
              <path
                opacity="0.65"
                d="M63.7143 39.429C63.7143 40.6231 62.9221 41.7846 61.4705 42.6738C60.0273 43.5577 58.0018 44.1207 55.738 44.1207C53.4742 44.1207 51.4487 43.5577 50.0055 42.6738C48.5539 41.7846 47.7617 40.6231 47.7617 39.429C47.7617 38.2349 48.5539 37.0734 50.0055 36.1843C51.4487 35.3003 53.4742 34.7373 55.738 34.7373C58.0018 34.7373 60.0273 35.3003 61.4705 36.1843C62.9221 37.0734 63.7143 38.2349 63.7143 39.429Z"
                fill="#96B4DC"
                stroke="black"
              />
            </svg>
          </div>

          <p className=" font-extrabold text-5xl md:text-8xl text-black opacity-70 bg-[#DAF0EE] mix-blend-overlay bg-opacity-40">
            TYC
          </p>

          <p className=" font-extrabold text-5xl md:text-8xl text-black opacity-70 bg-[#DAF0EE] mix-blend-overlay bg-opacity-40">
            AFRICA
          </p>
        </div>

        <div className="flex justify-around ">
          <p className=" font-extrabold text-5xl md:text-8xl text-black opacity-70 bg-[#DAF0EE] mix-blend-overlay bg-opacity-40">
            TRUST
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
