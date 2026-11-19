import { db } from "../firebase/config";
import { addDoc,collection, doc, getDoc, getDocs } from "firebase/firestore";

const productsRef = collection(db, "products");

/* ---------------------  TRAER PRODUCTOS --------------------- */

export const getProducts = async () => {
  try {
    const snapshot = await getDocs(productsRef);

    const productsFormat = snapshot.docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
    });

    return productsFormat;
  } catch (error) {
    console.log("Error al traer productos", error);
    throw error;
  }
};

/* ---------------------  TRAER PRODUCTOS POR ID --------------------- */

export const getProductById = async (id) => {
  try {
    // Creamos la referencia al documento
    const productRef = doc(productsRef, id);

    // Traemos el documento:
    const snapshot = await getDoc(productRef);

    // Verificamos si existe
    if (snapshot.exists()) {
      const product = { id: snapshot.id, ...snapshot.data() };
      console.log("Doc:", product);
      return product;
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error al traer producto por ID:", error);
    throw error;
  }
};

/* --------------------- ALTA DE PRODUCTO --------------------- */

export const createProduct = async (productData) => {
  try {
    //Tan facil como usar la funcion addDoc y pasarle la coleccion y el doc a agregar
    const docRef = await addDoc(productsRef, productData);

    return docRef.id; // opcional, por si quieren usar el id para algo
  } catch (error) {
    console.error("Error al crear producto:", error);
    throw error;
  }
};