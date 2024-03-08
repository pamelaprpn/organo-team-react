import './Formulario.css'
import CampoText from "../CampoTexto";
import ListaSuspensa from '../ListaSuspensa';


const Formulario = () => {
    
    const trilhas = [
        'Dados',
        'DevOps',
        'Desenvolvimento Full Stack',
        'Desenvolvimento Mobile',
        'Segurança da Informação',
        'Marketing Digital',
        'User Experience'
    ]
    
    return( 
        <section className="form-container">
            <form className="formulario">
                <h2 className="form__titulo">Preencha os dados para criar o card de Aluno.</h2>
                <CampoText label='Nome'placeholder='Digite seu nome'/>
                <CampoText label='Cargo'placeholder='Digite seu cargo'/>
                <CampoText label='Linkedin'placeholder='Digite seu Linkedin'/>
                <CampoText label='Github'placeholder='Digite seu Github'/>
                <CampoText label='Imagem'placeholder='Informe o endereço da imagem'/>
                <ListaSuspensa obrigatorio={true} label="Trilhas" itens={trilhas}/>     
            </form>
        </section>
    )
}

export default Formulario;