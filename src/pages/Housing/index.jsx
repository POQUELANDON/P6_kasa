import { useParams, useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { LogementContext } from '../../components/LogementContext';
import Slideshow from '../../components/Slideshow';
import Tag from '../../components/Tag';
import Rating from '../../components/Rating';
import Collapse from '../../components/Collapse';

const Housing = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const logementsData = useContext(LogementContext);
  const [logement, setLogement] = useState(null);

  useEffect(() => {
    // Trouvez le logement avec l'ID correspondant
    const foundLogement = logementsData.find(logement => logement.id === id);

    // Si le logement n'existe pas, redirige vers la page d'erreur
    if (!foundLogement) {
      navigate('/error');
    } else {
      setLogement(foundLogement);
    }
  }, [id, navigate, logementsData]);

  // Si les données de logement ne sont pas encore chargées, affiche un message de chargement
  if (!logement) {
    return <p>Chargement...</p>;
  }

  // Affiche les informations relatives à l'ID
  return (
    <section className="logement">
      <Slideshow images={logement.pictures} />
      <div className="logement-title">
        <div>
          <h2>{logement.title}</h2>
          <p>{logement.location}</p>
        </div>
        <div className="host">
          <p>{logement.host.name}</p>
          <img src={logement.host.picture} alt={logement.host.name}></img>
        </div>
      </div>
      <div className="tags-and-rating">
        <div className="tags-container">
          {logement.tags.map((tag) => (
            <Tag key={tag} tagName={tag} />
          ))}
        </div>
        <Rating rating={logement.rating} />
      </div>
      <div className="logement-collapses">
        <Collapse title="Description" content={logement.description} />
        <Collapse title="Équipements" content={logement.equipments} />
      </div>
    </section>
  );
};

export default Housing