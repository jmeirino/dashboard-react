import React from 'react';

const CategoriasList = ( { categorias }) => {

    return (
        <div>
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
      <br></br>

      {categorias != null ? (

        <h4>Total de Categorías: {categorias.length}</h4>
        

      ) : ("0")}
</div>
        );
};

export default CategoriasList;