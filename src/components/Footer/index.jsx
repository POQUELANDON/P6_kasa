import Logo from '../../assets/LOGO.svg';
import '../../styles/Footer.scss';
 
function Footer() {
    return (
        <footer className='footer'>
            <img src={Logo} alt='Logo_kasa' />
        <div>
            <h1>© 2020 Kasa. All rights reserved</h1>
        </div>
        </footer>
    )
}

export default Footer