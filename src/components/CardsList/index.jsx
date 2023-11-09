import React from 'react';
import Card from '../Card';
import ListeProprietes from '../ListeProprietes';

const CardsList = ({ url='/logements.json' }) => {
  const cards = (logementsData) => {
    return (
      <div>
        {logementsData.map((logement) => (
          <Card key={logement.id} logement={logement} />
        ))}
      </div>
    );
  };

  return <ListeProprietes url={'/logements.json'}>{cards}</ListeProprietes>;
};

export default CardsList;