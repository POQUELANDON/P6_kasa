import ImgAccueil from '../../assets/BannerAccueil.svg'
function Banner() {
	return (
    <div>
        <img src={ImgAccueil} alt='Image_Accueil' />
        <h1>Chez vous, partout et ailleurs</h1>
    </div>
    )
}

export default Banner