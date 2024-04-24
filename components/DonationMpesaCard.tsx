import Image from "next/image"

const DonationMpesaCard = () => {
    return (
        <>
            <section>
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                    <div className="grid grid-cols-1 gap-8 lg: grid-cols-2 lg:gap-16">
                        <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
                            <Image 
                                className="absolute inset-0 h-full w-full object-cover"
                                src="/images/donation-icon-preview.png"
                                alt="donation-icon"
                            ></Image>
                        </div>

                        <div className="lg:py-24">
                            <h2 className="text-3xl font-bold sm:text-4xl">
                                Donate Now
                            </h2>

                            <p className="mt-4 text-gray-600">
                            Your contribution makes a world of difference. Join us in making a difference, empowering communities and transforming lives one act of generosity at a time with your kind donation.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}