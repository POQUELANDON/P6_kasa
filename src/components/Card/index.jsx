import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../Card/Card.scss';

// Définition du composant Card qui prend en paramètre un objet logement
const Card = ({ logement }) => {
  return (
    // Utilisation du composant Link de react-router-dom pour créer un lien vers la page du logement
    <Link to={`/housing/${logement.id}`} className='card-link'>
      {/* Définition de l'article qui représente une carte de logement */}
      <article className='card'>
        {/* Titre du logement */}
        <h2 className='card-title'>{logement.title}</h2>
        {/* Image de couverture du logement */}
          <img 
            className='card-image' 
            alt={logement.title}
            src={logement.cover}
          />
      </article>
    </Link>
  );
};

// Définition des propTypes pour le composant Card
Card.propTypes = {
  logement: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
  }).isRequired,
};

// Export du composant Card
export default Card;