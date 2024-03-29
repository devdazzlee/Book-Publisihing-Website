import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img1 from '../../Images/partnerslogo1.webp'
import img2 from '../../Images/partnerslogo2.webp'
import img3 from '../../Images/partnerslogo3.webp'
import im4 from '../../Images/partnerslogo4.webp'
import im5 from '../../Images/partnerslogo5.webp'
import im6 from '../../Images/partnerslogo6.webp'
import im7 from '../../Images/partnerslogo7.webp'
import im8 from '../../Images/partnerslogo8.webp'





class ImageSlider extends React.Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
    };

    const images = [
      img1,
    img2,
    img3,
    im4,
    im5,
    im6,
    im7,
    im8
    ];

    return (
      <div   className='py-8 w-full' style={{"background" :"#141D29" , "overflow" :"hidden"}} >
        <Slider {...settings}>
          {images.map((image, index) => (
            <div   key={index}>
              <img src={image} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}

export default ImageSlider;
