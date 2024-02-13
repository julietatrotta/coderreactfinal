import './Checkout.css'

export const FormCheckout = ({ datosForm, guardarDatosInput, enviarOrden }) => {
    return (
        <form onSubmit={enviarOrden}>
            <label htmlFor='nombre'>Nombre</label>
            <input type="text" id='nombre' name='nombre' value={datosForm.nombre} onChange={guardarDatosInput} />
            <br />
            <label htmlFor="telefono">Telefono:</label>
            <input type="number" id='telefono' name='telefono' value={datosForm.telefono} onChange={guardarDatosInput} />
            <br />
            <label htmlFor="email">email:</label>
            <input type="email" id='email' name='email' value={datosForm.email} onChange={guardarDatosInput} /> {/*el 1er email es por el type, el id es por el htmlFor y 
                el name es por como declaramos el campo en el objeto en la variable de estado */}
            <br />
            <button type='submit'>Confirmar pedido</button>
        </form>
    )
}
