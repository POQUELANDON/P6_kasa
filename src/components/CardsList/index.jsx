// Importation des hooks nécessaires de React
import React, { useContext } from 'react';
// Importation du composant Card
import Card from '../Card';
// Importation du contexte LogementContext
import { LogementContext } from '../LogementContext';
// Importation du fichier de style
import '../CardsList/CardsList.scss';

// Définition du composant CardsList
const CardsList = () => {
  // Utilisation du hook useContext pour accéder aux données des logements
  const logementsData = useContext(LogementContext);

  // Création d'une liste de cartes à partir des données des logements
  const cards = logementsData.map((logement) => (
    // Utilisation du composant Card pour chaque logement
    <Card key={logement.id} logement={logement} />
  ));

  // Rendu de la liste de cartes dans une section avec la classe 'gallery'
  return <section className='gallery'>{cards}</section>;
};

// Exportation du composant CardsList
export default CardsList;