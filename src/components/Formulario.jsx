import React, { useState } from 'react'

const Formulario = () => {

    const [nombre, SetNombre] = useState("");
    const [edad, setEdad] = useState("");
    const Validar = (event) => {
        event.preventDefault();
        /* console.log("dandole al puto boton") */

        if (!nombre.trim()) {
            console.log("El nombre esta vacio")
            return
        }
        if (!edad.trim()) {
            console.log("no ha introducido la edad")
            return
        }
    }
    return (
        <div className='container'>
            <form onSubmit={Validar} className='form-group'>
                <input type="text" name="" id="" className="form-control mb-2" placeholder="Introducce el nombre"  onChange={(e)=>{SetNombre(e.target.value)}}/>
                <input type="text" name="" id="" className="form-control mb-2" placeholder="Introducce la edad" onChange={(e)=>{setEdad(e.target.value)}}/>
                <input type="submit" value="Enviar" className="form-control mb-2 btn btn-info" />
            </form>
        </div>
    )
}

export default Formulario