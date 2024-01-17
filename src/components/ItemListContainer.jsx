import React, { useEffect, useState } from 'react'
import './styles.css'
import { getProducts, getProductsByCategory } from '../asyncMock'
import ItemList from './ItemList/ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = ({ greetings }) => {
  const [products, setProducts] = useState([])
  
  const {categoria} = useParams()

  useEffect(() => {
    const asyncFunc = categoria? getProductsByCategory : getProducts

    asyncFunc(categoria)
      .then(response => {
        setProducts(response)
      })
      .catch(error => {
        console.error(error)
      })
  }, [categoria])
  
  return (
    <div>
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