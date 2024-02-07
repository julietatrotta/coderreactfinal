import React, { useEffect, useState } from 'react'
import './ItemListContainer.css'
import { getProducts, getProductsByCategory } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = ({ greetings }) => {
  const [products, setProducts] = useState([])
  
  const { categoria } = useParams()
  
  useEffect(() => {
    const asyncFunc = categoria ? getProductsByCategory : getProducts
    
    asyncFunc(categoria)
      .then(response => {
        setProducts(response)
      })
      .catch(error => {
        console.error(error)
      })
     // .finally(() => console.log("Finalizada la promesa de filtrar por categoria"))
  }, [categoria])
  
  return (
    <div className='ItemListContainer'>
      <div>
        <h3 className='greeting'>{greetings}</h3>
      </div>
      <div className='containerItemList'>
        <ItemList products={products} />
      </div>
    </div>
  )
}

export default ItemListContainer