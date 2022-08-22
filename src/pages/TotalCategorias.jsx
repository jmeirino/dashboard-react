import React from 'react';
import CategoriasList from '../components/CategoriasList';
import { categorias } from "../data/categorias";

const TotalCategorias = () => {
       
    return (
        <section>
        <hr/>
        <div className="card text-white bg-success mb-3">
                <div className="card-header bg-dark text-uppercase font-weight-bold">Total de Categorias     { categorias.length } </div>
                <div className="card-body">
                    <h5 className="card-title">Listado de Categorias disponibles</h5>
                </div>
        </div>
        <div className="col-auto">
        </div>

        <CategoriasList categorias = {categorias}/>
            
        </section>        
    );
};

export default TotalCategorias;