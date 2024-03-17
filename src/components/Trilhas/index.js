import Aluno from '../Aluno';
import './Trilhas.css'

const Trilhas = (props) => {
    return(
        //props.alunos.length > -- 0 Caso section não tenha aluno irá retornar vazio ou usar ternario
        (props.alunos.length > 0) ? <section className='trilhas' style={{backgroundColor: props.corSecundaria}}>
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
            <div className='alunos'>
                {props.alunos.map(aluno => <Aluno
                    corDeFundo={props.corPrimaria}
                    key={aluno.nome}
                    nome={aluno.nome}
                    cargo={aluno.cargo}
                    trilha={aluno.trilha}
                    image={aluno.image}
                    linkedin={aluno.linkedin}
                    github={aluno.github} />)}
            </div>
        </section>
        : ''
    )
} 

export default Trilhas;