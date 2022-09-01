import React, { useEffect, useState } from 'react';
import getProductsByCategoria from '../helpers/getProductsByCategoria';

const TotalDeCategorias = () => {

  const [Categorias, setCategorias] = useState(null);

  useEffect(() => {

    getProductsByCategoria(setCategorias)

  }, [])

  return (
    <div className='top-card-home'>
      {Categorias != null ? (

        <h4 className='card-home'> Total de Categorias: {Categorias.length}</h4>

      ) : ("0")}

    </div>
  );
};


export default TotalDeCategorias;