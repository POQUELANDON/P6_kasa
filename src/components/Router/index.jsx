import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../../pages/Home/';
import About from '../../pages/About/';
import Housing from '../../pages/Housing';
import Error from '../../pages/Error';
import Header from '../Header';
import Footer from '../Footer';
import React from 'react';
import ListeProprietes from '../ListeProprietes';
import { LogementContext } from '../LogementContext';

function AppRouter() {
  return (
    <Router>
      <Header />
      <ListeProprietes url={'/logements.json'}>
        {(logementsData) => (
          <LogementContext.Provider value={logementsData}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/housing/:id" element={<Housing />} />
              <Route path="*" element={<Error />} />
            </Routes>
          </LogementContext.Provider>
        )}
      </ListeProprietes>
      <Footer />
    </Router>
  )
}

export default AppRouter;