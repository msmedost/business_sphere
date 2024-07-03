import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './testimonial.css';
import { useMediaQuery } from 'react-responsive';
import { FaCircleArrowRight } from "react-icons/fa6";

const testimonials = [
  {
    quote: "This is the best service I have ever used. My name is Sanjay Kumar Jha, founder of MSME DOST and SIMPLIFIED. We are into Website, Software and Technology aspect of compliances. We have got a few clients from this contact sphere and also a few solutions and services I am availing from members of Business Sphere. This is really useful and helpful.",
    author: "Sanjay Kumar Jha",
    position: "MSMEDOST and Simplified Management Solutions",
    image: "https://businesssphere.info/uploads/testimonial/8367771856983015.png"
  },
  {
    quote: "I am Shubham Jain from S.P. Hosiery and I am satisfied with this forum. I have got Business connects and referrals and got few Businesses too. Thanks to the member of the forum and I am happy with forums activities.",
    author: "Shubham Jain",
    position: "S.P. Jain Hosiery",
    image: "https://businesssphere.info/uploads/testimonial/804084144243608.jpg"
  }
];

const TestimonialSlider = () => {

  const isMobile = useMediaQuery({ maxWidth: 850 });

  function PrevArrow(props) {
    const {  onClick } = props;
    return (
      <div className='flex items-center h-full text-5xl sm:text-2xl absolute -left-20 z-10 sm:-left-8'
      onClick={onClick}
      ><div className=' inline-block text-indigo-900'>
        <FaCircleArrowRight className=' rotate-180'/>
      </div>
      </div>
    );
  }


  
  function NextArrow(props) {
    const {  onClick } = props;
    return (
      <div className='flex items-center h-full text-5xl sm:text-2xl absolute -right-20 top-0 z-10 sm:-right-10'
        onClick={onClick}
      ><div className=' inline-block text-indigo-900'>
        <FaCircleArrowRight/>
      </div>
      </div>
    );
  }
  var settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: isMobile ? 1 : 2,
    slidesToScroll: isMobile ? 1 : 2,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 4000,
    draggable: true,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  return (
    <div className=' w-full flex justify-center items-center'>
      <div className=" w-3/4 mt-8">
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className=' p-4 sm:p-2'>
            <div className=' bg-white shadow-lg rounded-lg w-[35vw] lg2:w-full min-h-[36vh] 2xl:min-h-[40vh] xl2:min-h-[45vh] p-8 text-[max(0.8vw,13px)]'>
      
      
              <div className="profile ">
                  <img src={testimonial.image} alt={testimonial.author} />
              </div>
              <div className="testimonial">
                <p>{testimonial.quote}</p>
                <div className='name-position-container'>
                  <h4 className=' text-xl font-bold'>{testimonial.author}</h4>
                  <p className='position'>{testimonial.position}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
        </div>
    </div>
      
  );
};

export default TestimonialSlider;
