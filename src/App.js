import { useState } from "react";
import Banner from "./components/Banner";
import Formulario from "./components/Formulario";



function App() {

  const [alunos, setAlunos] = useState([])

  const newAluno = (aluno) => {
    console.log(aluno)
    setAlunos([...alunos, aluno])
  }

  return (
    <>
      <Banner/>
      <Formulario alunoCadastrado = {aluno => newAluno(aluno)}/> 
    </>
  );
}

export default App;
