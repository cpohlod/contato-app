import React, {useState} from "react";
import { Link } from "react-router-dom";
import { criar } from "../../actions/contact";

const Create = ({ contact }) => {
    const [inputNomeValue, setInputNomeValue] = useState('');
    const [inputEmailValue, setInputEmailValue] = useState('');

    const salvarHandle = (event) => {
        event.preventDefault(); 
    };

    return (
        <div>Novo Contato
            <input label="Nome" value={inputNomeValue} onChange={e => setInputNomeValue(e.target.value)}/>
            <input label="Email" value={inputEmailValue} onChange={e => setInputEmailValue(e.target.value)}/>
            <button data-test="salvar" onClick={salvarHandle}>salvar</button>
            <Link to="/">Voltar</Link>
        </div>        
    );
  };

  export default Create;