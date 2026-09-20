import { Nav } from "../Nav/Nav";
import "./Header.css";
import logo from '../../assets/logo.png'

export const Header = () => {
    return(
        <header className="header">
            <img className="logo" src={logo} alt="" />

            <Nav />
        </header>

    );
}

export default Header;