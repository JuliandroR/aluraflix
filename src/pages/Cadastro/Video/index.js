import React from 'react';
import PageDafault from '../../../components/PageDafault';
import { Link } from 'react-router-dom';

// import { Container } from './styles';

function CadastroVideo() {
  return (
    <PageDafault>
      <h1>
        Cadastro de Vídeo
      </h1>

      <Link to="/cadastro/categoria">
        Cadastrar uma Nova Categoria
      </Link>
    </PageDafault>
  );
}

export default CadastroVideo;