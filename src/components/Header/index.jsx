import { Link } from 'react-router-dom';
import Logo from '../../assets/LOGO.svg'

function Header() {
    return (
        <div>
        <div>
        <img src={Logo} alt='Logo_kasa' />
        </div>
        <nav>
            <Link to="/">Accueil</Link>
            <Link to="/about">À propos</Link>
        </nav>
        </div>
    )
}

export default Header