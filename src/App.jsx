import './App.css'
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { Routes, Route} from 'react-router-dom'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'
import { FormContainer } from './components/FormContainer/FormContainer'
import { CartView } from './components/Cart/CartView'

function App() {

  return (
    <>
    
    <Header />
    <main>
      <hr className='line-color'/>
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/cart" element={<CartView />} />
        <Route path="/contacto" element={<FormContainer />} />
        <Route path="/product/:id" element={<ItemDetailContainer />} />
      </Routes>

    </main>
    <Footer />

    </>
  )
}

export default App
