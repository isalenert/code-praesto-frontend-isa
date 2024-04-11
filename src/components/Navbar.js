// Assets
import Logo from '../assets/Logo.png';

// Stylesheets
import '../styles/Navbar.css'

import Button from '../components/Button';

const Navbar = () => {
    return (
        <header className='flex'>
            <div className='navigation'>
                <img src={Logo} alt="Logo" />
                <ul>
                    <li><a href="">Eventos</a></li>
                    <li><a href="">Populares</a></li>
                    <li><a href="">Organizar Evento</a></li>
                </ul>
            </div>

            <div className='container'>
                <input className='search-input' placeholder={"Procurar"} />
                <Button buttonType="login" />
                <Button buttonType="register" />
            </div>
        </header>
    )
}

export default Navbar;