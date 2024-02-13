import React, { useEffect, useState } from 'react'
import './ItemListContainer.css'
//import { getProducts, getProductsByCategory } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { collection, getDocs, query, where } from "firebase/firestore"
import db from "../../db/db"

const ItemListContainer = ({ greetings }) => {
  const [products, setProducts] = useState([])

  const { categoria } = useParams()


  useEffect(() => {
    
    let consulta
    let productosRef = collection(db, "productos") //le decimos a que base y a que coleecion apuntar
    
    if(categoria){
    //filtrar data
    consulta = query( productosRef, where("categoria","==", categoria) )
    }else{
    //devolver todo
    consulta= productosRef
    }

    getDocs(consulta)
      .then((respuesta) => {
        let productosDb = respuesta.docs.map((producto) => {
          return { id: producto.id, ...producto.data() }
        })
        setProducts(productosDb
        )
      })
      .catch((error)=>console.log(error))

    // const asyncFunc = categoria ? getProductsByCategory : getProducts
    // asyncFunc(categoria)
    //   .then(response => {
    //     setProducts(response)
    //   })
    //   .catch(error => {
    //     console.error(error)
    //   })
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