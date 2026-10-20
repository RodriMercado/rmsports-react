import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { CartList } from "./CartList";
import { CartSummary } from "./CartSummary";
import "./Cart.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

export const CartView = () => {
    const { cart } = useCart();


    return <section className="cart-container">
        <h2>Carrito de compras</h2>

        {cart.length ? (
            <> 
                <CartList /> 
                <CartSummary />
            </> 
        ) : (
            <>
                <p className="empty-cart">El carrito esta vacio.</p>
                <Link className="backHome" to={"/"}>
                   ← Volver al inicio
                </Link>
            
            </>
        ) }

    </section>
};
