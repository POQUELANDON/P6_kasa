import { useParams, useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { LogementContext } from '../../components/LogementContext';

const Housing = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const logementsData = useContext(LogementContext);
  const [logement, setLogement] = useState(null);

  useEffect(() => {
    // Trouvez le logement avec l'ID correspondant
    const foundLogement = logementsData.find(logement => logement.id === id);

    // Si le logement n'existe pas, redirigez vers la page d'erreur
    if (!foundLogement) {
      navigate('/error');
    } else {
      setLogement(foundLogement);
    }
  }, [id, navigate, logementsData]);

  // Si les données de logement ne sont pas encore chargées, affichez un message de chargement
  if (!logement) {
    return <p>Chargement...</p>;
  }

  // Affichez les informations relatives à l'ID
  return (
    <div>
      {/* Remplacez ceci par la façon dont vous voulez afficher vos données */}
      <h1>{logement.title}</h1>
      <p>{logement.description}</p>
    </div>
  );
};

export default Housing