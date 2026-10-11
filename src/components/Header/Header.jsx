import { Nav } from "../Nav/Nav";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from '../../assets/logo.png'

export const Header = () => {
    return(
        <header className="header">
            <Link to={"/"}> <img className="logo" src={logo} alt="Logo RM-Sports" /></Link>

            <Nav />
        </header>

    );
}

export default Header;