import logo from "./logo.svg";
import "./App.css";
import React, { Fragment } from "react";

import Header from "./components/Header.component";
import Formulario from "./components/Formulario.component";
import ListaRecetas from "./components/ListaRecetas.component";

import CategoriasProvider from "./context/CategoriasContext";
import RecetasProvider from "./context/RecetasContext";

function App() {
  return (
    <CategoriasProvider>
      <RecetasProvider>
        <Header />
        <div className="container mt-5">
          <div className="row">
            <Formulario />
          </div>

          <ListaRecetas />
        </div>
      </RecetasProvider>
    </CategoriasProvider>
  );
}

export default App;
