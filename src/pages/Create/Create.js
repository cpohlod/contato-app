import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { criar } from "./../../actions/contact";

const Create = ({ contact }) => {
    const dispatch = useDispatch();

    return (
        <div>Novo Contato
            <button data-test="salvar" onClick={() => dispatch(criar(1))}>salvar</button>
            <Link to="/">Voltar</Link>
        </div>        
    );
  };

  export default Create;