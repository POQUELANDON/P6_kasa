// Importation des composants nécessaires de react-router-dom
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Importation des composants de page
import Home from '../../pages/Home/';
import About from '../../pages/About/';
import Housing from '../../pages/Housing';
import Error from '../../pages/Error';

// Importation des composants Header et Footer
import Header from '../Header';
import Footer from '../Footer';

// Importation de React
import React from 'react';

// Importation du composant ListeProprietes
import ListeProprietes from '../ListeProprietes';

// Importation du contexte LogementContext
import { LogementContext } from '../LogementContext';

// Définition du composant AppRouter
function AppRouter() {
  return (
    // Utilisation du composant Router pour gérer la navigation
    <Router>
      {/* // Affichage du Header */}
      <Header />
      {/* // Contenu principal de l'application */}
      <main>
        {/* // Utilisation du composant ListeProprietes pour récupérer les données des logements */}
        <ListeProprietes url={'/logements.json'}>
          {/* Fourniture des données des logements au contexte LogementContext */}
          {(logementsData) => (
            <LogementContext.Provider value={logementsData}>
              {/* Définition des routes de l'application */}
              <Routes>
                {/* Route pour la page d'accueil */}
                <Route path="/" element={<Home />} />
                {/* Route pour la page À propos */}
                <Route path="/about" element={<About />} />
                {/* Route pour la page Housing, avec un paramètre d'URL pour l'ID du logement */}
                <Route path="/housing/:id" element={<Housing />} />
                {/* Route pour gérer les URL non reconnues, qui affiche la page d'erreur */}
                <Route path="*" element={<Error />} />
              </Routes>
            </LogementContext.Provider>
          )}
        </ListeProprietes>
      </main>
      {/* // Affichage du Footer */}
      <Footer />
    </Router>
  );
}

// Exportation du composant AppRouter
export default AppRouter;