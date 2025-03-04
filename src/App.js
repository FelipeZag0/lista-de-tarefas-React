import { useState } from "react";
import tarefas from "./Data/task";

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

export default function App() {
  const [listaDeTarefas, setListaDeTarefas] = useState([...tarefas])
  const [umaTarefa, setUmaTarefa] = useState('')

  function adicionaTarefa() {
    const novaTarefa = {id: 0, descricao: umaTarefa, finalizado: false}
    setListaDeTarefas([...listaDeTarefas, novaTarefa])
    setUmaTarefa('')
  }

  return (
    <div className="container App">
      <br/><br/>
      <h2>Lista de tarefas</h2>
      <br/><br/>

      {/*Campo de inserção de tarefas*/}
      <div className="row">
        <div className="col">
          <input  type="text"
                  value={umaTarefa} 
                  onChange={(e)=> setUmaTarefa(e.target.value)}
                  className="form-control form-control-lg"/>
        </div>
        <div className="col-auto">
          <button onClick={adicionaTarefa} className="btn btn-lg btn-success">Adicionar</button>
        </div>
      </div>
      {listaDeTarefas.map(
        (tarefas, id) => {
          return (
            <div className="col mytask">
              <span>{tarefas.id}</span>
              <span>{tarefas.descricao}</span>
            </div>
          )
        }
      )}
    </div>
  )
}