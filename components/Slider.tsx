'use client'
import React, {useState} from 'react';
import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs';
import {RxDotFilled} from 'react-icons/rx';
// import img01 from '@/public/images/slider/cardpicture2.png';
// import img02 from '@/public/images/slider/image001.jpg';
// import img03 from '@/public/images/slider/image019.jpg';
// import img04 from '@/public/images/slider/image027.jpg';
// import img05 from '@/public/images/slider/image035.jpg';
// import img06 from '@/public/images/slider/photo4.jpg';
// import img07 from '@/public/images/slider/photo6.jpg';
// import img08 from '@/public/images/slider/section.jpg';

export default function Slider() {
    const slides = [
        // { url: 'https://res.cloudinary.com/djfitsjh9/image/upload/v1706123292/tyc-images/image115_gifljb.jpg' },
        { url: 'https://res.cloudinary.com/djfitsjh9/image/upload/v1706123289/tyc-images/image107_kxseof.jpg' },
        { url: 'https://res.cloudinary.com/djfitsjh9/image/upload/v1706123288/tyc-images/image111_qnkmoj.jpg' },
        { url: 'https://res.cloudinary.com/djfitsjh9/image/upload/v1706123277/tyc-images/image095_squ8a2.jpg' },
        { url: 'https://res.cloudinary.com/djfitsjh9/image/upload/v1706123267/tyc-images/image087_ew6pyf.jpg' },
        { url: 'https://res.cloudinary.com/djfitsjh9/image/upload/v1706123201/tyc-images/image021_v2kohp.jpg' },
        { url: 'https://res.cloudinary.com/djfitsjh9/image/upload/v1706123260/tyc-images/image077_ptfrqg.jpg' },
        { url: 'https://res.cloudinary.com/djfitsjh9/image/upload/v1706123231/tyc-images/image053_j6g3lx.jpg' },
        { url: 'https://res.cloudinary.com/djfitsjh9/image/upload/v1706123184/tyc-images/image007_vx93p8.jpg' },
        { url: 'https://res.cloudinary.com/djfitsjh9/image/upload/v1758003397/5b9554ab-b156-418e-b3c1-0b920474f318_hzlajb.jpg' }
    
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
        <div className='max-w-[1400px] h-[500px] w-full m-auto pb-16 pt-5 px-4 relative group'>
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