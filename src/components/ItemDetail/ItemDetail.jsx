import { useCart } from "../../context/CartContext";
import { Item } from "../Item/Item";
import "./ItemDetail.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

export const ItemDetail = ( { item } ) => {

    const {addItem} = useCart();
    
    return (
        <div className="detail-wrapper">
            <Item {...item} showProduct={false}>
                <button className="btn-cart" onClick={() => addItem(item)}><FontAwesomeIcon icon={faCartShopping}/> Agregar al Carrito</button>
            </Item>
        </div>
    );
}