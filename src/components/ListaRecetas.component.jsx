import React, { useContext, useState, useEffect } from 'react';
import { RecetasContext } from '../context/RecetasContext'

import Receta from './Receta.component'

const ListaRecetas = () => {

    //Extraer ls recetas 
    const { recetas } = useContext(RecetasContext);
    
    let totalPaginas = (Math.ceil((recetas.length) / 20))

    const [paginaactual, guardarPaginaActual] = useState(1);

    useEffect(() => {
        if(totalPaginas === 1) guardarPaginaActual(1)
    }, [recetas])

    const paginaAnterior = () => {
        const nuevaPaginaActual = paginaactual - 1;
        guardarPaginaActual(nuevaPaginaActual);

        const inicio = document.querySelector('.inicio');
        inicio.scrollIntoView({behavior: 'smooth'})
    }

    const paginaSiguiente = () => {

        if (paginaactual > totalPaginas) return;

        const nuevaPaginaActual = paginaactual + 1;
        guardarPaginaActual(nuevaPaginaActual);
        
        const inicio = document.querySelector('.inicio');
        inicio.scrollIntoView({behavior: 'smooth'})
    
    }


    return (
        <div>
            <div className='inicio'></div>
            <div className='row mt-5'>
                {recetas.map(receta => (
                    (receta.pagina === paginaactual ?
                    <Receta key={receta.idDrink} receta={receta}
                    
                    />:null)
                ))}
            </div>
            
            <div className="row justify-content-center">


                {(paginaactual === 1) ? null : (

                    <button
                        type="button"
                        className="btn btn-info mr-1"
                        onClick={paginaAnterior}
                    >&laquo;Anterior</button>
                )}


                {(paginaactual === totalPaginas) ? null : (

                    <button
                        type="button"
                        className="btn btn-"
                        onClick={paginaSiguiente}
                    >Siguiente&raquo;</button>
                )}

            </div>
        </div>
    );
}

export default ListaRecetas;