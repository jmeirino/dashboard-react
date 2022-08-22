import React from 'react';
import getProductsByCategoria from '../helpers/getProductsByCategoria';



const ProductList = ( { productos }) => {

    return (
        <ul>
            {
            productos.map(producto => {
                return (
                <li key={producto.id}>
                {producto.name}
                </li>
            )}
            )
            }        
        </ul>
        );
};

export default ProductList;