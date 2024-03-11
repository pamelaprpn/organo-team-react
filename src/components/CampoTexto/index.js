import { useState } from 'react'
import './CampoTexto.css'

const CampoText = (props) => {

   

    const typed = (evento) => {
        props.changed(evento.target.value)
    }

    return(
        <div className="campo">
            <label className="campo-texto">{props.label}</label>
            <input value={props.valor} onChange={typed} className="campo-input" placeholder={props.placeholder} required={props.required}/>
        </div>
    )
}

export default CampoText;

