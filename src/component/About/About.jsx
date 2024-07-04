import React, { useEffect, useState } from "react";
import "./about.css";

import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

import aboutImg from "../../assets/aboutUs/search.png";
import mission from "../../assets/aboutUs/leadership.png";
import vision from "../../assets/aboutUs/focus.png";
import choose from "../../assets/aboutUs/answer.png";
import features from "../../assets/aboutUs/settings.png";
import values from "../../assets/aboutUs/quality.png";
import { useInView } from "react-intersection-observer";

function About() {
  const [selectedDiv, setSelectedDiv] = useState("first");

  const { ref: headingRef, inView: headingInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });


  useEffect(()=>{

  },[selectedDiv])

  return (
    <div className=" mb-28">
      <div className=" relative mb-40">
        <img
          src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="about"
          className=" h-[60vh] w-full object-cover"
        />
        <div className=" absolute flex justify-center gap-4 w-full px-8 top-[90%]  text-center">
          <div
            onClick={() => setSelectedDiv("first")}
            className={` w-48 flex p-4 gap-2 items-center flex-col rounded-lg font-bold h-34 shadow-lg  border-gray-200 border-2   cursor-pointer transition-all duration-300 ${
              selectedDiv === "first"
                ? "bg-orange-500 text-white  "
                : " bg-gray-100"
            }`}
          >
            <div className=" bg-white p-2 rounded-full border-orange-500 border-2">
              <img className=" w-6" src={aboutImg} alt="" />
            </div>
            <h1>About Us</h1>
          </div>
          <div
            onClick={() => setSelectedDiv("second")}
            className={` w-48 flex p-4 gap-2 items-center flex-col rounded-lg font-bold h-34 shadow-lg  border-gray-200 border-2   cursor-pointer transition-all duration-300 ${
              selectedDiv === "second"
                ? "bg-orange-500 text-white  "
                : " bg-gray-100"
            }`}
          >
            <div className=" bg-white p-2 rounded-full border-orange-500 border-2">
              <img className=" w-6" src={mission} alt="" />
            </div>
            <h1>Our Mission</h1>
          </div>
          <div
            onClick={() => setSelectedDiv("third")}
            className={` w-48 flex p-4 gap-2 items-center flex-col rounded-lg font-bold h-34 shadow-lg border-gray-200 border-2   cursor-pointer transition-all duration-300 ${
              selectedDiv === "third"
                ? "bg-orange-500 text-white  "
                : " bg-gray-100"
            }`}
          >
            <div className=" bg-white p-2 rounded-full border-orange-500 border-2">
              <img className=" w-6" src={vision} alt="" />
            </div>
            <h1>Our Vision</h1>
          </div>
          <div
            onClick={() => setSelectedDiv("fourth")}
            className={` w-48 flex p-4 gap-2 items-center flex-col rounded-lg font-bold h-34 shadow-lg  border-gray-200 border-2   cursor-pointer transition-all duration-300 ${
              selectedDiv === "fourth"
                ? "bg-orange-500 text-white  "
                : " bg-gray-100"
            }`}
          >
            <div className=" bg-white p-2 rounded-full border-orange-500 border-2">
              <img className=" w-6" src={choose} alt="" />
            </div>
            <h1>Why Choose Business Sphere</h1>
          </div>
          <div
            onClick={() => setSelectedDiv("fifth")}
            className={`w-48 flex p-4 gap-2 items-center flex-col rounded-lg font-bold h-34 shadow-lg border-gray-200 border-2   cursor-pointer transition-all duration-300 ${
              selectedDiv === "fifth"
                ? "bg-orange-500 text-white  "
                : " bg-gray-100"
            }`}
          >
            <div className=" bg-white p-2 rounded-full border-orange-500 border-2">
              <img className=" w-6" src={features} alt="" />
            </div>
            <h1>Key Features of Business Sphere</h1>
          </div>
          <div
            onClick={() => setSelectedDiv("sixth")}
            className={`w-48 flex p-4 gap-2 items-center flex-col rounded-lg font-bold h-34 shadow-lg  border-gray-200 border-2   cursor-pointer transition-all duration-300 ${
              selectedDiv === "sixth"
                ? "bg-orange-500 text-white  "
                : " bg-gray-100"
            }`}
          >
            <div className=" bg-white p-2 rounded-full border-orange-500 border-2">
              <img className=" w-6" src={values} alt="" />
            </div>
            <h1>Values</h1>
          </div>
        </div>
      </div>
      <div>
        <motion.h1
          ref={headingRef}
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate={headingInView ? "show" : ""}
          className="about-main-heading"
        >
          <div>
            <h1>Welcome to The Business Sphere</h1>
          </div>
        </motion.h1>



        {
            selectedDiv === "first" && (

                <div className=" px-40">
          <motion.h1
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate={headingInView ? "show" : ""}
            className=" text-xl font-bold underline mb-4 text-left"
          >
            <div className=" heading-style"><h1>About Us</h1></div>
          </motion.h1>
          <div className=" flex gap-12 justify-center items-center text-justify">
            <div >
              <motion.p
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                animate={headingInView ? "show" : ""}
                className=" text-lg"
              >
                Welcome to Business Sphere, the pioneering networking community
                redefining the landscape of business interactions in our city.
                Unlike traditional networking organizations, Business Sphere
                breaks away from the conventional membership model, offering an
                inclusive platform where business professionals come together
                organically, driven by a shared passion for growth and
                collaboration.
                <br /><br />

                With a thriving community of over 5000 interconnected individuals,
          Business Sphere is a testament to the power of collective synergy and
          shared expertise. Our members, comprising seasoned business leaders,
          entrepreneurs, executives, and professionals from diverse industries,
          unite under a common goal: to leverage their collective knowledge and
          resources for mutual benefit.
          <br /><br />
          At Business Sphere, we believe in the philosophy of connection without
          constraints. Our platform transcends the barriers of registration and
          membership, fostering an open environment where meaningful
          relationships can flourish naturally. Whether you're a seasoned
          entrepreneur looking to expand your network or a budding professional
          seeking mentorship and guidance, Business Sphere offers a welcoming
          space to connect, learn, and grow.
              </motion.p>
            </div>
            <img
              className=" w-2/5 object-cover"
              src="https://images.unsplash.com/photo-1524758870432-af57e54afa26?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
        </div>

            )
        }



{selectedDiv === "second" && (
    <div className=" px-40">
        
          <motion.h1
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        animate={headingInView ? "show" : ""}
        className="text-xl font-bold underline mb-4 text-center"
          >
        <div className="heading-style"><h1>Our Mission</h1></div>
          </motion.h1>
          <div className=" flex gap-12 justify-center items-center text-justify">
              <img className=" w-2/5" src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
              <motion.p
                     variants={fadeIn("up", 0.2)}
                     initial="hidden"
                     animate={headingInView ? "show" : ""}
                      className=" text-lg pr-8"
              >
                      At Business Sphere, our mission is clear and compelling. We aim to
                      empower and connect the experienced and dynamic business minds of
                      Kolkata. Our purpose is to facilitate meaningful interactions, leading
                      to valuable business connections, referrals, and exciting
                      opportunities. We are committed to enhancing the local economy by
                      bringing together a diverse group of professionals with a shared
                      vision for success.
              </motion.p>
          </div>
         
    </div>
)}
        {
            selectedDiv === "third" && (
                <div className=" px-40">
<motion.h1
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate={headingInView ? "show" : ""}
           className="text-xl font-bold underline mb-4 text-center"
        >
          <div className="heading-style"><h1>Our Vision</h1></div>
        </motion.h1>
        <div className=" flex gap-12 justify-center items-center text-justify">
            <motion.p
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate={headingInView ? "show" : ""}
              className=" text-lg"
            >
              Our vision at Business Sphere is to revolutionize the way business is
              conducted in our city. By fostering a culture of collaboration, trust,
              and mutual support, we aim to reshape the economic landscape and
              create new opportunities for growth and prosperity. We envision
              Business Sphere as a catalyst for positive change, inspiring
              confidence, innovation, and entrepreneurship among our members and
              beyond.
              <br /><br />
              Join us on this journey of transformation and discover the limitless
              possibilities that await within the dynamic sphere of business
              networking.
            </motion.p>
            <img className=" w-2/5 object-cover" src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
                </div>
            )
        }
        
        
        {selectedDiv === "fourth" && (
            <div className=" px-20">
                <motion.h1
         variants={fadeIn("up", 0.2)}
         initial="hidden"
         animate={headingInView ? "show" : ""}
          className="text-xl font-bold underline mb-4 text-center"
        >
          <div  className="heading-style"><h1>Why Choose Business Sphere</h1></div>
        </motion.h1>
        <div className=" flex gap-8 justify-center items-center text-justify">
            <img className=" w-[30%] object-cover" src="https://images.pexels.com/photos/3184603/pexels-photo-3184603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
            <motion.p
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate={headingInView ? "show" : ""}
              className=" text-base"
            >
              <span className="span-element">Exclusive Networking:</span> Attend our
              quarterly networking sessions, where you can connect with prominent
              business figures in Kolkata for 4-5 hours each time.
              <br /><br />
              <span className="span-element">Guidance from Leaders: </span> Gain
              insights and vision from the city's renowned Business Tycoons and
              Conglomerates. Their guidance can significantly influence your
              business journey.
              <br /><br />
              <span className="span-element">Recognition and Awards:</span> As a
              member, you have the opportunity to be recognized and felicitated for
              your achievements, enhancing your reputation within the business
              community.
              <br /><br />
              <span className="span-element">Social Responsibility:</span>{" "}
              participate in meaningful social activities, showcasing your
              commitment to being a responsible businessperson and contributing to
              society.
              <br /><br />
            
              <span className="span-element">Strengthen Bonds: </span> Engage in
              activities that foster strong personal and professional relationships.
              These connections can be invaluable for your business.
              <br /><br />
              <span className="span-element">Diverse Networking Events:</span>{" "}
              Beyond quarterly meetings, we organize various networking occasions,
              including get-togethers and parties, creating opportunities for
              expanded networking.
              <br /><br />
              <span className="span-element">Business Growth:</span> Business
              Sphere's environment is conducive to discovering new opportunities,
              which can propel your business to new heights.
              <br /><br />
              <span className="span-element">Community and Support:</span> Join a
              community that values ethics, integrity, and transparency. Receive
              mentorship and support from experienced peers and leaders.
              <br /><br />
              <span className="span-element">Shape Kolkata's Business Future:</span>{" "}
              Be part of our collective mission to redefine Kolkata's business
              landscape. Your contribution can drive change and innovation.
            </motion.p>
        </div>
        
            </div>
        )}
        
        {selectedDiv === "fifth" && (
             <div className=" px-32">
                <motion.h1
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate={headingInView ? "show" : ""}
          className="text-xl font-bold underline mb-4 text-center"
        >
          <div className="heading-style"><h1>Key Features of Business Sphere</h1></div>
        </motion.h1>
        <div className="flex gap-12 justify-center items-center text-justify">
            <motion.p
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate={headingInView ? "show" : ""}
              className=" "
            >
              <span className="span-element">Inclusive Networking:</span> Unlike
              traditional networking groups that require formal membership, Business
              Sphere welcomes all seasoned business professionals from our city. Our
              inclusive approach ensures that everyone has the opportunity to
              participate and contribute, regardless of their background or
              experience level.
              <br /> <br />
              <span className="span-element">Community-driven Collaboration: </span>{" "}
              At the heart of Business Sphere is a vibrant community driven by a
              spirit of collaboration and reciprocity. Through regular gatherings,
              seminars, and events, we facilitate meaningful interactions that
              foster trust, camaraderie, and mutual support among our members.
              <br /><br />
              <span className="span-element">Empowering Connections: </span>{" "}
              Business Sphere serves as a catalyst for meaningful connections and
              strategic alliances. Whether you're seeking new business
              opportunities, referrals, or partnerships, our platform provides a
              fertile ground for cultivating fruitful relationships that drive
              business growth and success.
              <br /><br />
              <span className="span-element">Celebrating Success:</span> We believe
              in celebrating the achievements of our members and recognizing their
              contributions to the community. From milestone celebrations to awards
              ceremonies, Business Sphere honors excellence and inspires others to
              reach greater heights of success.
              <br /><br />
              <span className="span-element">Value of Word-of-Mouth:</span> In an
              age dominated by digital marketing and advertising, we understand the
              enduring power of word-of-mouth referrals. Through our networking
              events and gatherings, we emphasize the importance of personal
              recommendations and authentic connections in driving business growth
              and success.
            </motion.p>
            <img className="w-2/5 object-cover" src="https://images.unsplash.com/photo-1577415124269-fc1140a69e91?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
             </div>
        )}
        
        
        
        
        
        {selectedDiv === "sixth" && (
             <div className=" px-40">
        <motion.h1
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate={headingInView ? "show" : ""}
          className="text-xl font-bold underline mb-4 text-center"
        >
          <div className="heading-style"><h1>Values</h1></div>
        </motion.h1>
        <div className="flex gap-12 justify-center items-center text-justify">
            <img className=" w-[30%] object-cover" src="https://images.pexels.com/photos/3184603/pexels-photo-3184603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
            <motion.ol
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate={headingInView ? "show" : ""}
            >
              <li className=" text-lg">
                <span className="span-element">1. Collaboration:</span> We believe
                in the power of working together, where diverse talents and ideas
                converge to create extraordinary outcomes.
              </li>
              <li className=" text-lg">
                {" "}
                <span className="span-element">2. Networking:</span> We foster a
                community where meaningful connections are formed, leading to
                fruitful relationships and mutual growth.
              </li>
              <li className=" text-lg">
                <span className="span-element">3. Innovation:</span> We encourage
                forward-thinking and creativity, aiming to push the boundaries of
                traditional business practices.
              </li>
              <li className=" text-lg">
                <span className="span-element">4. Ethics:</span> Integrity and
                transparency are the cornerstones of our community, ensuring trust
                and credibility in all our interactions.
              </li>
              <li className=" text-lg">
                <span className="span-element">5. Community Growth:</span> are
                dedicated to not only enhancing individual businesses but also for
                the development of Kolkata's business landscape.
              </li>
            </motion.ol>
        </div>
        </div>
        )}
        {/* <motion.h1
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="buss-heading"
        >
          Our Process
        </motion.h1>
        <div className="process-align-container">
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="one-process"
          >
            <div className="process-detail-card">
              <img
                src="https://businesssphere.info/images/img-1.png"
                className="profile"
              />
              <p className="apply-heading">Apply for Listing on Website</p>
            </div>
            <div className="process-detail-card">
              <img
                src="https://businesssphere.info/images/img-2.png"
                className="profile"
              />
              <p className="possition">Review</p>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="one-process"
          >
            <div className="process-detail-card">
              <img
                src="https://businesssphere.info/images/img-3.png"
                className="profile"
              />
              <p className="possition">Approval</p>
            </div>
            <div className="process-detail-card collaborate">
              <img
                src="https://businesssphere.info/images/img-4.png"
                className="profile"
              />
              <p className="possition">Collaborate</p>
            </div>
          </motion.div>
        </div> */}
      </div>
    </div>
  );
}

export default About;
