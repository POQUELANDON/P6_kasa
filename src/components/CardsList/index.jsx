import React from 'react';
import Card from '../Card';
import ListeProprietes from '../ListeProprietes';
import '../CardsList/CardsList.scss';

// Définition du composant CardsList
const CardsList = () => {
  // Fonction qui génère une liste de cartes à partir des données des logements
  const cards = (logementsData) => {
    return (
      // Utilisation de la classe 'gallery' pour la mise en page de la liste de cartes
      <section className='gallery'>
        {/* Génération d'une carte pour chaque logement dans les données */}
        {logementsData.map((logement) => (
          // Utilisation du composant Card pour chaque logement
          <Card key={logement.id} logement={logement} />
        ))}
      </section>
    );
  };

  // Rendu du composant ListeProprietes avec la fonction cards comme enfant
  return <ListeProprietes url={'/logements.json'}>{cards}</ListeProprietes>;
};

// Export du composant CardsList
export default CardsList;