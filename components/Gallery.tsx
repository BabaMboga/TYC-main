// import React from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-them.css';

// const Gallery: React.FC = () => {
//     const settings = {
//         dots: true,
//         infinite: true,
//         speed: 300,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 2000,
//     };

//     return (
//         <Slider {...settings}>
//             <div>
//                 <img />
//                 <p>Caption 1</p>
//             </div>
//             <div>
//                 <img />
//                 <p>Caption 1</p>
//             </div>
//             <div>
//                 <img />
//                 <p>Caption 1</p>
//             </div>
//                         <div>
//                 <img />
//                 <p>Caption 1</p>
//             </div>
//         </Slider>
//     )
// }

import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles

const Gallery: React.FC = () => {
  return (
    <Carousel>
      <div>
        <img src="/images/slideshow/image001.jpg" alt="Image 1" />
        <p className="legend">Caption 1</p>
      </div>
      <div>
        <img src="/images/slideshow/image019.jpg" alt="Image 2" />
        <p className="legend">Caption 2</p>
      </div>
      <div>
        <img src="/images/slideshow/image027.jpg" alt="Image 3" />
        <p className="legend">Caption 3</p>
      </div>
      {/* Add more images as needed */}
    </Carousel>
  );
};

export default Gallery;
