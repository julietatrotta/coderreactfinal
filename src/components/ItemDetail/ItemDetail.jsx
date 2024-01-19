import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({id, name, img, price, vacantes, categoria, description,}) => {
    return (
        <article className=''>
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
            <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('Cantidad agregada: ', quantity)} />
            </footer>
        </article>
    )
}

export default ItemDetail