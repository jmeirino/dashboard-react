import React, { useEffect, useState } from 'react';
import getProductsByCategoria from '../helpers/getProductsByCategoria';

const UltimoProducto = () => {

  const [productos, setProductos] = useState(null);

  useEffect(() => {

    getProductsByCategoria(setProductos)

  }, [])

  return (
    <div>
      {productos != null ? (

        <h4 className='card-home'> Total de productos: {productos.pop()}</h4>

      ) : ("0")}

    </div>
  );
};


export default UltimoProducto;