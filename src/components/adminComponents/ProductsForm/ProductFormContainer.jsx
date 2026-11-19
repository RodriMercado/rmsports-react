
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProductFormUI } from "./ProductFormUI";
import { validateProduct } from "../../../utils/validateProduct";
import { uploadImage } from "../../../services/uploadImage";
import { createProduct } from "../../../services/productsService";
import "./ProductFormContainer.css";

export const ProductFormContainer = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [file, setFile] = useState(null);

  const [product, setProduct] = useState({
    name: "",
    price: "",
    description: "",
  });

  // Actualizar los campos del producto
  const handleChange = (e) => {
    const { name, value } = e.target;

    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));

    // Limpiar el error del campo al modificarlo
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  // Seleccionar imagen
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0] || null;

    setFile(selectedFile);

    setErrors((prevErrors) => ({
      ...prevErrors,
      file: "",
    }));
  };

  // Enviar formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    setErrors({});
    setLoading(true);

    // Validar datos
    const newErrors = validateProduct({
      ...product,
      file,
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setLoading(false);
      return;
    }

    try {
      // Subir imagen
      const imageUrl = await uploadImage(file);

      // Preparar datos del producto
      const productData = {
        ...product,
        price: Number(product.price),
        image: imageUrl,
      };

      // Crear producto
      const id = await createProduct(productData);

      // Limpiar formulario
      setProduct({
        name: "",
        price: "",
        description: "",
      });

      setFile(null);

      // Redireccionar a página de éxito
      navigate(`/admin/products/success/${id}`, {
        replace: true,
      });

    } catch (error) {
      setErrors({
        general:
          error.message ||
          "Ocurrió un error al guardar el producto.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <ProductFormUI
      product={product}
      errors={errors}
      loading={loading}
      onChange={handleChange}
      onFileChange={handleFileChange}
      onSubmit={handleSubmit}
    />
  );
};
