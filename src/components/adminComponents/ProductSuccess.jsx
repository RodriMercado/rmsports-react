import { Link, useParams } from "react-router-dom";
import "./ProductSuccess.css";

export const ProductSuccess = () => {
  const { id } = useParams();

  return (
    <section className="success-page">

      <h2>Producto cargado con éxito</h2>

      <p>ID de producto: {id}</p>

      <p>
        Puede cargar otro producto haciendo click en el botón.
      </p>

      <div className="success-actions">
        <Link className="btn bg-success primary" to="/admin/products/new" > → Cargar otro producto</Link>
        <Link className="btn bg-success primary" to="/" >  ← Volver a la tienda </Link>
      </div>

    </section>
  );
};