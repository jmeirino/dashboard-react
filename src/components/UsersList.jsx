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
                    <article className='product-card'>
                        <div key={usuario.id}>
                            <li className='product-name'> {usuario.name} </li>
                            <img className='product-img' src={usuario.img_url} alt=""></img>
                            <li className='usuario-email'> {usuario.email} </li>
                        </div>
                    </article>
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