import React, { useState } from "react";
import "./gallery.scss";

const Gallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeImageIndex, setActiveImageIndex]=useState(null);
  const clickableview=(keyindex)=>{
    alert(`You clicked view on image ${keyindex + 1}`);
  }
  const sf = [
    "All Works",
    "Digital Art",
    "Black & White",
    "Colorful",
    "Canvas",
  ];
const imgArray=[
  {src:"https://sketchpad-palette-store.lovable.app/assets/artwork-landscape-digital-CSNEu8J5.jpg",category:"Digital Art",art_name:"Digital Landscape",size:"1920x1080px",price:"₹1500"},
  {src:"https://sketchpad-palette-store.lovable.app/assets/artwork-portrait-bw-FehstqlK.jpg",category:"Black & White",art_name:"Digital Landscape",size:"1920x1080px",price:"₹1500"},
  {src:"https://sketchpad-palette-store.lovable.app/assets/artwork-flowers-color-dq_s9wd1.jpg",category:"Colorful",art_name:"Digital Landscape",size:"1920x1080px",price:"₹1500"},
  {src:"https://sketchpad-palette-store.lovable.app/assets/artwork-city-canvas-CGE0gSrZ.jpg",category:"Canvas",art_name:"Digital Landscape",size:"1920x1080px",price:"₹1500"},
  {src:"https://sketchpad-palette-store.lovable.app/assets/artwork-city-canvas-CGE0gSrZ.jpg",category:"Canvas",art_name:"Digital Landscape",size:"1920x1080px",price:"₹1500"}
];

let filteredImgArray=[{}];

 if(activeIndex===1){
  filteredImgArray=imgArray.filter(item=>item.category==="Digital Art");
}
else if(activeIndex===2){
  filteredImgArray=imgArray.filter(item=>item.category==="Black & White");
}
else if(activeIndex===3){
  filteredImgArray=imgArray.filter(item=>item.category==="Colorful");
}
else if(activeIndex===4){
  filteredImgArray=imgArray.filter(item=>item.category==="Canvas");
}
else{
  filteredImgArray=imgArray;
}

  return (
    <div className="gallery">
      <div className="st">
        <h1 className="gallery-title">CURATED COLLECTION</h1>
        <h1 className="g-h1-1">Explore the Gallery</h1>
        <p>
          Browse through our collection of original artworks, each piece crafted
          with passion <br />
          and precision.
        </p>
      </div>

      <div className="search-filter">
        <ul className="fl-row">
          {sf.map((item, index) => (
            <li
              key={index}
              className={activeIndex === index ? "active" : ""}
              onClick={() => setActiveIndex(index)}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="img-gallery">
        {filteredImgArray.map((item, index) => (
         <div>
          <div key={index} className="img-item" onMouseEnter={ ()=>setActiveImageIndex(index)} onMouseLeave={() => setActiveImageIndex(null)}>
            <img src={item.src}  alt={`Artwork ${index + 1}`} />
            {activeImageIndex===index && (
              <div className="img-overlay">
                <button className="view" onClick={() => clickableview(index)}>View</button>
                <button className="add">Add</button>
              </div>
            )}

            </div>
            <div className="img-info">
              <p className="art-name">{item.art_name}</p>
              <p className="art-size">{item.size}</p>
              <p className="art-price">{item.price}</p>
            </div>
</div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
