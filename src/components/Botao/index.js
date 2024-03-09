import './Botao.css'

const Botao = (props) => {
    return(
        <div>
            <button className='botao_criar'>{props.children}</button>
        </div>
    )
} 

export default Botao;