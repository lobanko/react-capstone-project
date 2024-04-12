
import logo from '../assets/Logo.svg'


function Header() {
    return (
        <div className="top">
            <img src={logo} alt="logo"/>
            <nav>
                <ul>
                    <li><a href="/home">Home</a></li>
                    <li><a href="/about">About Us</a></li>
                    <li><a href="/menu">Menu</a></li>
                    <li><a href="/book">Book a table</a></li>
                    <li><a href="/blog">Blog</a></li>
                </ul>
            </nav>
        </div>

    );
}

export default Header;
