import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { LogementContext } from '../LogementContext';

const ListeProprietes = ({ url='/logements.json', children }) => {
  const [logementsData, setLogementsData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => setLogementsData(data))
      .catch(error => console.error('Erreur:', error));
  }, [url]);

  let proprietes = [];

  logementsData.forEach((logement) => {
    proprietes = [...proprietes, ...Object.keys(logement)];
  });

  const proprietesUniques = [...new Set(proprietes)];

  // Utilise le fournisseur de contexte de logement pour passer les données de logement
  return (
    <LogementContext.Provider value={logementsData}>
      {children(logementsData, proprietesUniques)}
    </LogementContext.Provider>
  );
};

ListeProprietes.propTypes = {
  url: PropTypes.string.isRequired,
  children: PropTypes.func.isRequired,
};

export default ListeProprietes;