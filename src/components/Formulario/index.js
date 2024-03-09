
import './Formulario.css'
import CampoText from "../CampoTexto";
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';
import { isDisabled } from '@testing-library/user-event/dist/utils';


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

    const salvar = (evento) => {
        evento.preventDefault();
        console.log('dados salvos')
    }
    
    return( 
        <section className="form-container">
            <form className="formulario" onSubmit={salvar}>
                <h2 className="form__titulo">Preencha os dados para criar o card de Aluno.</h2>
                <CampoText required={true} label='Nome'placeholder='Digite seu nome'/>
                <CampoText required={true} label='Cargo'placeholder='Digite seu cargo'/>
                <CampoText required={true} label='Linkedin'placeholder='Digite seu Linkedin'/>
                <CampoText required={true} label='Github'placeholder='Digite seu Github'/>
                <CampoText required={true} label='Imagem'placeholder='Informe o endereço da imagem'/>
                <ListaSuspensa isDisabled={isDisabled} required={true} label="Trilhas" itens={trilhas}/>  
                <Botao>Criar Card</Botao>   
            </form>
        </section>
    )
}

export default Formulario;