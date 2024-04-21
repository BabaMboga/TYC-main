const MpesaCard = () => {
    return (
        <>
            <div className="bg-green-500 text-white text-center py-4 paybill-box">
                <div className="flex justify-center mb-4">
                    <div className="text-left mr-6">
                        <p className="font-bold text-white ">Help our cause by donating to the following:</p>
                        <div className="bg-white p-2 rounded-md mt-2">
                            <p className="font-bold text-black"> Paybill No</p>
                            <div className="flex">
                                <div className="bg-white p-2 rounded-md mr-1">
                                    <p className="text-black"> 1 </p>
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
                    </div>
                    <div className="bg-white p-2 rouded-md">
                        <p className="font-bold text-black">Account No</p>
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
        </>
    )
}