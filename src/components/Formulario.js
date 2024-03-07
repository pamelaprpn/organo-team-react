import '../styles/Formulario.css'
import CampoText from "./CampoText";

const Formulario = () => {
    return(
        <section className="form-container">
            <form className="formulario">
                <h2 className="form__titulo">Preencha os dados para criar o card do colaborador.</h2>
                <CampoText label='Nome'placeholder='Digite seu nome'/>
                <CampoText label='Cargo'placeholder='Digite seu cargo'/>
                <CampoText label='Imagem'placeholder='Informe o endereço da imagem'/>
            </form>
        </section>
    )
}

export default Formulario;