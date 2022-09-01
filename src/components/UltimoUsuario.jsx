import axios from 'axios'
import React, { useEffect, useState } from 'react'

const UltimoUsuario = () => {
   
 const [ultimoUsuario, setUltimoUsuario]=useState() 

    useEffect(() => {
        axios.get("https://dragontech5.herokuapp.com/api/users/")
            .then(res => {
                setUltimoUsuario(res.data.users.pop());
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

  return (
    <>
        {ultimoUsuario != null ? (
           <article className='ultimoProduct-card'>
           <div className="ultimoProduct-name">Último Usuario Creado </div>
           <div key={ultimoUsuario.id}>
             <li className='product-name'> {ultimoUsuario.name}</li>
             <img className='product-img' src={ultimoUsuario.img_url} alt=""></img>

           </div>
         </article>
          )
  
         : ("no hay Usuarios")}
    </>
              );
  
              }

export default UltimoUsuario;