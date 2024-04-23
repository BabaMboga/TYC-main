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
                    </div>
                </div>

            </div>

        </div>
      </div>
    </>
  );
};

export default MpesaCard;
