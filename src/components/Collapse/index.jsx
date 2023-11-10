// Importation de React et du hook useState
import React, { useState } from 'react';
// Importation de l'icône de flèche
import { ReactComponent as ChevronUp } from '../../assets/ChevronUp.svg';
import '../Collapse/Collapse.scss';

// Définition du composant Collapse qui prend en paramètre un titre et un contenu
function Collapse({ title, content }) {
  // Utilisation du hook useState pour gérer l'état d'ouverture/fermeture du composant
  const [isOpen, setIsOpen] = useState(false);

  return (
    // Utilisation de la classe 'collapse' pour la mise en page du composant
    <div className="collapse">
      {/* Bouton qui change l'état d'ouverture/fermeture du composant lorsqu'il est cliqué */}
      {/* Ajout de l'icône de flèche qui tourne lorsque le composant est ouvert */}
      <button onClick={() => setIsOpen(!isOpen)} className="collapse-button">
        {title}
        <ChevronUp className={`collapse-icon ${isOpen ? 'rotate' : ''}`} />
      </button>
      {/* Le contenu du composant est affiché seulement si le composant est ouvert */}
      {isOpen && (
        // Utilisation de la classe 'collapse-content' pour la mise en page du contenu
        <div className="collapse-content">
          {/* Si le contenu est un tableau, il est affiché sous forme de liste */}
          {Array.isArray(content) ? (
            <ul>
              {content.map((item, index) => (
                // Chaque élément du tableau est affiché dans un élément de liste
                <li key={index}>{item}</li>
              ))}
            </ul>
          ) : (
            // Si le contenu n'est pas un tableau, il est affiché tel quel
            <p>{content}</p>
          )}
        </div>
      )}
    </div>
  );
}

// Export du composant Collapse
export default Collapse;