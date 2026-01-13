import React, { useState } from "react";
import "./gallery.scss";

const Gallery = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const sf = [
    "All Works",
    "Digital Art",
    "Black & White",
    "Colorful",
    "Canvas",
  ];

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
              onDoubleClick={() => setActiveIndex(null)}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Gallery;
