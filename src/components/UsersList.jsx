import React from 'react';
import getUsersByName from '../helpers/getUsersByName';

const UsersList = ( { usuarios }) => {

    return (
        <ul>
            {
            usuarios.map(usuario => {
                return (
                <li key={usuario.id}>
                {usuario.name}
                </li>
            )}
            )
            }        
        </ul>
        );
};

export default UsersList;