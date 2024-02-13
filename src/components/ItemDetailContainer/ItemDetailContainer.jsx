import './ItemDetailContainer.css'
import { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import {doc, getDoc} from "firebase/firestore"
import db from "../../db/db"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)
    
    const { id } = useParams()
    
    useEffect(() => {
        const productoRef = doc(db, "productos", id)
        getDoc(productoRef)
        .then((respuesta)=>{
        const productoDb = {id: respuesta.id , ...respuesta.data()}
        setProduct(productoDb)
        })
        .catch(error=>console.log(error))
    }, [id])
    
    return (
        <div className='ItemDetailContainer'>
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer