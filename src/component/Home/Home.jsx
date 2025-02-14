// import React from 'react'
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
// import './home.css'
// import TestimonialSlider from '../TestimonialSlider/Testimonial';
// import { motion } from 'framer-motion'
// import { fadeIn } from '../../variants';
// import Listedmember from '../Listedmember/Listedmember';

// function Home() {
// 	const settings = {
// 		dots: true,
// 		infinite: true,
// 		speed: 500,
// 		slidesToShow: 1,
// 		autoplay: true,
// 		slidesToScroll: 1,
// 		autoplaySpeed: 400
// 	};
// 	return (
// 		<section>
// 			<Slider {...settings}>
// 				<div>
// 					<img src="https://businesssphere.info/uploads/banner/2054857676704355.jpg" alt="img1" className='crousal-img' />
// 				</div>
// 				<div>
// 					<img src="https://businesssphere.info/uploads/banner/6095754063000588.png" alt="img1" className='crousal-img' />
// 				</div>
// 				<div>
// 					<img src="https://businesssphere.info/uploads/banner/1474091916307897.jpeg" alt="img1" className='crousal-img' />
// 				</div>
// 			</Slider>
// 			<motion.h1
// 				variants={fadeIn("up", 0.2)}
// 				initial="hidden"
// 				whileInView={"show"}
// 				viewport={{ once: false, amount: 0.3 }}

// 				className="buss-heading">Business Directory</motion.h1>
// 			<div><Listedmember /></div>
// 			<motion.h1

// 				variants={fadeIn("up", 0.2)}
// 				initial="hidden"
// 				whileInView={"show"}
// 				viewport={{ once: false, amount: 0.3 }}

// 				className="buss-heading">About Business Sphere</motion.h1>
// 			<motion.div

// 				variants={fadeIn("up", 0.2)}
// 				initial="hidden"
// 				whileInView={"show"}
// 				viewport={{ once: false, amount: 0.3 }}

// 				className="directory-card">
// 				<div className="about-detail-card">
// 					<motion.div

// 						variants={fadeIn("right", 0.2)}
// 						initial="hidden"
// 						whileInView={"show"}
// 						viewport={{ once: false, amount: 0.3 }}

// 						className="detail-card">
// 						<h1 className="abou-heading">About Us</h1>
// 						<p className="description">
// 							Gratitude for the welcome to Business Sphere! a thriving networking
// 							community for seasoned business professionals in the vibrant city of Kolkata.
// 						</p>
// 					</motion.div>
// 					<div className="detail-card">
// 						<h1 className="abou-heading">Our Mission</h1>
// 						<p className="description">
// 							At Business Sphere, our mission is clear and compelling. We aim to
// 							empower and connect the experienced and dynamic business minds of Kolkata.
// 						</p>
// 					</div>
// 					<motion.div

// 						variants={fadeIn("left", 0.2)}
// 						initial="hidden"
// 						whileInView={"show"}
// 						viewport={{ once: false, amount: 0.3 }}

// 						className="detail-card">
// 						<h1 className="abou-heading">Why Choose Us</h1>
// 						<p className="list-item">1.<span> </span> Exclusive Networking</p>
// 						<p className="list-item">2.<span> </span>Guidance from Leaders</p>
// 						<p className="list-item">3.<span> </span>Recognition and Awards</p>
// 						<p className="list-item">4.<span> </span>Social Responsibility</p>
// 						<p className="list-item">5.<span> </span>Strengthen Bonds</p>
// 					</motion.div>
// 				</div>
// 			</motion.div>
// 			<motion.h1

// 				variants={fadeIn("up", 0.2)}
// 				initial="hidden"
// 				whileInView={"show"}
// 				viewport={{ once: false, amount: 0.3 }}

// 				className='buss-heading'>Our Process</motion.h1>
// 			<div className='process-align-container'>
// 				<motion.div

// 					variants={fadeIn("right", 0.2)}
// 					initial="hidden"
// 					whileInView={"show"}
// 					viewport={{ once: false, amount: 0.7 }}

// 					className='one-process'>
// 					<div className="process-detail-card">
// 						<img
// 							src="https://businesssphere.info/images/img-1.png"
// 							className="profile"
// 						/>
// 						<p className="apply-heading">Apply for Listing on Website</p>
// 					</div>
// 					<div className="process-detail-card">
// 						<img
// 							src="https://businesssphere.info/images/img-2.png"
// 							className="profile"
// 						/>
// 						<p className="possition">Review</p>
// 					</div>
// 				</motion.div>
// 				<motion.div

// 					variants={fadeIn("left", 0.2)}
// 					initial="hidden"
// 					whileInView={"show"}
// 					viewport={{ once: false, amount: 0.7 }}

// 					className='one-process'>
// 					<div className="process-detail-card">
// 						<img
// 							src="https://businesssphere.info/images/img-3.png"
// 							className="profile"
// 						/>
// 						<p className="possition">Approval</p>
// 					</div>
// 					<div className="process-detail-card collaborate">
// 						<img
// 							src="https://businesssphere.info/images/img-4.png"
// 							className="profile"
// 						/>
// 						<p className="possition">Collaborate</p>
// 					</div>
// 				</motion.div>
// 			</div>
// 			<div>
// 				<motion.h1

// 					variants={fadeIn("up", 0.2)}
// 					initial="hidden"
// 					whileInView={"show"}
// 					viewport={{ once: false, amount: 0.3 }}

// 					className='testimonial-heading'>Testimonials</motion.h1>
// 				<TestimonialSlider />
// 			</div>
// 			<div className="our-supporting-brd-contianer">
// 				<motion.h1

// 					variants={fadeIn("up", 0.2)}
// 					initial="hidden"
// 					whileInView={"show"}
// 					viewport={{ once: false, amount: 0.3 }}

// 					className="buss-heading">Supporting Brands</motion.h1>
// 				<div>
// 					<marquee direction="left" scrollamount="20" className="marquee">
// 						<img src="https://businesssphere.info/images/24.png" className="com-logo" />
// 						<img src="https://businesssphere.info/images/logo.png" className="com-logo" />
// 						<img src="https://businesssphere.info/images/20.png" className="com-logo" />
// 						<img src="https://businesssphere.info/images/19.png" className="com-logo" />
// 						<img src="https://businesssphere.info/images/25.jpeg" className="com-logo" />
// 						<img src="https://businesssphere.info/images/26.jpeg" className="com-logo" />
// 					</marquee>

// 				</div>
// 			</div>
// 			<div className='data-main-container'>
// 				<div className="business-contianer">
// 					<h1 className="heading">Nature of Business</h1>
// 					<div className="directory-data-container">
// 						<div className="directory-data">
// 							<h1 className="text-11">11+</h1>
// 							<p className="text-manufacture">Manufacture</p>
// 						</div>
// 						<div className="directory-data">
// 							<p className="text-11">10+</p>
// 							<p className="text-manufacture">services</p>
// 						</div>
// 						<div className="directory-data">
// 							<p className="text-11">13+</p>
// 							<p className="text-manufacture">Retail</p>
// 						</div>
// 						<div className="directory-data">
// 							<p className="text-11">9+</p>
// 							<p className="text-manufacture">Professional</p>
// 						</div>
// 						<div className="directory-data">
// 							<p className="text-11">2+</p>
// 							<p className="text-manufacture">Others</p>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 			<div className='data-main-container'>
// 				<div className="business-contianer">
// 					<h1 className="heading">Blood Group</h1>
// 					<div className="directory-data-container">
// 						<div className="directory-data">
// 							<p className="text-11">11+</p>
// 							<p className="text-manufacture">A+</p>
// 						</div>
// 						<div className="directory-data">
// 							<p className="text-11">10+</p>
// 							<p className="text-manufacture">A-</p>
// 						</div>
// 						<div className="directory-data">
// 							<p className="text-11">17+</p>
// 							<p className="text-manufacture">B+</p>
// 						</div>
// 						<div className="directory-data">
// 							<p className="text-11">0+</p>
// 							<p className="text-manufacture">B-</p>
// 						</div>
// 						<div className="directory-data">
// 							<p className="text-11">6+</p>
// 							<p className="text-manufacture">AB-</p>
// 						</div>
// 						<div className="directory-data">
// 							<p className="text-11">0+</p>
// 							<p className="text-manufacture">AB-</p>
// 						</div>
// 						<div className="directory-data">
// 							<p className="text-11">0+</p>
// 							<p className="text-manufacture">O+</p>
// 						</div>
// 						<div className="directory-data">
// 							<p className="text-11">11+</p>
// 							<p className="text-manufacture">O-</p>
// 						</div>
// 					</div>
// 				</div>
// 			</div>

// 			<div className='data-main-container'>
// 				<div className="business-contianer">
// 					<h1 className="heading">Locality</h1>
// 					<div className="directory-data-container">
// 						<div className="directory-data">
// 							<p className="text-11">11+</p>
// 							<p className="text-manufacture">South Kolkata Metro Area</p>
// 						</div>
// 						<div className="directory-data">
// 							<p className="text-11">2+</p>
// 							<p className="text-manufacture">North Kolkata Metro Area</p>
// 						</div>
// 						<div className="directory-data">
// 							<p className="text-11">10+</p>
// 							<p className="text-manufacture">North Kolkata E M Byepass</p>
// 						</div>
// 						<div className="directory-data">
// 							<p className="text-11">1+</p>
// 							<p className="text-manufacture">Extended north kolkata</p>
// 						</div>
// 						<div className="directory-data">
// 							<p className="text-11">1+</p>
// 							<p className="text-manufacture">Industrial Area south Kolkata</p>
// 						</div>
// 						<div className="directory-data">
// 							<p className="text-11">0+</p>
// 							<p className="text-manufacture">Non Metro Route Science City</p>
// 						</div>
// 						<div className="directory-data">
// 							<p className="text-11">9+</p>
// 							<p className="text-manufacture">Central kolkata</p>
// 						</div>
// 						<div className="directory-data">
// 							<p className="text-11">2+</p>
// 							<p className="text-manufacture">Others</p>
// 						</div>
// 					</div>
// 				</div>
// 			</div>

// 		</section>
// 	)
// }

// export default Home

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./home.css";
import TestimonialSlider from "../TestimonialSlider/Testimonial";
import Listedmember from "../Listedmember/Listedmember";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import about from "../../assets/ABOUT.png";
import mission from "../../assets/MISSION.png";
import choose from "../../assets/CHOOSE.png";
import SupportingBrands from "../SupportingBrands/SupportingBrands.jsx";
import RegisteredBusinesses from "../RegisteredBusinesses/RegisteredBusinesses.jsx";
import BirthDay from "../BirthDay/BirthDay.jsx";

const fadeInVariant = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

function Home() {
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    autoplay: true,
    slidesToScroll: 1,
    autoplaySpeed: 4000,
  };

  const AnimatedHeading = ({ children }) => {
    const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0.3,
    });

    return (
      <motion.h1
        ref={ref}
        variants={fadeInVariant}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        className="buss-heading"
      >
        {children}
      </motion.h1>
    );
  };

  const AnimatedSection = ({ children }) => {
    const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0.3,
    });

    return (
      <motion.div
        ref={ref}
        variants={fadeInVariant}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        className="directory-card"
      >
        {children}
      </motion.div>
    );
  };

  return (
    <div>
      <BirthDay />
      <section>
        <Slider {...settings}>
          <div>
            <img
              src="https://businesssphere.info/uploads/banner/2054857676704355.jpg"
              alt="img1"
              className="crousal-img"
            />
          </div>
          <div>
            <img
              src="https://businesssphere.info/uploads/banner/6095754063000588.png"
              alt="img1"
              className="crousal-img"
            />
          </div>
          <div>
            <img
              src="https://businesssphere.info/uploads/banner/1474091916307897.jpeg"
              alt="img1"
              className="crousal-img"
            />
          </div>
        </Slider>

        {/* <AnimatedHeading>About Business Sphere</AnimatedHeading> */}

        <div>
          <h1 className=" text-center text-3xl py-4 font-bold">
            Business Directory
          </h1>
          <Listedmember />
        </div>

        <div className="course-div">
          <AnimatedHeading>
            <div>
              <h1>About Business Sphere</h1>
            </div>
          </AnimatedHeading>
          <div className="course-container">
            <div className="course1">
              <img src={about} alt="" />
              <p>
                Gratitude for the welcome to Business Sphere! a thriving
                networking community for seasoned business professionals in the
                vibrant city of Kolkata.
              </p>
            </div>
            <div className="course2">
              <img src={mission} alt="" />
              <p>
                At Business Sphere, our mission is clear and compelling. We aim
                to empower and connect the experienced and dynamic business
                minds of Kolkata.
              </p>
            </div>
            <div className="course3">
              <img src={choose} alt="" />
              <ul>
                <li className=" flex items-center">
                  <MdKeyboardDoubleArrowRight className="animated-arrow" />
                  Exclusive Networking
                </li>
                <li className=" flex items-center">
                  <MdKeyboardDoubleArrowRight className="animated-arrow" />
                  Guidance from Leaders
                </li>
                <li className=" flex items-center">
                  <MdKeyboardDoubleArrowRight className="animated-arrow" />
                  Recognition and Awards
                </li>
                <li className=" flex items-center">
                  <MdKeyboardDoubleArrowRight className="animated-arrow" />
                  Social Responsibility
                </li>
                <li className=" flex items-center">
                  <MdKeyboardDoubleArrowRight className="animated-arrow" />
                  Strengthen Bonds
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* <AnimatedSection>
		  <div className="about-detail-card">
		  <motion.div
		  variants={fadeInVariant}
		  initial="hidden"
		  animate="show"
		  className="detail-card"
		  >
		  <h1 className="abou-heading">About Us</h1>
		  <p className="description">
		  Gratitude for the welcome to Business Sphere! a thriving networking
		  community for seasoned business professionals in the vibrant city of Kolkata.
		  </p>
		  </motion.div>
		  
		  <div className="detail-card">
		  <h1 className="abou-heading">Our Mission</h1>
		  <p className="description">
				At Business Sphere, our mission is clear and compelling. We aim to
				empower and connect the experienced and dynamic business minds of Kolkata.
			  </p>
			</div>
			
			<motion.div
			  variants={fadeInVariant}
			  initial="hidden"
			  animate="show"
			  className="detail-card"
			>
			  <h1 className="abou-heading">Why Choose Us</h1>
			  <p className="list-item">1. Exclusive Networking</p>
			  <p className="list-item">2. Guidance from Leaders</p>
			  <p className="list-item">3. Recognition and Awards</p>
			  <p className="list-item">4. Social Responsibility</p>
			  <p className="list-item">5. Strengthen Bonds</p>
			  </motion.div>
			  </div>
			  </AnimatedSection> */}

        <AnimatedHeading>
          <div>
            <h1>Our Process</h1>
          </div>
        </AnimatedHeading>

        <div className="process-align-container p">
          <motion.div
            variants={fadeInVariant}
            initial="hidden"
            animate="show"
            className="one-process"
          >
            <div className="process-detail-card">
              <img
                src="https://img.freepik.com/free-vector/new-entries-concept-illustration_114360-5261.jpg?t=st=1720157752~exp=1720161352~hmac=c3ca9d47f0b1d2cc996111d9b4066d28afa8dfc2cc8b1a5442dd9849333420b2&w=740"
                className="our-process-profile"
              />
              <p className="apply-heading">Apply for Listing on Website</p>
            </div>
            <div className="process-detail-card">
              <img
                src="https://img.freepik.com/free-vector/reviews-concept-landing-page_52683-18630.jpg?ga=GA1.1.940675991.1682000273&semt=ais_user"
                className="our-process-profile"
              />
              <p className="process-text">Review</p>
            </div>
          </motion.div>
          <motion.div
            variants={fadeInVariant}
            initial="hidden"
            animate="show"
            className="one-process"
          >
            <div className="process-detail-card">
              <img
                src="https://img.freepik.com/premium-vector/approval-mark-product-advantage-rating-reviews-meeting-requirement-high-quality-sign-quality-control_566886-3092.jpg?w=840"
                className="our-process-profile"
              />
              <p className="process-text">Approval</p>
            </div>
            <div className="process-detail-card collaborate">
              <img
                src="https://img.freepik.com/free-vector/business-team-brainstorm-idea-lightbulb-from-jigsaw-working-team-collaboration-enterprise-cooperation-colleagues-mutual-assistance-concept-pinkish-coral-bluevector-isolated-illustration_335657-1651.jpg?t=st=1720165105~exp=1720168705~hmac=6c8508df9107406283a66613028068840ebab9e1dcdc93c3578cd7eda4aba15b&w=740"
                className="our-process-profile"
              />
              <p className="process-text">Collaborate</p>
            </div>
          </motion.div>
        </div>

        <div>
          <AnimatedHeading>
            <div>
              <h1>Testimonials</h1>
            </div>
          </AnimatedHeading>
          <TestimonialSlider />
        </div>

        <AnimatedHeading>
          <div className=" h-[30vh]">
            <h1 className=" mb-8">Supporting Brands</h1>
            <SupportingBrands />
          </div>
        </AnimatedHeading>

        {/* <div className="our-supporting-brd-contianer">
		  <AnimatedHeading><h1>Supporting Brands</h1></AnimatedHeading>
		  <marquee direction="left" scrollamount="20" className="marquee">
			<img src="https://businesssphere.info/images/24.png" className="com-logo" />
			<img src="https://businesssphere.info/images/logo.png" className="com-logo" />
			<img src="https://businesssphere.info/images/20.png" className="com-logo" />
			<img src="https://businesssphere.info/images/19.png" className="com-logo" />
			<img src="https://businesssphere.info/images/25.jpeg" className="com-logo" />
			<img src="https://businesssphere.info/images/26.jpeg" className="com-logo" />
		  </marquee>
		</div> */}

        <div>
          <RegisteredBusinesses />
        </div>
      </section>
    </div>
  );
}

export default Home;
