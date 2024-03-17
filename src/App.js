import { useState } from "react";
import Banner from "./components/Banner";
import Formulario from "./components/Formulario";
import Trilhas from "./components/Trilhas";



function App() {

  const trilhas = [
    {
      nome: 'Dados',
      corPrimaria: '#9f411d',
      corSecundaria: '#fff8eb'
    },
    {
      nome: 'DevOps',
      corPrimaria: '#9f411d',
      corSecundaria: '#e3cabf'
    },
    {
      nome: 'Desenvolvimento Full Stack',
      corPrimaria: '#9f411d',
      corSecundaria: '#fff8eb'
    },
    {
      nome: 'Desenvolvimento Mobile',
      corPrimaria: '#9f411d',
      corSecundaria: '#e3cabf'
    },
    {
      nome: 'Segurança da Informação',
      corPrimaria: '#9f411d',
      corSecundaria: '#fff8eb'
    },
    {
      nome: 'Marketing Digital',
      corPrimaria: '#9f411d',
      corSecundaria: '#e3cabf'
    },
    {
      nome: 'User Experience',
      corPrimaria: '#9f411d',
      corSecundaria: '#fff8eb'
    },
   
  ]

  const [alunos, setAlunos] = useState([])

  const newAluno = (aluno) => {
    setAlunos([...alunos, aluno])
  }

  return (
    <>
      <Banner/>
      <Formulario Ntrilhas={trilhas.map(trilha => trilha.nome)} alunoCadastrado = {aluno => newAluno(aluno)}/> 
      {trilhas.map(trilha => <Trilhas 
      key={trilha.nome} 
      nome={trilha.nome} 
      corPrimaria={trilha.corPrimaria} 
      corSecundaria={trilha.corSecundaria}
      alunos={alunos.filter(aluno => aluno.trilha === trilha.nome)}/>)}
       
    </>
  );
}

export default App;
