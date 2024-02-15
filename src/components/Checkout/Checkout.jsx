import { useContext, useState } from 'react'
import { FormCheckout } from './FormCheckout'
import { CartContext } from '../../context/CartContext'
import './Checkout.css'
import { collection, addDoc } from "firebase/firestore"
import db from "../../db/db"
import Swal from 'sweetalert2'

const Checkout = () => {
    const [datosForm, setDatosForm] = useState({
        nombre: "",
        telefono: "",
        email: "",
        repetirEmail: ""
    })

    const { carrito, precioTotal, borrarTodo } = useContext(CartContext)
    const [idOrden, setIdOrden] = useState(null)

    // el valor event llega por defecto aunque no se lo enviemos al llamar a la funcion
    const guardarDatosInput = (event) => {
        setDatosForm({ ...datosForm, [event.target.name]: event.target.value }) //los corchetes son para declarar el valor de forma dinamica
    }

    const enviarOrden = (event) => {
        event.preventDefault()
        //le damos formato a la orden
        const orden = {
            comprador: { ...datosForm },
            productos: [...carrito],
            fecha: Date.now,
            total: precioTotal()
        }

        //comparamos para que los emails sean iguales
        if (datosForm.email !== datosForm.repetirEmail) {
            Swal.fire({
                title: "Error en los datos",
                text: "Los emails deben ser iguales",
                icon: "error"
            });

            return
        }

        //subir orden a firebase
        const ordenesRef = collection(db, "ordenes")
        addDoc(ordenesRef, orden)
            .then((respuesta) => {
                //borramos los datos de los inputs
                setDatosForm({
                    nombre: "",
                    telefono: "",
                    email: "",
                })

                //guardamos el id de la orden en una variable de estado
                setIdOrden(respuesta.id)

                //vacio el carrito
                borrarTodo()
            })
            .catch(error => console.log(error))
    }

    return (
        <div className='containerForm'>
            {
                idOrden ? (
                    <div>
                        <h2>¡Orden creada con éxito!</h2>
                        <p>Guarde el id de su orden: {idOrden}</p>
                    </div>
                ) : (
                    <FormCheckout datosForm={datosForm} guardarDatosInput={guardarDatosInput} enviarOrden={enviarOrden} />

                )}
        </div>
    )
}

export default Checkout