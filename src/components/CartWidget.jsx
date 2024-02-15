import React from 'react'
import './styles.css'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'

const CartWidget = () => {
  const { cantidadTotal } = useContext(CartContext);

  return (
    <Link to="/carrito" className='CartWidget'>
      <span className='CartWidgetIcon'>🛒</span>
      <span className={cantidadTotal() != 0 ? 'CartWidgetCount' : "noDisplayCartWCount"}>{cantidadTotal() != 0 ? cantidadTotal() : ""}</span>
    </Link>
  )
}

export default CartWidget;  