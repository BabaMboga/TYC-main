import testimonials  from "./TestimonialsData";
import React, { useEffect } from 'react';
import KeenSlider from 'keen-slider';
import 'keen-slider/keen-slider.min.css';
import { Icons } from "../Icons"
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Testimonials: React.FC = () => {
    useEffect(() => {
        const keenSlider = new KeenSlider(
            '#keen-slider',
            {
                loop: true,
                slides: {
                    origin: 'center',
                    perView: 1.25,
                    spacing: 16,
                },
                breakpoints: {
                    '(min-width: 1024px)': {
                        slides: {
                            origin: 'auto',
                            perView: 1.5,
                            spacing: 32,
                        },
                    },
                },
            },
            []
        );

        const keenSliderPrevious = document.getElementById('keen-slider-previous');
        const keenSliderNext = document.getElementById('keen-slider-nexy');

        const keenSliderPreviousDesktop = document.getElementById('keen-slider-previous-desktop');
        const keenSliderNextDesktop = document.getElementById('keen-slider-next-desktop')

        keenSliderPrevious?.addEventListener('click', () => keenSlider.prev());
        keenSliderNext?.addEventListener('click', () => keenSlider.next());

        keenSliderPreviousDesktop?.addEventListener('click', () => keenSlider.prev());
        keenSliderNextDesktop?.addEventListener('click', () => keenSlider.next());

        return () => {
            keenSlider.destroy();
        };
    }, []);

    return (
        <section className="bg-gray-50">
            <div className="mx-auto max-w-[1340px] px-4 py-12 sm:px-6 lg:me-0 lg:py-16 lg:pe-0 lg:ps-8 xl:py-24">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-center lg:gap-16">
                    <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            Don&apos;t just take our word for it...
                        </h2>

                        <p className="mt-4 text-gray-700">
                            Listen to the people whose lives we have touched over the years.
                        </p>

                        <div className="hidden lg:mt-8 lg:flex lg:gap-4">
                            <button
                                aria-label="Previous slide"
                                id="keen-slider-previous-desktop"
                                className="rounded-full border border-rose-600 p-3 text-rose-600 transition hover:bg-rose-600 hover:text-white"
                            >
                               <FaArrowLeft />
                            </button>

                            <button
                                aria-label="Next-slide"
                                id="keen-slider-next-desktop"
                                className="rounded-full border border-rose-600 p-3 text-rose-600 transition hover:bg-rose-600 hover:text-white"
                            >
                                <FaArrowRight />
                            </button>
                        </div>
                    </div>

                    <div className="-mx-6 lg:col-span-2 lg:mx-0">
                        <div id="keen-slider" className="keen-slider">
                            {testimonials.map((testimonial, index) => (
                                <div key={index} className="keen-slider__slide">
                                    <blockquote className="flex h-full flex-col justify-betweeb bg-white p-6 shadow-sm sm:p-8 lg:p-12">
                                        <div>
                                            <div className="mt-4">
                                                <p className="text-2xl font-bold text-rose-600 sm:text-3xl">
                                                    {testimonial.title}
                                                </p>

                                                <p className="mt-4 leading-relaxed text-gray-700">
                                                    {testimonial.testimonial}
                                                </p>
                                            </div>
                                        </div>

                                        <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
                                            &mdash; {testimonial.name}
                                        </footer>
                                    </blockquote>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="lg:hidden">
                        <button
                            aria-label="Previous slide"
                            id="keen-slider-previous"
                            className="rounded-full border border-rose-600 p-3 text-rose-600 transition hover:bg-rose-600 hover:text-white"
                        >
                            <FaArrowLeft />
                        </button>

                        <button
                            ariel-label="Next slide"
                            id="keen-slider-next"
                            className="rounded-full border border-rose-600 p-3 text-rose-600 transition hover:bg-rose-600 hover:text-white"
                        >
                            <FaArrowRight />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials