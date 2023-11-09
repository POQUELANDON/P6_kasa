import React from 'react';
import Banner from '../../components/Banner';
import CardsList from '../../components/CardsList';
import ImgAccueil from '../../assets/BannerAccueil.svg';

function Home() {

	return (
      <section>
        <h1>Chez vous, partout et ailleurs</h1>
        <Banner imgSrc={ImgAccueil} />
      <section className='gallery'>
        <CardsList />
      </section>
      </section>
	)
}

export default Home