import React, { useEffect, useState } from 'react';
import getUsersByName from '../helpers/getUsersByName';

const UsersList = () => {
    const [usuarios, setUsuarios] = useState(null);

    useEffect(() => {
        getUsersByName(setUsuarios)
    }, [])

    return (
<div>
    <ul>
       
    {usuarios != null ? (

      usuarios.map(usuario => (
        <div key={usuario.id}>

          <li> {usuario.id} - {usuario.name} - {usuario.email} </li>
          
        </div>
      ))
    ) : ("no hay personajes")}
    </ul>

    <p>Total de usuarios {usuarios.length}</p>

    </div>
    );
};

export default UsersList;