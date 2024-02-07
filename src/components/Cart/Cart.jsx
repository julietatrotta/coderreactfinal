import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const Cart = () => {
  const { carrito, hola } = useContext(CartContext);
  console.log("el carrito en el componente cart" + carrito) //me llega vacío :( acá me quedé, final clase de context
  console.log(hola)
  return (
    <div>
      <ul>
        {carrito.map((producto) => (
          <li key={producto.id}>
            <p>{producto.nombre}</p>
            <p>{producto.nombre}</p>
          </li>
        ))}
        <li>El resto de la lista</li>
      </ul>
    </div>
  );
};

export default Cart