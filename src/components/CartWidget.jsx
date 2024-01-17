import React from 'react'
import './styles.css'

const CartWidget = () => {
    const cantidadItems = 1
    return (
      <div className='CartWidget'>
        <span className='CartWidgetIcon'>🛒</span>
        <span className='CartWidgetCount'>3</span>
      </div>
  )
}

export default CartWidget; 