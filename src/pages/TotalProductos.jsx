import React from 'react';
import ProductList from '../components/ProductList';
import { productos } from "../data/productos";



const TotalProductos = () => {
       
    return (
        <section>
        <hr/>
        <div className="card text-white bg-danger mb-3">
                <div className="card-header bg-dark text-uppercase font-weight-bold">Productos  </div>
                <div className="card-body">
                    <h5 className="card-title">Listado de Productos a la venta</h5>
                 
                </div>
        </div>
        <div className="col-auto">
        </div>

        <ProductList productos = {productos}/>
            
        </section>        
    );
};

export default TotalProductos;