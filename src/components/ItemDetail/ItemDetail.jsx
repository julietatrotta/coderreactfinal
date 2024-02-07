import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'

const ItemDetail = ({ id, name, img, price, vacantes, categoria, description }) => {

    const [toggle, setToggle] = useState(false)
    const {agregarProducto} = useContext(CartContext)
    
    const añadirProducto = (quantity) => {
        setToggle(true)
        const productoCarrito = { id: id, name: name, img: img, price: price, vacantes: vacantes, categoria: categoria, description: description, cantidad: quantity }
        agregarProducto(productoCarrito)
    };



    return (
        <article className='containerdetail'>
            <header className=''>
                <h2 className=''>
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className='' />
            </picture>
            <section>
                <p className='Info'>
                    Categoria: {categoria}
                </p>
                <p className='Info'>
                    Descripción: {description}
                </p>
                <p>
                    Precio: ${price}
                </p>
                <p>
                    Vacantes: {vacantes}
                </p>
            </section>
            <footer className='ItemFooter'>
                {
                    toggle ? (
                        <Link className="ContadorBoton" to="/carrito">Ir al carrito</Link>
                    ) : (
                        <ItemCount initial={1} stock={vacantes} onAdd={añadirProducto} />
                    )
                }
            </footer>
        </article>
    )
}

export default ItemDetail