
import './App.scss'
import Gallery from './gallery';
import { GiShoppingCart } from "react-icons/gi";
import { FaLongArrowAltDown } from "react-icons/fa";

function App() {
  return(
    <div className="website">
      <div className="navbar">
        <div className="brand"><p>Artistry <span className='hl1'>Studio</span></p></div>
        <div className="navbar-attributes">
          <ul>
            <li><a href="#home"><p>HOME</p></a></li>
            <li><a href="#gallery"><p>GALLERY</p></a></li>
            <li><a href="#about"><p>ABOUT</p></a></li>
            <li><a href="#contact"><p>CONTACT</p></a></li>
          </ul>
        </div>
        <div className="cart_image"><p><GiShoppingCart /></p></div>
      </div>
      <div id='home'className='home'>
        <div className="left-side">
          <div className="allhome">
          <h1 className='homeh1'>WELCOME TO MY STUDIO</h1>
          <h1 className='homeh1-2'>WHERE EVERY <br /> <span className="hl1">STROKE</span> TELLS <br />A STORY</h1>
          <p className='homep1'>Discover handcrafted sketches and artwork that capture <br /> emotions, memories, and moments. From digital <br /> masterpieces to traditional canvas art.</p>
          <button className="go-gallery"><a href="#gallery">Explore Gallery</a></button>
          </div>
        </div>
        <div className="middle-home">
          <p>Scroll</p>
          <p><a href="#gallery"><FaLongArrowAltDown /></a></p>
        </div>
        <div className="right-side">
                <div className="one">
                  <div className="two">
                    <div className="three">
                      
                      <img src="https://sketchpad-palette-store.lovable.app/assets/hero-artwork-AU8DCOnk.jpg" alt="" />
                      <div>
                      <p><span>Featured work</span> <br />
                      "Whispers of Dawn"</p>
                      </div>
                    </div>
                  </div>
                </div>
        </div>
      </div>
      <div id="gallery" className='gallery'>
        <Gallery/>
      </div>
    </div>
  );
}
export default App