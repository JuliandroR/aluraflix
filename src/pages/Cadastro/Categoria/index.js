import React from "react";
import PageDafault from "../../../components/PageDafault";
import { Link } from "react-router-dom";

// import { Container } from './styles';

function CadastroCategoria() {
  return (
    <PageDafault>
      <h1>Cadastro de Categoria</h1>

      <form>
        <label>
          Nome da Categoria:
          <input type="text" />
        </label>

        <button>Cadastrar</button>
      </form>

      <Link to="/">Ir para Tela Inicial</Link>
    </PageDafault>
  );
}

export default CadastroCategoria;
