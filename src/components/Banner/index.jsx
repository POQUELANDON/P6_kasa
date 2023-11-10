import React from 'react';
import PropTypes from 'prop-types';
import '../Banner/Banner.scss';

// Définition du composant Banner qui prend en paramètre une image source
function Banner({ imgSrc }) {
    return (
        // Utilisation de la classe 'banner' pour la mise en page de la bannière
        <div className='banner'> 
          <div 
            // Utilisation de la classe 'banner_img' pour la mise en page de l'image de la bannière
            className='banner_img' 
            alt='Banner' 
            style={{ 
              // Utilisation de l'image source comme image de fond
              backgroundImage: `url(${imgSrc})`,
              // Redimensionnement de l'image de fond pour couvrir entièrement la bannière
              backgroundSize: 'cover',
              // Centrage de l'image de fond dans la bannière
              backgroundPosition: 'center', 
              // Application d'un filtre de luminosité à 50% à l'image de fond
              filter: 'brightness(70%)'
            }}
          />
        </div>
    );
}

// Définition des propTypes pour le composant Banner
Banner.propTypes = {
    imgSrc: PropTypes.string.isRequired,
};

// Export du composant Banner
export default Banner;