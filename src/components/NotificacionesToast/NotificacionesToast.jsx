import { toast } from "react-toastify";

/* Productos */

export const toastSuccess = () =>
  toast.success("Producto agregado al carrito");

export const toastError = () =>
  toast.error("El producto ya existe en el carrito");


/* Carrito */

export const toastRemove = () => 
  toast.success("El producto ha sido eliminado correctamente");

export const toastCheckout = () =>
  toast.success("¡Compra realizada con éxito! Gracias por tu compra.");

/* Login */

export const toastWarning = () =>
  toast.warning("Revisa los datos antes de continuar.");