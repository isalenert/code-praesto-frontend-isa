import Logo from '../assets/Logo.png';

import '../styles/general.css'
import '../styles/navbar.css'

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
                <input className='search-input' placeholder={"Procurar"}/>
                <button className='button login-button'>Entrar</button>
                <button className='button register-button'>Registrar</button>
            </div>
        </header>
    )
}

export default Navbar;