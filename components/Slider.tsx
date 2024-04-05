import React, {useState} from 'react';
import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs';
import {RxDotFilled} from 'react-icons/rx';
import img01 from '@/public/images/slider/cardpicture2.png';
import img02 from '@/public/images/slider/image001.jpg';
import img03 from '@/public/images/slider/image019.jpg';
import img04 from '@/public/images/slider/image027.jpg';
import img05 from '@/public/images/slider/image035.jpg';
import img06 from '@/public/images/slider/photo4.jpg';
import img07 from '@/public/images/slider/photo6.jpg';
import img08 from '@/public/images/slider/section.jpg';

export default function Slider() {
    const slides = [
        { url: img01 },
        { url: img02 },
        { url: img03 },
        { url: img04 },
        { url: img05 },
        { url: img06 },
        { url: img07 },
        { url: img08 }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevslide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }

    const goToSlide = (slideIndex : number) => {
        setCurrentIndex(slideIndex);
    } 

    return (
        <div className='max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group'>
            <div
                style={{backgroundImage: `url(${slides[currentIndex].url})`}}
                className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
            ></div>
            {/* left arrow */}
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactLeft onClick={prevslide} size={30} />
            </div>
            {/* right arrow */}
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactRight onClick={nextSlide} size={30}/>
            </div>
            <div className='flex top-4 justify-center py-2'>
                {slides.map((slide,slideIndex) => (
                    <div
                        key={slideIndex}
                        onClick={() => goToSlide(slideIndex)}
                        className='text-2xl cursor-pointer'
                    >
                        <RxDotFilled />
                    </div>
                ))}
            </div>
        </div>
    )    
}