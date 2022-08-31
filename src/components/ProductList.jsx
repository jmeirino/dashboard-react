import React, { useEffect, useState } from 'react';
import getProductsByCategoria from '../helpers/getProductsByCategoria';

const ProductList = () => {

  const [productos, setProductos] = useState(null);

  useEffect(() => {

    getProductsByCategoria(setProductos)

  }, [])

  return (
    <div>
      {productos != null ? (
        productos.map(producto => (
          <div key={producto.id}>
            <li>{producto.name} </li>
        <img src={producto.img_url} alt=""></img>
          </div>
        ))

      ) : ("no hay productos")}

      <br></br>

      {productos != null ? (

        <h4>Total de productos: {productos.length}</h4>
        

      ) : ("0")}

    


</div>
  );
};


export default ProductList;