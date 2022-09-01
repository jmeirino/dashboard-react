import React from 'react';

const CategoriasList = ( { categorias }) => {

    return ( 
      <>
      {categorias != null ? (
        <div>
          <ul>
              {
                categorias.map(categoria => {
                  return (<li key={categoria.count}>{categoria.name}: {categoria.count}</li>)
                })
              }        
          </ul>
          <br></br>
          <h4>Total de Categorías: {categorias.length}</h4>
          </div>
        ) : ("0") 
      }
      </>
    );
};

export default CategoriasList;