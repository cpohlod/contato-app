import React from "react";
import { Link } from "react-router-dom";

const Create = () => {

    const salvarHandle = (event) => {
        event.preventDefault(); 
    };

    return (
        <div>Novo Contato
            <input data-test="nome" id="inputNome"/>
            <input data-test="email" id="inputEmail"/>
            <button data-test="salvar" onClick={salvarHandle}>salvar</button>
            <Link to="/">Voltar</Link>
        </div>        
    );
  };
  export default Create;