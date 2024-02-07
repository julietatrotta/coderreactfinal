import React, { useState } from 'react'
import './ItemCount.css'

const ItemCount = ({ stock, initial, onAdd }) => {
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1)
        }
    }

    const decrement = () => {
        if (quantity >= 1) {
            setQuantity(quantity - 1)
        }
    }

    return (
        <div className="Counter">
            <div className="ContadorControls">
                <button className="ContadorBoton" onClick={decrement}> - </button>
                <h4 className="ContadorNumber">{quantity}</h4>
                <button className="ContadorBoton" onClick={increment}> + </button>
            </div>
            <div className='BotonAgregar'>
                <button className="ContadorBoton" onClick={() => onAdd(quantity)} disabled={!stock} >
                    Agregar al carrito
                </button>
            </div>
        </div>
    )
}

export default ItemCount