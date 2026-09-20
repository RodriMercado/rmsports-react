import "./Nav.css";

export const Nav = () => {
    return (
        <nav className="nav">
            <ul>
                <li>
                    <a href="#">Inicio</a>
                </li>
                
                <li>
                    <a href="#">Productos</a>
                </li>
                
                <li>
                    <a href="#">Contacto</a>
                </li>
                
                <li>
                    <a href="#">Carrito</a>
                </li>
            </ul>
        </nav>
    );
}