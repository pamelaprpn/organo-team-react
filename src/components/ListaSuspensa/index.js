import './ListaSuspensa.css'


const ListaSuspensa = (props) => {
    console.log(props.itens)

    return(
        <div className='lista-suspensa'>
            <label className='lista-suspensa__texto'>{props.label}</label>
            
            <select className='lista-supensa__lista' required={props.required} >
                <option selected hidden >Selecione sua trilha</option>
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                })}  
            </select>
        </div>
    )
}

export default ListaSuspensa;