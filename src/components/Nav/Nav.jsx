import { Link } from "react-router-dom";
import "./Nav.css";

export const Nav = () => {
    return (
        <nav className="nav-list">
            <ul>
                <li><Link to={"/"}>Inicio</Link></li>
                <li><Link to={"/cart"}>Carrito</Link> </li>
                <li><Link to={"/contacto"}>Contacto</Link></li>
            </ul>
        </nav>
    );
}