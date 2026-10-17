import "./Footer.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faCartShopping, faHouse, faEnvelope} from "@fortawesome/free-solid-svg-icons";

export const Footer = () => {
    return (
        <footer>
            <div className="footer-list">
                <div>
                    <h2 className="title-footer">Sobre nosotros</h2>
                    <p className="text-footer">Somos una tienda especializada en productos deportivos, dedicada a ofrecer calzado, botines y artículos seleccionados para acompañarte en cada desafío.</p>
                    </div>
                <div>
                    <h2 className="title-footer">Explorá RMSports</h2>
                    <nav className="nav-list">
                        <li><Link to={"/"}><FontAwesomeIcon icon={faHouse}/> Inicio</Link></li>
                        <li><Link to={"/contacto"}><FontAwesomeIcon icon={faEnvelope}/> Contacto</Link></li>
                    </nav>
                </div>
                <div>
                    <h2 className="title-footer">Nuestras redes</h2>
                    
                    <nav className="nav-list">
                            <li><Link to={"/"}><FontAwesomeIcon icon={faFacebook} /> Facebook</Link></li>
                            <li><Link to={"/"}><FontAwesomeIcon icon={faInstagram} /> Instagram</Link></li>
                            <li><Link to={"/"}><FontAwesomeIcon icon={faWhatsapp} /> Whatsapp</Link></li>
                        </nav>
                        
                </div>
            </div>
            <div className="copyright-list">
                <hr className='line-color'/>
                <p className="text-copyright">&copy; 2026 RMSports - Proyecto para TalentoTech</p>
            </div>
        </footer>
    );
}

export default Footer;
