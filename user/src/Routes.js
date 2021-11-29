import React from "react";

import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Usuarioscadastro from "./pages/Cadastro/Usuarioscadastro";
import Candidato from "./pages/Candidato/Candidato";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/cadastro">
        <Usuarioscadastro />
      </Route>
      <Route exact path="/candidato">
        <Candidato />
      </Route>
    </Switch>
  );
};
