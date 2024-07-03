import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SupportingBrands() {

  const images = [
    "https://businesssphere.info/images/24.png",
    "https://businesssphere.info/images/logo.png",
    "https://businesssphere.info/images/20.png",
    "https://businesssphere.info/images/19.png",
    "https://businesssphere.info/images/25.jpeg",
    "https://businesssphere.info/images/26.jpeg",
  ];

  var settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 4000,
    cssEase: "linear"
  };
  
  return (
    <div className='w-full flex justify-center items-center'>
      <div className="w-3/4 mt-8">
        <Slider {...settings}>
          {images.map((src, index)=>{
            return (
              <div key={index}>
                <img className="w-40" src={src} alt={`Brand ${index + 1}`} />
              </div>
            )
          })}
        </Slider>
      </div>
    </div>
  );
}

export default SupportingBrands;
