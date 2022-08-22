import React from 'react';
import getCategoriasByCategoria from '../helpers/getCategoriasByCategoria';



const CategoriasList = ( { categorias }) => {

    return (
        <ul>
            {
            categorias.map(categoria => {
                return (
                <li key={categoria.id}>
                {categoria.name}
                </li>
            )}
            )
            }        
        </ul>
        );
};

export default CategoriasList;