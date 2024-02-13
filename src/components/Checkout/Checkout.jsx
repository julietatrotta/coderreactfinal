import { useContext, useState } from 'react'
import { FormCheckout } from './FormCheckout'
import { CartContext } from '../../context/CartContext'
import './Checkout.css'
import { collection, addDoc } from "firebase/firestore"
import db from "../../db/db"

const Checkout = () => {
    const [datosForm, setDatosForm] = useState({
        nombre: "",
        telefono: "",
        email: "",
    })
    
    const { carrito, precioTotal } = useContext(CartContext)
    
    // el valor event llega por defecto aunque no se lo enviemos al llamar a la funcion
    const guardarDatosInput = (event) => {
        setDatosForm({ ...datosForm, [event.target.name]: event.target.value }) //los corchetes son para declarar el valor de forma dinamica
    }
    
    const enviarOrden= (event)=>{
        event.preventDefault()
        //le damos formato a la orden
        const orden = {
            comprador: {...datosForm},
            productos: [...carrito],
            total: precioTotal()
        }
        //subir orden a firebase
        const ordenesRef = collection(db, "ordenes")
        addDoc(ordenesRef, orden)
        .then((respuesta)=>(
        console.log(respuesta)
        ))
        .catch(error=>console.log(error))
    }
    
    return (
        <div className='containerForm'>
            <FormCheckout datosForm={datosForm} guardarDatosInput={guardarDatosInput} enviarOrden={enviarOrden}/>
        </div>
    )
}

export default Checkout