// Importation des hooks nécessaires de React
import { useEffect, useState } from 'react';
// Importation de PropTypes pour la vérification des types de props
import PropTypes from 'prop-types';
// Importation du contexte LogementContext
import { LogementContext } from '../LogementContext';

// Définition du composant ListeProprietes
// Il prend deux props : 'url' pour l'URL à partir de laquelle récupérer les données de logement, et 'children' qui est une fonction à exécuter avec les données de logement
const ListeProprietes = ({ url, children }) => {
  // Utilisation du hook useState pour définir l'état local des données de logement
  const [logementsData, setLogementsData] = useState([]);

  // Utilisation du hook useEffect pour effectuer des actions après le rendu du composant
  useEffect(() => {
    // Effectuer une requête fetch pour obtenir les données de logement
    fetch(url)
      .then(response => response.json()) // Convertir la réponse en JSON
      .then(data => setLogementsData(data)) // Mettre à jour l'état des données de logement avec les données récupérées
      .catch(error => console.error('Erreur:', error)); // En cas d'erreur, afficher l'erreur dans la console
  }, [url]); // Le tableau contient 'url', donc useEffect s'exécutera chaque fois que 'url' change

  let proprietes = [];

  // Pour chaque logement dans les données de logement, ajouter les clés de l'objet logement à la liste des propriétés
  logementsData.forEach((logement) => {
    proprietes = [...proprietes, ...Object.keys(logement)];
  });

  // Créer un nouvel ensemble à partir de la liste des propriétés pour éliminer les doublons, puis convertir cet ensemble en tableau
  const proprietesUniques = [...new Set(proprietes)];

  // Utilise le fournisseur de contexte de logement pour passer les données de logement
  return (
    <LogementContext.Provider value={logementsData}>
      {/* Exécute la fonction 'children' avec les données de logement et les propriétés uniques comme arguments */}
      {children(logementsData, proprietesUniques)}
    </LogementContext.Provider>
  );
};

// Définition des types de props pour le composant ListeProprietes
ListeProprietes.propTypes = {
  url: PropTypes.string.isRequired, // 'url' doit être une chaîne de caractères et est requise
  children: PropTypes.func.isRequired, // 'children' doit être une fonction et est requise
};

// Exportation du composant ListeProprietes pour qu'il puisse être utilisé dans d'autres fichiers
export default ListeProprietes;