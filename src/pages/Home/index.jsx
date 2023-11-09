import React from 'react';
import Banner from '../../components/Banner';
import CardsList from '../../components/CardsList';
import ImgAccueil from '../../assets/BannerAccueil.svg';
import '../../styles/Home.scss';

function Home() {
  return (
    <section className='home'>
      <div className='banner-container'>
        <h1 className='banner-title'>Chez vous, partout et ailleurs</h1>
        <Banner imgSrc={ImgAccueil} />
      </div>
      <section className='gallery'>
        <CardsList />
      </section>
    </section>
  )
}

export default Home