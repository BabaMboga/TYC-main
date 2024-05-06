import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ManagementCarousel() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
    };

    return (
        <div>
            <div>
                <Slider {...settings}></Slider>
            </div>
        </div>
    )
}