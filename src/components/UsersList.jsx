import React, { useEffect, useState } from 'react';
import getUsersByName from '../helpers/getUsersByName';

const UsersList = () => {

  const [usuarios, setUsuarios] = useState(null);

  useEffect(() => {

    getUsersByName(setUsuarios)

  }, [])

  return (
    <>
      {usuarios != null ? (

        usuarios.map(usuario => (
          <div key={usuario.id}>
            
            <li> {usuario.id} - {usuario.name} - {usuario.email} </li>
          </div>
        ))

      ) : ("no hay usuarios")}

      <br></br>
      {usuarios != null ? (
        <h4>Total de usuarios: {usuarios.length}</h4>
      ) : ("0")}

    </>
  );
};

export default UsersList;