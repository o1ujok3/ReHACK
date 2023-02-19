import {NavLink} from 'react-router-dom';
import logo from '../images/rehack-logo.png'

function Header(){
    return (
        <header>
          <nav className='navBar'>
            <div className='navBarLogo'>
            <img className='logo' src={logo} alt="Logo" />
            </div>
            <div className='navBarPages'>
            <NavLink className='link' to='/'>Home</NavLink>
            <NavLink className='link' to='/contact'>Contact</NavLink>
            </div>
          </nav>  
        </header>
    )
}


export default Header;