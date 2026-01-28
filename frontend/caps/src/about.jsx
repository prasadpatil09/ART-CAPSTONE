import React from 'react'
import { IoColorPaletteOutline } from "react-icons/io5";
import { SlBadge } from "react-icons/sl";
import { FaRegHeart } from "react-icons/fa";
import { LuSparkles } from "react-icons/lu";

import './about.scss'

const About = () => {
  return (
    <div className='about-section'>
        <div className="about-container-img">
        <div className="img-about">
            <img src="https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800&auto=format&fit=crop&q=80" alt="about" />
            <div className="img-message">
                <p>"Art is not what you see, but what <br /> you make others see." <br /> <span className='img-span'>— Edgar Degas</span></p>
            </div>
        </div>
        </div>
        <div className="about-container-text">
            <h1 className='abouth1'>THE ARTIST</h1>
            <p className='abouth2'>Crafting Beauty <br />One Stroke at a Time</p>
            <p className='abouth3'>With over a decade of experience in various art forms, I've dedicated my life to <br /> capturing the essence of emotions, landscapes, and human experiences <br /> through my work. <br /><br />
                                   From delicate pencil sketches to vibrant canvas paintings, each piece I create is <br /> infused with passion and meticulous attention to detail. My journey has taken <br /> me from traditional techniques to embracing digital art, allowing me to offer a <br /> diverse collection. <br /><br />
                                   Every artwork tells a story—your story. Whether you're looking for a ready piece <br /> or a custom commission, I'm here to bring your vision to life.</p>
                                   <div className="boxes">
                                     <div className="box">
                                        <p className="icon"><IoColorPaletteOutline /></p>
                                        <p className="number">500+</p>
                                        <p className="text">Artworks Created</p>
                                     </div>
                                     <div className="box">
                                        <p className="icon"><SlBadge /></p>
                                        <p className="number">12</p>
                                        <p className="text">Years Experience</p></div>
                                     <div className="box">
                                        <p className="icon"><FaRegHeart /></p>
                                        <p className="number">300+</p>
                                        <p className="text">Happy Collectors</p></div>
                                     <div className="box">
                                        <p className="icon"><LuSparkles /></p>
                                        <p className="number">50+</p>
                                        <p className="text">Exhibitions</p></div>
                                   </div>
            </div>
    </div>
  )
}

export default About