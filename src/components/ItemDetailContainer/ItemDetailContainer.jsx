import './ItemDetailContainer.css'
import { useState, useEffect } from 'react'
import { getProducts, getProductById } from '../../asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'



const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)

    const { id } = useParams()

    useEffect(() => {
        getProductById(id)
            .then(response => {
                setProduct(response)
            })
            .catch(error => {
                console.error(error);
            })
    }, [id])

    return (
        <div className='ItemDetailContainer'>
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer