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
          <article className='product-card'>
            <div key={producto.id}>
              <li className='product-name'> {producto.name}</li>
              <img className='product-img' src={producto.img_url} alt=""></img>

            </div>
          </article>
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