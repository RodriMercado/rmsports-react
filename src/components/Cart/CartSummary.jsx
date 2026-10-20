import { useCart } from "../../context/CartContext";


export const CartSummary = () => {
    const{ getCartTotal, checkout, clearCart} = useCart();
    const total = getCartTotal();

    return <>
    <hr className="line-color" />
        <p className="total">Total a pagar: ${total} </p>
        <button className="btn bg-sucess" onClick={checkout}>Finalizar compra</button>
        <button className="btn bg-delete" onClick={clearCart}>Limpiar carrito</button>
    </>
};