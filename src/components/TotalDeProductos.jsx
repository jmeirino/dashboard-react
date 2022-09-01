import React, { useEffect, useState } from 'react';
import getProductsByCategoria from '../helpers/getProductsByCategoria';

const TotalDeProductos = () => {

  const [productos, setProductos] = useState(null);

  useEffect(() => {

    getProductsByCategoria(setProductos)

  }, [])

  return (
    <div className='top-card-home'>
      {productos != null ? (

        <h4 className='card-home'> Total de Productos: {productos.length}</h4>

      ) : ("0")}

    </div>
  );
};


export default TotalDeProductos;