import { Link } from "react-router-dom";
import "./Nav.css";
import { useCart } from "../../context/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faHouse, faEnvelope} from "@fortawesome/free-solid-svg-icons";

export const Nav = () => {

    const {getTotalItems} = useCart();
    const totalItems = getTotalItems();
    
    return (
        <nav className="nav-list">
            <ul>
                <li><Link to={"/"}>Inicio</Link></li>
                <li><Link to={"/contacto"}>Contacto</Link></li>
                <li><Link to={"/cart"}>
                   <FontAwesomeIcon icon={faCartShopping}/> Carrito
                    { totalItems > 0 && <span className="incart">{totalItems}</span> }
                </Link> </li>
            </ul>
        </nav>
    );
}