import React from "react";
import "../index.css"; // Ensure global styles are applied


import img1 from "../assets/media/1.jpg";

import img3 from "../assets/media/3.jpg";
import img4 from "../assets/media/4.jpg";
import img5 from "../assets/media/5.jpg";
import img6 from "../assets/media/6.jpg";
import img7 from "../assets/media/7.jpg";
import img8 from "../assets/media/8.jpg";
import img9 from "../assets/media/9.jpg";
import img10 from "../assets/media/10.jpg";
import img11 from "../assets/media/11.jpg";
import img12 from "../assets/media/12.jpg";
import img13 from "../assets/media/13.jpg";


const images = [img1, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13];

const Media: React.FC = () => {
  return (
    <div className="media-page">
      {/* Hero Section */}
      <section className="hero6">
        <div className="hero-overlay">
          <h1>Media Gallery</h1>
          <p>A collection of moments from JP Radiology</p>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="section">
        <h2>Our Gallery</h2>
        <div className="gallery">
          {images.map((image, index) => (
            <div className="gallery-item" key={index}>
              <img src={image} alt={`Media ${index + 1}`} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Media;
