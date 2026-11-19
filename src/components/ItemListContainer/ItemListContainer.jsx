import { useEffect, useState } from "react"
import { ItemList } from "../ItemList/ItemList";
import { getProducts } from "../../services/productsService";

export const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [errors, setErrors] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        
        getProducts()
        
        .then((data) => setProducts(data))
        .catch((error) => setErrors(error.message))
        .finally(() => setLoading(false));

    }, []);

    if(loading) return <p>Cargando...</p>;
    if(errors) return <p>{errors}</p>

    return <section>
        <h2>Productos</h2>
        <ItemList products={products} />
    </section>
}