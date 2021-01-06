import React, { createContext, useState, useEffect } from "react";

import axios from 'axios'

export const RecetasContext = createContext();



const RecetasProvider = (props) => {

 

    
 const[recetas, guardarRecetas] = useState([]);

 const[recetasP, guardarRecetasP] = useState([]);

 const[busqueda,buscarRecetas] = useState({
    nombre : '',
    categoria : '',
  })

  const [consultar, guardarConsultar] = useState(false)

  const { nombre, categoria } = busqueda;

  const crearRecetaP = (receta) => {
    guardarRecetasP([...recetasP,receta])
  };

  useEffect(() => {

    if (consultar){
        const obtenerRecetas = async () => {
            const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${nombre}&c=${categoria}`
         
            const resultado = await axios.get(url);

            //console.log(resultado.data.drinks);
            let recetasAPI = resultado.data.drinks
            
            guardarRecetasP([])

            for (let i = 0; i < recetasAPI.length; i++) {
                let paginaAsignada = Math.ceil((i+1)/20)
                let objPaginaAsignada = { pagina: paginaAsignada}
                let newReceta = Object.assign(recetasAPI[i], objPaginaAsignada)
                
                recetasP.push(newReceta)
            }

            guardarRecetas(recetasP);

        }

         obtenerRecetas();
         
    }
  }, [busqueda])


  return(
  
  <RecetasContext.Provider
        value={
            {
                recetas,
                buscarRecetas,
                guardarConsultar
            }
        }
  >
      {props.children}

  </RecetasContext.Provider>);
};

export default RecetasProvider;
