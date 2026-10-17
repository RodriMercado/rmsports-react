import { useCart } from "../../context/CartContext";
import { Item } from "../Item/Item";
import "./ItemDetail.css";

export const ItemDetail = ( { item } ) => {

    const {addItem} = useCart();
    
    return (
        <div className="detail-wrapper">
            <Item {...item} showProduct={false}>
                <button className="btn-cart" onClick={() => addItem(item)}>Agregar al Carrito</button>
            </Item>
        </div>
    );
}