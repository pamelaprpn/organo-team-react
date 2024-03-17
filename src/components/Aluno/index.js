import './Aluno.css'


const Aluno = (props) => {
    return(
        <div className='card'>
            <div className='card_img' style={{backgroundColor: props.corDeFundo}}>
                <img src={props.image} alt=''/>
            </div>
            <div className='card_info' >
                <h4>{props.nome}</h4>
                <h5>{props.cargo}</h5>
                <h5>{props.trilha}</h5>
            </div>
            <div className='card_contato' >
                <ul>
                    <li className='lista'>
                        <img src='../assets/linkedin.png' alt='Linkedin'/>
                        <a href={props.linkedin}></a>
                    </li>
                    <li className='lista'>
                        <img src='../assets/github.png' alt='GitHub'/>
                        <a href={props.github}></a>
                    </li>
                </ul>
            </div>
        </div>

    )
}

export default Aluno