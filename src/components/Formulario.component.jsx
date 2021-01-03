import React,{ useContext, useState } from 'react';
import { CategoriasContext } from '../context/CategoriasContext'


const Formulario = () => {

    const { categorias } = useContext(CategoriasContext);

    const [busqueda, guardarBusqueda ] = useState({
        nombre: '',
        categoria: ''
    })

    const obtenerDatos = (e) => {
        guardarBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        })
    }
    return(
        <form className="col-12" action={null}>
            <fieldset className="text-center">
                <legend>Busca Bebidas por categoria o Ingrediente</legend>
            </fieldset>

            <div className="row mt-4">
                <div className="col-md-4">
                    <input 
                    className="form-control"
                    name="nombre"
                    type="text"
                    placeholder="Buscar por ingrediente"
                    onChange={obtenerDatos}
                    />
                </div>
                <div className="col-md-4">
                    <select
                        className="form-control"
                        name="categoria"
                        onChange={obtenerDatos}
                        >
                            <option value="">--Selecciona una categoria--</option>
                            {categorias.map(categoria =>(
                            <option key={categoria.strCategory} value={categoria.strCategory}>
                                    {categoria.strCategory}
                                </option>
                            ))}
                        </select>
                </div>

                <div className="col-md-4">
                    <input type="submit"
                            className="btn btn-block btn-primary"
                            value="Buscar Recetas"
                    />
                </div>
            </div>
        </form>
    );
}

export default Formulario;