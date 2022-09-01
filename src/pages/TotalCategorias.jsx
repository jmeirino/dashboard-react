import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CategoriasList from '../components/CategoriasList';

const TotalCategorias = () => {
   
    const [totalCategorias, setTotalCategorias]=useState() 
   
       useEffect(() => {
           axios.get("https://dragontech5.herokuapp.com/api/products/")
               .then(res => {
                setTotalCategorias(res.data.countByCategory);
               })
               .catch(error => {
                   console.log(error)
               })
       }, [])


    return (
        <section>
            <hr />
            <div className="card-header bg-success text-uppercase font-weight-bold">Listado de categorías disponibles </div>
            <div className="card-body">
            </div>
            <div className="col-auto">
            </div>
            <hr />

            <CategoriasList categorias={totalCategorias} />

        </section>
    );
};

export default TotalCategorias;