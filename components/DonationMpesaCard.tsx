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

                            <div className="flex justify-center">
                                <div className="p-2 rounded-md">
                                    <p className="font-bold text-black">
                                        Paybill No
                                    </p>
                                    <div className="flex">
                                        <div className="bg-white p-2 rounded-md mr-1">
                                            <p className="text-black">1</p>
                                        </div>
                                        <div className="bg-white p-2 rounded-md mr-1">
                                            <p className="text-black">2</p>
                                        </div>
                                        <div className="bg-white p-2 rounded-md mr-1">
                                            <p className="text-black">3</p>
                                        </div>
                                        <div className="bg-white p-2 rounded-md mr-1">
                                            <p className="text-black">4</p>
                                        </div>
                                        <div className="bg-white p-2 rounded-md mr-1">
                                            <p className="text-black">5</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-2 rounded-md ml-4">
                                    <div className="border border-gray-300 rounded-md p-2">
                                        <p className="font-bold text-black">
                                            Account No
                                        </p>
                                        <div className="flex">
                                            <div className="bg-white p-2 rounded-md mr-1">
                                                <p className="text-black">6</p>
                                            </div>
                                            <div className="bg-white p-2 rounded-md mr-1">
                                                <p className="text-black">7</p>
                                            </div>
                                            <div className="bg-white p-2 rounded-md mr-1">
                                                <p className="text-black">8</p>
                                            </div>
                                            <div className="bg-white p-2 rounded-md mr-1">
                                                <p className="text-black">9</p>
                                            </div>
                                            <div className="bg-white p-2 rounded-md mr-1">
                                                <p className="text-black">0</p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>

                            
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default DonationMpesaCard