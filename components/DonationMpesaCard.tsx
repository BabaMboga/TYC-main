import Image from "next/image";

const DonationMpesaCard = () => {
  return (
    <>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
              <Image
                className="absolute inset-0 h-full w-full object-cover"
                src="/images/donation-icon-preview.png"
                alt="donation-icon"
                width={500}
                height={500}
              ></Image>
            </div>

            <div className="lg:py-24">
              <h2 className="text-3xl text-center font-bold sm:text-4xl">
                Donate Now
              </h2>

              <p className="mt-4 text-gray-600">
                Your contribution makes a world of difference. Join us in
                empowering communities and transforming lives one act of
                generosity at a time with your kind donation. Together, we can
                create lasting change and provide essential support to those in
                need. Your generosity enables us to reach more individuals,
                offer vital resources, and foster positive change in communities
                around the globe. With your help, we can continue to make a
                meaningful impact and create a brighter future for all. Join our
                mission today and be a part of something truly transformative.
                Together, we can make a world of difference.
              </p>

              <div className="flex justify-center">
                <div className="p-10 rounded-md">
                  <div className="border bg-green-500 border-green-500 rounded-md p-2">
                    <p className="font-bold text-center text-black">Paybill No</p>
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
                </div>
                <div className="p-10 rounded-md ml-4">
                  <div className="border bg-green-500 border-green-300 rounded-md p-2">
                    <p className="font-bold text-center text-black">Account No</p>
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
  );
};

export default DonationMpesaCard;
