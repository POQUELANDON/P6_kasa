import { NavLink } from 'react-router-dom';
import '../Error/Error.scss';

function Error() {
    return (
        <section className='error'>
            <h1 className='error-title--h1'>404</h1>
            <h2 className='error-title--h2'>Oups! La page que vous demandez n'existe pas.</h2>
            <NavLink to="/" className='error-nav-home'>Retourner sur la page d’accueil</NavLink>
        </section>
    )
}
 
export default Error