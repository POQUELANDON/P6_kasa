import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Card = ({ logement }) => {
  return (
    <Link to={`/housing/${logement.id}`}>
      <div>
        <h2>{logement.title}</h2>
        <img src={logement.cover} alt={logement.title} />
      </div>
    </Link>
  );
};
Card.propTypes = {
  logement: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
  }).isRequired,
};

export default Card;