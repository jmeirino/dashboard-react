import React from 'react';
import ProductList from '../components/ProductList';
import { productos } from "../data/productos";

const TotalProductos = () => {

    return (
        <section>
            <hr />
            <div className="card-header bg-danger text-uppercase font-weight-bold">Listado de Productos a la venta</div>
            <div className="card-body">
            </div>
            <div className="col-auto">
            </div>
            <hr/>

            <ProductList productos={productos} />

        </section>
    );
};

export default TotalProductos;