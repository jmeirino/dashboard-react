import axios from 'axios'
import React, { useEffect, useState } from 'react'

const UltimoProducto = () => {
   
 const [ultimoProducto, setUltimoProducto]=useState() 

    useEffect(() => {
        axios.get("https://dragontech5.herokuapp.com/api/products/")
            .then(res => {
                setUltimoProducto(res.data.products.pop());
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

  return (
    <>
        {ultimoProducto != null ? (
           <article className='ultimoProduct-card'>
           <div className="ultimoProduct-name">Último Producto Creado</div>
           <div key={ultimoProducto.id}>
             <li className='product-name'> {ultimoProducto.name}</li>
             <img className='product-img' src={ultimoProducto.img_url} alt=""></img>

           </div>
         </article>
          )
  
         : ("no hay productos")}
    </>
              );
  
              }

export default UltimoProducto;