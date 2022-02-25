import './style.css'
import logo from '../../assets/img/logoneoland.png'
function Header() {

    return(
        <header className="header-container">
            <img src={logo} alt="logo Neoland"></img>
            <div className='version-container'>
                <h5>Version 1.4</h5>
            </div>
        </header>
    )
    
}

export default Header;