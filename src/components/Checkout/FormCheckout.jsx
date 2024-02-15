import './Checkout.css'

export const FormCheckout = ({ datosForm, guardarDatosInput, enviarOrden }) => {
    return (
        <form onSubmit={enviarOrden} className='checkout-form'>
            <label htmlFor='nombre'>Nombre</label>
            <input className='linea-inferior' type="text" id='nombre' name='nombre' value={datosForm.nombre} onChange={guardarDatosInput} />
            <br />
            <label htmlFor="telefono">Telefono:</label>
            <input className='linea-inferior' type="number" id='telefono' name='telefono' value={datosForm.telefono} onChange={guardarDatosInput} />
            <br />
            <label htmlFor="email">Email:</label>
            <input className='linea-inferior' type="email" id='email' name='email' value={datosForm.email} onChange={guardarDatosInput} /> {/*el 1er email es por el type, el id es por el htmlFor y 
                el name es por como declaramos el campo en el objeto en la variable de estado */}
            <br />
            <label htmlFor="repetir-email">Confirme su email:</label>
            <input className='linea-inferior' type="email" id='repetir-email' name='repetirEmail' value={datosForm.repetirEmail} onChange={guardarDatosInput} />
            <br />
            <button className='FormBoton' type='submit'>Confirmar pedido</button>
        </form>
    )
}
