import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./pages/Home";
import Error404 from './pages/Error404'
import CadastroVideo from './pages/Cadastro/Video'

import { BrowserRouter, Switch, Route } from "react-router-dom";
import CadastroCategoria from "./pages/Cadastro/Categoria";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={CadastroVideo} exact />
      <Route path="/cadastro/categoria" component={CadastroCategoria} exact />
      <Route component={Error404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
