import logo from '../assets/logo192.png'

function Header() {
    return (
        <header className="header">
            <div className="logo-container">
                <img src={logo} alt="logo" />
            </div>
            <nav className="navigation">
                <ul>
                    <li>About Us</li>
                    <li>Our Work</li>
                    <li>Contact Us</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header