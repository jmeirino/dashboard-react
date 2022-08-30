import React from 'react';
import CategoriasList from '../components/CategoriasList';
import { categorias } from "../data/categorias";

const TotalCategorias = () => {

    return (
        <section>
            <hr />
            <div className="card-header bg-success text-uppercase font-weight-bold">Listado de categorías disponibles </div>
            <div className="card-body">
            </div>
            <div className="col-auto">
            </div>
            <hr />

            <CategoriasList categorias={categorias} />

        </section>
    );
};

export default TotalCategorias;