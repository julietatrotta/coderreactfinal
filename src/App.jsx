import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import Carrito from './components/Carrito/Carrito'
import Checkout from './components/Checkout/Checkout'

function App() {
  
  return (
    <>
      <BrowserRouter>
        <CartProvider> {/* envolvemos componentes con nuestro contexto  */}
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer greetings={"¡Te damos la bienvenida! Vivamos más y mejor"} />} />
            <Route path='/categoria/:categoria' element={<ItemListContainer greetings={"¡Te damos la bienvenida! Vivamos más y mejor"} />} />
            <Route path='/item/:id' element={<ItemDetailContainer />} />
            <Route path='/carrito' element={<Carrito />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='*' element={<h1>Página no encontrada</h1>} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </>
  )
}

export default App