import React from 'react'
import './contact.scss'
import { FaInstagram } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
const Contact = () => {
  return (
    <div className="contact-section">
        <div className="left-contact">
            <h1 className='contacth1'>GET IN TOUCH</h1>
            <p className='contacth2'>Let's Create <br /> <span>Together</span></p>
            <p className='contacth3'>Whether you have questions about a piece, want to discuss a commission, or <br /> just want to say hello—I'd love to hear from you.</p>
            <div className="contact-boxes">
              <div className="contact-box">
                <p className="img-src"><MdOutlineMail /></p>
              <div className="ele">
                  <p className='ele1'>Email</p>
                <p className='ele2'>hello@artistrystudio.com</p>
                </div>
              </div>
              <div className="contact-box">
                <p className="img-src"><FaPhoneSquareAlt /></p>
                <div className="ele">
                  <p className='ele1'>Phone</p>
                <p className='ele2'>+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="contact-box">
                <p className="img-src"><CiLocationOn /></p>
                <div className="ele">
                  <p className='ele1'>Studio</p>
                <p className='ele2'>Brooklyn, New York</p>
                </div>
              </div>
            </div>
            <div className="contact-boxes-2">
              <div className="contact-box-2">
                <FaInstagram />
                </div>
                <div className="contact-box-2">
                <FiTwitter />
                </div>
            </div>
        </div>
        <div className="right-contact"></div>
    </div>
  )
}

export default Contact