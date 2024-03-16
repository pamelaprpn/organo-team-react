import './ListaSuspensa.css'


const ListaSuspensa = (props) => {
    

    return(
        <div className='lista-suspensa'>
            <label className='lista-suspensa__texto'>{props.label}</label>
            
            <select onChange={evento => props.changed(evento.target.value)} className='lista-supensa__lista' required={props.required} value={props.valor}>
                <option selected hidden >Selecione sua trilha</option> 
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                })}  
            </select>
        </div>
    )
}

export default ListaSuspensa;