import React, { useState } from "react";
import PageDafault from "../../../components/PageDafault";
import { Link } from "react-router-dom";
import FormFields from "../../../components/FormFields";

// import { Container } from './styles';

function CadastroCategoria() {
  const [categorias, setCategorias] = useState([]);

  const initialValues = {
    nome: "",
    descricao: "",
    cor: "",
  };

  const [dataCategoria, setDataCategoria] = useState(initialValues);

  function setValues(key, value) {
    setDataCategoria({
      ...dataCategoria,
      [key]: value,
    });
  }

  function handleChange(e) {
    setValues(e.target.getAttribute("name"), e.target.value);
  }

  return (
    <PageDafault>
      <h1>Cadastro de Categoria: {dataCategoria.nome}</h1>

      <form
        onSubmit={function handleSubmit(e) {
          e.preventDefault();
          setCategorias([...categorias, dataCategoria]);

          setDataCategoria(initialValues);
        }}
      >
        <FormFields
          label="Nome:"
          type="input"
          specific="text"
          name="nome"
          value={dataCategoria.nome}
          onChange={handleChange}
        />

        <FormFields
          label="Descrição:"
          type="textarea"
          specific="textarea"
          name="descricao"
          value={dataCategoria.descricao}
          onChange={handleChange}
        />

        <FormFields
          label="Cor:"
          type="input"
          specific="color"
          name="cor"
          value={dataCategoria.cor}
          onChange={handleChange}
        />

        <button>Cadastrar</button>
      </form>

      <ul>
        {categorias.map((categoria, i) => {
          return <li key={`${categoria}+${i}`}>{categoria.nome}</li>;
        })}
      </ul>

      <Link to="/">Ir para Tela Inicial</Link>
    </PageDafault>
  );
}

export default CadastroCategoria;
