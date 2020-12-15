import logo from './logo.svg';
import './App.css';
import React, { Fragment } from 'react';
import Header from './components/Header.component'
import Formulario from './components/Formulario.component'

function App() {
  return (
    <Fragment>
      <Header/>
      <Formulario/>
    </Fragment>
  );
}

export default App;
