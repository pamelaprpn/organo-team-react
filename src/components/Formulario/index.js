
import './Formulario.css'
import CampoText from "../CampoTexto";
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';
import { isDisabled } from '@testing-library/user-event/dist/utils';
import { useState } from 'react';


const Formulario = (props) => {
    
    

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [linkedin, setLinkedin] = useState('')
    const [github, setGithub] = useState('')
    const [image, setImage] = useState('')
    const [trilha, setTrilha] = useState('')


    const salvar = (evento) => {
        evento.preventDefault();
        props.alunoCadastrado({
                nome,
                cargo,
                linkedin,
                github,
                image,
                trilha
            })
            setNome('')
            setCargo('')
            setLinkedin('')
            setGithub('')
            setImage('')
            setTrilha('')
    }

    
    return( 
        <section className="form-container">
            <form className="formulario" onSubmit={salvar}>
                <h2 className="form__titulo">Preencha os dados para criar conexão com outros alunos da Alura</h2>
                <CampoText 
                    required={true} 
                    label='Nome'
                    placeholder='Digite seu nome'
                    valor={nome}
                    changed={valor => setNome(valor)}/>
                <CampoText 
                    required={true} 
                    label='Cargo'
                    placeholder='Digite seu cargo'
                    valor={cargo}
                    changed={valor => setCargo(valor)}/>
                <CampoText 
                    required={true} 
                    label='Linkedin'
                    placeholder='Digite seu Linkedin'
                    valor={linkedin}
                    changed={valor => setLinkedin(valor)}/>
                <CampoText 
                    required={true} 
                    label='Github'
                    placeholder='Digite seu Github'
                    valor={github} 
                    changed={valor => setGithub(valor)}/>
                <CampoText 
                    required={true} 
                    label='Imagem'
                    placeholder='Informe o endereço da imagem'
                    valor={image}
                    changed={valor => setImage(valor)}/>
                <ListaSuspensa 
                    isDisabled={isDisabled} 
                    required={true} 
                    label="Trilhas" 
                    itens={props.Ntrilhas} 
                    valor={trilha}
                    changed={valor => setTrilha(valor)}/> 
                <Botao>Criar Card</Botao>   
            </form>
        </section>
    )
}

export default Formulario;