import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDafault from '../../../components/PageDafault';
import useForm from '../../../hooks/useForm';
import FormFields from '../../../components/FormFields';
import videosRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categorias';

function CadastroVideo() {
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const categoryTitles = categorias.map(({ titulo }) => titulo);
  const { handleChange, values } = useForm({
    titulo: '',
    url: '',
    categoria: '',
  });

  console.log(categorias);

  useEffect(() => {
    categoriasRepository
      .getAll()
      .then((categoriasFromServer) => {
        setCategorias(categoriasFromServer);
      });
  }, []);

  return (
    <PageDafault>
      <h1>Cadastro de Video</h1>

      <form onSubmit={(event) => {
        event.preventDefault();
        // alert('Video Cadastrado com sucesso!!!1!');

        const categoriaEscolhida = categorias.find((categoria) => {
          return categoria.titulo === values.categoria;
        });

        console.log(`Categoria escolhida: ${categoriaEscolhida.id}`);

        videosRepository.create({
          titulo: values.titulo,
          url: values.url,
          categoriaId: categoriaEscolhida.id,
        })
          .then(() => {
            console.log('Cadastrou com sucesso!');
            history.push('/');
          });
      }}
      >
        <FormFields
          label="Título do Vídeo"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />

        <FormFields
          label="URL"
          name="url"
          value={values.url}
          onChange={handleChange}
        />

        <FormFields
          label="Categoria"
          name="categoria"
          value={values.categoria}
          onChange={handleChange}
          suggestions={categoryTitles}
        />

        <button type="submit">
          Cadastrar
        </button>
      </form>

      <br />
      <br />

      <Link to="/cadastro/categoria">
        Cadastrar Categoria
      </Link>
    </PageDafault>
  );
}

export default CadastroVideo;