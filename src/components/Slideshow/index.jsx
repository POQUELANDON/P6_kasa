import React, { useState } from "react";

function Slideshow({ images }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  function previousImage() {
    setCurrentImageIndex((currentIndex) =>
      currentIndex === 0 ? images.length - 1 : currentIndex - 1
    );
  }

  function nextImage() {
    setCurrentImageIndex((currentIndex) =>
      currentIndex === images.length - 1 ? 0 : currentIndex + 1
    );
  }

  return (
    <div className="carrousel">
      <img
        className="carrousel-image"
        src={images[currentImageIndex]}
        alt="Logement"
      />
      <div className="carrousel-navigation">
        <button className="carrousel-button" onClick={previousImage}>
           &lt;
        </button>
        <span className="carrousel-counter">{`${currentImageIndex + 1} / ${
          images.length
        }`}</span>
        <button className="carrousel-button" onClick={nextImage}>
           &gt;
        </button>
      </div>
    </div>
  );
}

export default Slideshow