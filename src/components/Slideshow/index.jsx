// Importation des hooks nécessaires de React
import React, { useState } from "react";
// Importation des composants SVG pour les flèches de navigation
import { ReactComponent as ArrowLeft } from '../../assets/ArrowLeft.svg';
import { ReactComponent as ArrowRight } from '../../assets/ArrowRight.svg';
import '../Slideshow/Slideshow.scss';

// Définition du composant Slideshow
function Slideshow({ images }) {
  // Utilisation du hook useState pour gérer l'index de l'image actuelle
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Fonction pour passer à l'image précédente
  function previousImage() {
    setCurrentImageIndex((currentIndex) =>
      currentIndex === 0 ? images.length - 1 : currentIndex - 1
    );
  }

  // Fonction pour passer à l'image suivante
  function nextImage() {
    setCurrentImageIndex((currentIndex) =>
      currentIndex === images.length - 1 ? 0 : currentIndex + 1
    );
  }

  // Rendu du composant
  return (
    <div className="carrousel">
      <img
        className="carrousel-image"
        src={images[currentImageIndex]}
        alt="Logement"
      />
      {images.length > 1 && (
        <div className="carrousel-navigation">
          <button className="carrousel-button" onClick={previousImage}>
            <ArrowLeft />
          </button>
          <span className="carrousel-counter">{`${currentImageIndex + 1} / ${
            images.length
          }`}</span>
          <button className="carrousel-button" onClick={nextImage}>
            <ArrowRight />
          </button>
        </div>
      )}
    </div>
  );
}

// Exportation du composant Slideshow
export default Slideshow