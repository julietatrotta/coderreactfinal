import React from 'react'
import './styles.css'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'

const CartWidget = () => {
    const { cantidadTotal } = useContext(CartContext);
    
    const cantidadItems = 1
    return (
      <Link to="/carrito" className='CartWidget'>
        <span className='CartWidgetIcon'>🛒</span>
        <span className='CartWidgetCount'>{cantidadTotal()}</span>
      </Link>
  )
}

export default CartWidget; 