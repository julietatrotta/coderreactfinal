import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom';
import './Carrito.css'

const Carrito = () => {
    const { carrito, borrarProducto, borrarTodo } = useContext(CartContext);

    if (carrito.length === 0) {
        return (
            <div className="carrito-container">
                <p>Aún no hay nada en el carrito :(</p>
                <br />
                <p>Agrega experiencias ahora :)</p>
                <br />
                <Link to="/">
                    <h3 className='logo'>Lista de servicios y actividades</h3>
                </Link>
            </div>
        )
    }

    return (
        <div className="carrito-container">
            <h2>Tu selección de experiencias</h2>
            <hr className="linea-separadora" />
            <div className="carrito-items">
                {carrito.map((producto) => (
                    <div key={producto.id} className="carrito-item">
                        <h4>{producto.name}</h4>
                        <p>Cantidad: {producto.cantidad}</p>
                        <p>Precio Unitario: ${producto.price}</p>
                        <p>Total: ${(producto.price * producto.cantidad).toFixed(2)}</p>
                        <button onClick={()=>(borrarProducto(producto.id))}>Eliminar</button>
                        <hr className="linea-separadora" />
                    </div>
                ))}
            </div>
            <div className="total-carrito">
                <h3>Total del Carrito: ${carrito.reduce((total, producto) => total + (producto.price * producto.cantidad), 0).toFixed(2)}</h3>
                <button onClick={borrarTodo}>Vaciar carrito</button>
                <br />
                <Link to="/checkout">Finalizar compra</Link>
            </div>
        </div>
    );
};

export default Carrito