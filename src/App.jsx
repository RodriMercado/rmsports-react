import './App.css'

import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { Routes, Route, Navigate } from 'react-router-dom'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'
import { FormContainer } from './components/FormContainer/FormContainer'
import { CartView } from './components/Cart/CartView'
import { ProductFormContainer } from './components/adminComponents/ProductsForm/ProductFormContainer'
import { ProductSuccess } from './components/adminComponents/ProductSuccess'
import { Dashboard } from "./components/adminComponents/Dashboard/Dashboard"
import { PublicLayout } from './layouts/PublicLayout'
import { AdminLayout } from './layouts/AdminLayout'
import { Login } from './components/Login/Login'
import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute'
import { ToastContainer } from 'react-toastify'

function App() {

  return (
    <>
        <ToastContainer position="top-right" autoClose={3000} />
        <Routes>
          {/* RUTAS PÚBLICAS */}
          <Route element={<PublicLayout/>}>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/cart" element={<CartView />} />
          <Route path="/contacto" element={<FormContainer />} />
          <Route path="/product/:id" element={<ItemDetailContainer />} />
        </Route>


          <Route path="/admin/login" element={<Login />} />
          {/* RUTAS ADMIN */}
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminLayout />
              </ProtectedRoute>
            }
          >
              <Route index element={<Navigate to={"dashboard"} />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="products/new" element={<ProductFormContainer />} />
              <Route path="products/success/:id" element={<ProductSuccess />} />
          </Route>

        </Routes>

    </>
  )
}

export default App
