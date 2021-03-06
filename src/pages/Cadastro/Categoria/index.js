import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PageDafault from "../../../components/PageDafault";
import FormField from "../../../components/FormFields";
import useForm from '../../../hooks/useForm';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: "",
    descricao: "",
    cor: "",
  };
  
  const [categorias, setCategorias] = useState([]);

  const { handleChange, values, clearForm} = useForm(valoresIniciais)

  // ============

  useEffect(() => {
    if (window.location.href.includes("localhost")) {
      const URL = window.location.hostname.includes("localhost")
        ? "http://localhost:8080/categorias"
        : "https://aluraflixj.herokuapp.com/categorias";
      fetch(URL).then(async (response) => {
        if (response.ok) {
          const resposta = await response.json();
          setCategorias(resposta);
          return;
        }
        throw new Error("Não foi possível pegar os dados");
      });
    }
  }, []);

  return (
    <PageDafault>
      <h1>
        Cadastro de Categoria:
        {values.nome}
      </h1>

      <form
        onSubmit={function handleSubmit(infosDoEvento) {
          infosDoEvento.preventDefault();

          setCategorias([...categorias, values]);

          clearForm(valoresIniciais);
        }}
      >
        <FormField
          label="Nome da Categoria"
          type="text"
          name="nome"
          value={values.nome}
          onChange={handleChange}
        />

        <FormField
          label="Descrição:"
          type="????"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />
        {/* <div>
          <label>
            Descrição:
            <textarea
              type="text"
              value={values.descricao}
              name="descricao"
              onChange={handleChange}
            />
          </label>
        </div> */}

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />
        {/* <div>
          <label>
            Cor:
            <input
              type="color"
              value={values.cor}
              name="cor"
              onChange={handleChange}
            />
          </label>
        </div> */}

        <button>Cadastrar</button>
      </form>

      <ul>
        {categorias.map((categoria, indice) => (
          <li key={`${categoria}${indice}`}>{categoria.titulo}</li>
        ))}
      </ul>

      <Link to="/">Ir para home</Link>
    </PageDafault>
  );
}

export default CadastroCategoria;
