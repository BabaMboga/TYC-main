import Image from 'next/image';

const MpesaCard = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row md:items-center">
        <div className="md:w-2/3">
            <div className="bg-green-500 text-white text-center py-4 md:py-8 px-4 md:px-8 mx-auto rounded-lg md:rounded-none">
                <p className="font-bold text-white mb-4">
                    Your contribution makes a world of difference. Join us in empowering communities and transforming lives one act at a time with your kind donation. 
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
                          <div className="bg-white p-2 rounded-md mr-1">
                            <p className="text-black">6</p>
                          </div>
                        </div>
                    </div>
                    <div className="p-2 rounded-md ml-4">
                      <p className="font-bold text-black">
                        Account No
                      </p>
                      <div className="flex">
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
        <div className="md:w-1/3 flex justify-center items-center">
          <Image src={'/images/donation-icon.png'} alt={'Donation icon'} width={500} height={500}></Image>
        </div>
      </div>
    </>
  );
};

export default MpesaCard;
