import { createContext, useState } from "react";
import React from 'react'


//Creamos un contexto de react llamado cartContext
const CartContext = createContext()

const CartProvider = ({ children }) => {
    //lo inicializo como array vacio porque va a ser un array de objetos, cada objeto es un producto agregado
    const [carrito, setCarrito] = useState([])
    
    const agregarProducto = (porductoNuevo) => {
        const condicion = estaEnElCarrito(porductoNuevo.id)
        
        if (condicion) {
            //cambiamos la cantidad si ya esta en el carrito
            const productosModificados = carrito.map((productoCarrito) => {
                if (productoCarrito.id === porductoNuevo.id) {
                    return { ...productoCarrito, cantidad: (productoCarrito.cantidad + porductoNuevo.cantidad) }
                } else {
                    return productoCarrito
                }
            })
            setCarrito(productosModificados)
        } else {
            //si no esta el producto, lo agregamos al carrito
            setCarrito([...carrito, porductoNuevo])
        }
    }

    const estaEnElCarrito = (id) => {
        const respuesta = carrito.some(producto => producto.id === id)
        return respuesta
    }

    const cantidadTotal = () => {
        const cantidad = carrito.reduce((total, producto) => total + producto.cantidad, 0) //el cero es el valor inicial de total
        return cantidad
    }
    
    const borrarProducto = (idProducto) => {
        const productosFiltrados = carrito.filter((producto)=> producto.id !== idProducto)
        setCarrito(productosFiltrados)

    }
    
    const borrarTodo = () => {
        setCarrito([])
    }
    
    const precioTotal = ()=>{//cuando usaba esta funcion me devolvia NaN así que dejé el calculo en el carrito directamente porque funciona.
        return carrito.reduce((total, producto) => total + (parseInt(producto.cantidad) * parseFloat(producto.precio)), 0)
    }
    
    return (
        //Las primeras llaves de value son para incluir codigo javascript, las 2das para pasar la variable (objeto).
        //Le pasamos todas las variable y funciones que declaremos para que esten disponibles de forma global, si no no lo vamos a poder usar
        // Todo lo que pasemos dentro de value es lo que va a estar disponible dentro de mi contexto
        <CartContext.Provider value={{ carrito, agregarProducto, cantidadTotal, borrarTodo, precioTotal, borrarProducto }}>
            {children}
        </CartContext.Provider>
    )
}

export { CartProvider, CartContext }