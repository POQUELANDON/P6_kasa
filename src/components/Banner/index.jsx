import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/Banner.scss';

function Banner({ imgSrc }) {
    return (
        <div className='banner'>
            <img className='banner_img' src={imgSrc} alt='Banner' />
        </div>
    );
}

Banner.propTypes = {
    imgSrc: PropTypes.string.isRequired,
};

export default Banner;