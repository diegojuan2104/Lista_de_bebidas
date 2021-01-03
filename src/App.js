import logo from './logo.svg';
import './App.css';
import React, { Fragment } from 'react';
import Header from './components/Header.component'
import Formulario from './components/Formulario.component'
import CategoriasProvider from './context/CategoriasContext'


function App() {
  return (
    <CategoriasProvider>
      <Header/>
      <Formulario/>
    </CategoriasProvider>
  );
}

export default App;
