import './CampoTexto.css'

const CampoText = (props) => {
    return(
        <div className="campo">
            <label className="campo-texto">{props.label}</label>
            <input className="campo-input" placeholder={props.placeholder} required={props.required}/>
        </div>
    )
}

export default CampoText;

