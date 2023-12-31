// Importation des hooks nécessaires de react-router-dom et react
import { useParams, useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';

// Importation des composants personnalisés et du contexte
import { LogementContext } from '../../components/LogementContext';
import Slideshow from '../../components/Slideshow';
import Tag from '../../components/Tag';
import Rating from '../../components/Rating';
import Collapse from '../../components/Collapse';

// Importation du fichier de style
import '../Housing/Housing.scss'

// Définition du composant Housing
const Housing = () => {
  // Utilisation du hook useParams pour récupérer l'ID du logement depuis l'URL
  const { id } = useParams();

  // Utilisation du hook useNavigate pour la navigation
  const navigate = useNavigate();

  // Utilisation du contexte pour accéder aux données des logements
  const logementsData = useContext(LogementContext);
  
  // Définition de l'état local pour le logement
  const [logement, setLogement] = useState(null);
  
  // Utilisation du hook useEffect pour effectuer des actions après le rendu du composant
useEffect(() => {
  // Trouver le logement avec l'ID correspondant
  const foundLogement = logementsData.find(logement => logement.id === id);
  
  // Si les données de logement ne sont pas encore chargées, ne rien faire
  if (logementsData.length === 0) {
    return;
  }

  // Si le logement n'existe pas, rediriger vers la page d'erreur
  else if (!foundLogement) {
    navigate('/error');
    console.log('le logement n\'existe pas');
  } else {
    // Sinon, mettre à jour l'état du logement
    setLogement(foundLogement);
    console.log(foundLogement);
  }
}, [id, navigate, logementsData]);
  
  // Si les données du logement ne sont pas encore chargées, afficher un message de chargement
  if (!logement) {
    return <p>Chargement...</p>;
  }
  
  const [firstName, lastName] = logement.host.name.split(' ');
  // Afficher les informations relatives au logement
  return (
    <section className="logement">
      <Slideshow images={logement.pictures} alt={logement.title} />
      <div className='logement-container'>
        <article className='logement-title'>
          <h1 className='logement-title--h1'>{logement.title}</h1>
          <h2 className='logement-title--h2'>{logement.location}</h2>
          <div className="tags-container">
          {logement.tags.map((tag) => (
            <Tag key={tag} tagName={tag} className='tag-name'/>
          ))}
        </div>
        </article>
        <div className='host-and-rating'>
        <section className='host'>
        <h3 className='host-name'>
          <span>{firstName}</span>
          <br />
          <span>{lastName}</span>
        </h3>
          <img src={logement.host.picture} alt={logement.host.name}></img>
        </section>
        <Rating rating={logement.rating} />
      </div>
      </div>
      <div className='logement-collapses'>
        <Collapse title='Description' content={logement.description} />
        <Collapse title='Équipements' content={logement.equipments} />
      </div>
    </section>
  );
};

// Exportation du composant Housing
export default Housing