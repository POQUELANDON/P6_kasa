import React from 'react';
import Banner from '../../components/Banner';
import CardsList from '../../components/CardsList';
import ImgAccueil from '../../assets/BannerAccueil.svg';
import '../Home/Home.scss';

// Définition du composant Home
function Home() {
  return (
    // Utilisation de la classe 'home' pour la mise en page de la page d'accueil
    <main className='home'>
      <div className='banner-container'>
        <h1 className='banner-title'>Chez vous, partout et ailleurs</h1>
        <Banner imgSrc={ImgAccueil} />
      </div>
      <section className='contenair'>
        <CardsList />
      </section>
    </main>
  )
}

// Export du composant Home
export default Home
