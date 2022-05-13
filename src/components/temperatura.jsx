import React, {useState} from 'react'

const Temperatura = () => {

    const [temperatura, setTemperatura]= useState(19)

    const Subir = ()=> {
        setTemperatura(temperatura+1)
    }
    const Bajar = ()=> {
        setTemperatura(temperatura-1)
    }

  return (
    <div className="container">
        <h2>La temperatura es: {temperatura}</h2>
        <p> { temperatura > 21 ? 'Hace calor':'Hace fresco'} </p> 
        <button onClick={Subir} className="btn btn-success">Aumentar temperatura</button>
        <button onClick={Bajar} className="btn btn-danger">Reducir temperatura</button>
    </div>
  )
}
export default Temperatura