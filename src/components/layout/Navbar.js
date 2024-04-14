// Assets
import Logo from '../../assets/Logo.png';

// Components
import Button from '../Button';
import Input from '../Input';

const Navbar = () => {
    return (
        <header className='flex items-center h-12 justify-between mt-2'>
            <div className='flex items-center'>
                <a href="/"><img src={Logo} alt="Logo" /></a>
                <ul className='flex flex-row items-center mx-6 space-x-6 text-gray-600'>
                    <li className='hover:underline'><a href="/events">Eventos</a></li>
                    <li className='hover:underline'><a href="/popular">Populares</a></li>
                    <li className='hover:underline'><a href="/host">Organizar Evento</a></li>
                    <li className='hover:underline'><a href="/test">Test Page</a></li>
                </ul>
            </div>

            <div className='flex align-center space-x-6'>
                <Input placeholder={"Pesquisar"} />
                <Button buttonType="login" />
                <Button buttonType="register" />
            </div>
        </header>
    )
}

export default Navbar;