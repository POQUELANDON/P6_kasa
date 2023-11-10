// Importation du logo et du fichier de style
import { ReactComponent as Logo } from '../../assets/LOGO.svg';
import '../Footer/Footer.scss';

// Définition du composant Footer
function Footer() {
    return (
        // Utilisation de la classe 'footer' pour la mise en page du pied de page
        <footer className='footer'>
            <Logo className='footer-logo' alt='Logo_kasa' />
            <h1 className='footer-title'>© 2020 Kasa. All rights reserved</h1>
        </footer>
    )
}

// Export du composant Footer
export default Footer
