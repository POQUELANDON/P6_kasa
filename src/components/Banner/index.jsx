import React from 'react';
import PropTypes from 'prop-types';
import '../Banner/Banner.scss';

// Définition du composant Banner qui prend en paramètre une image source
function Banner({ imgSrc }) {
    return (
        <div className='banner'> 
          <img 
            className='banner_img' 
            alt='Banner' 
            src={imgSrc}
          />
        </div>
    );
};

// Définition des propTypes pour le composant Banner
Banner.propTypes = {
    imgSrc: PropTypes.string.isRequired,
};

// Export du composant Banner
export default Banner;