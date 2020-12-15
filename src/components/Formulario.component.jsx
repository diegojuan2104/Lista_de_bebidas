import React from 'react';

const Formulario = () => {
    return(
        <form className="col-12" action={null}>
            <fieldset className="text-center">
                <legend>Busca Bebidas por categoria o Ingrediente</legend>
            </fieldset>

            <div className="row">
                <div className="col-md-4">
                    <input 
                    className="form-control"
                    name="nombre"
                    type="text"/>
                </div>
                <div className="col-md-4">
                    <select
                        className="form-control"
                        name="categoria">
                            <option value="">--Selecciona una categoria--</option>
                        </select>
                </div>

            </div>
        </form>
    );
}

export default Formulario;