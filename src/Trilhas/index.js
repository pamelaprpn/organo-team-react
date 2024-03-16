import './Trilhas.css'

const Trilhas = (props) => {
    return(
        <section className='trilhas' style={{backgroundColor: props.corSecundaria}}>
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
        </section>
    )
}

export default Trilhas;