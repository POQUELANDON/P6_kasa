import { NavLink } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/LOGO.svg';
import '../Header/Header.scss';

function Header() {
    return (
        <header className='navbar'>
            <Logo alt='Logo_kasa' className='logo'/>
        <nav className='navbar_link'>
            <NavLink to="/" className={({ isActive }) => isActive ? 'active-link' : ''}>Accueil</NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? 'active-link' : ''}>A Propos</NavLink>
        </nav>
        </header>
    )
}

export default Header;