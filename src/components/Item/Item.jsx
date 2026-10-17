import "./Item.css"
import { Link } from "react-router-dom";

export const Item = ({id,name, price, description, image, children, showProduct=true}) => {
    return(
        <article className="card">
            <img src={image} />
            <h3>{name}</h3>
            <p>{description}</p>
            <p>${price}</p>

            {showProduct && (
                <Link to={`/product/${id}`} className="showProduct">
                    Ver producto → 
                </Link>

            )}


            {children}
        </article>
    )
}; 