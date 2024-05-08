import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import managementData from "./ManagementData";

function ManagementCarousel() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
    };

    return (
        <div className="w-3/4 m-auto">
            <div className="mt-20">
                <Slider {...settings}>
                    {managementData.map((data) => (
                        <div key={data.name}>
                            <a href="#" className="group relative block bg-black">
                                <img 
                                    alt=""
                                    src={data.img}
                                    className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                                />

                                <div className="relative p-4 sm:p-6 lg:p-8">
                                    <p className="text-sm font-medium uppercase tracking-wideset text-pink-500">
                                        Facilitator
                                    </p>
                                    <p className="text-xl font-bold text-white sm:text-2xl">
                                        {data.name}
                                    </p>
                                    <div className="mt-32 sm:mt-48 lg:mt-64">
                                        <div className="translate-y-8 tranform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                                            <p className="text-sm text-white">
                                                {data.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default ManagementCarousel