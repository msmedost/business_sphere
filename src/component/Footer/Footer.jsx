import React from 'react'
import './Footer.css'
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from 'react-router-dom'
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="footer">
		<div className="footer-container">
		  <div className="footer-section">
		 	 <img 
				src="https://businesssphere.info/uploads/web_photo_upload/171610104193261.png"
				className="logo-footer"                
            />
		  </div>
		  <div className="footer-section">
			<h4 className='h4-heading mobile-view-margin'>Useful Links</h4>
			<div className='footer-items'>
			<ul className='mobile-view-margin'>
			  <li><Link to="/" className='fotter-link-item'><MdKeyboardDoubleArrowRight />Home</Link></li>
			  <li><Link to="/about" className='fotter-link-item'><MdKeyboardDoubleArrowRight />About</Link></li>
			  <li><Link to="/directory" className='fotter-link-item'><MdKeyboardDoubleArrowRight />Directory</Link></li>
			  <li><Link to="/contact" className='fotter-link-item'><MdKeyboardDoubleArrowRight />Contact us</Link></li>

			  <li><Link to="/faq" className='fotter-link-item'><MdKeyboardDoubleArrowRight />FAQ</Link></li>
			  <li><Link to="/listing" className='fotter-link-item'><MdKeyboardDoubleArrowRight />Listing Form</Link></li>
			</ul>
			</div>
		  </div>
		  <div className="footer-section">
			<h4 className='mobile-view-margin'>Contact Us</h4>
			<p className='mobile-view-margin flex  items-center'><IoMdMail className='icon-footer'/> <a href="mailto: sskjha2016@gmail.com">sskjha2016@gmail.com</a></p>
			<p className='mobile-view-margin flex  items-center '><FaPhoneAlt className='icon-footer'/> <a href='tel: +91-85 82 84 84 34'>+91-85 82 84 84 34</a></p>
			<p className="mobile-view-margin flex  items-center"><FaLocationDot className='icon-footer'/> Kolkata 700001</p>
		  </div>
		</div>
		<div className="footer-bottom">
		  <p className='copy-right-text'>&copy; {currentYear-1}-{currentYear} BUSINESS SPHERE. DESIGNED BY <span className=' text-blue-900'><a target='_blank' href="https://msmedost.netlify.app/">MSMEDOST</a></span></p>
		</div>
	  </footer>
	)
}

export default Footer
