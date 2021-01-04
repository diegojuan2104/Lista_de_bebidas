import logo from './logo.svg';
import './App.css';
import React, { Fragment } from 'react';
import Header from './components/Header.component'
import Formulario from './components/Formulario.component'
import CategoriasProvider from './context/CategoriasContext'
import RecetasProvider from './context/RecetasContext'

function App() {
  return (

    <CategoriasProvider>
      <RecetasProvider>
      <Header/>
      <Formulario/>
      </RecetasProvider>
    </CategoriasProvider>
  );
}

export default App;
