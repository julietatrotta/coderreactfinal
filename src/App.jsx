import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  
  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer greetings={"¡Te damos la bienvenida! Vivamos más y mejor"} />}/>
          <Route path='/categoria/:categoria' element={<ItemListContainer greetings={"¡Te damos la bienvenida! Vivamos más y mejor"} />}/>
          <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
          <Route path='*' element={ <h1>Página no encontrada</h1> }/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App