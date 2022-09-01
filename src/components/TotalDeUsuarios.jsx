import React, { useEffect, useState } from 'react';
import getUsersByName from '../helpers/getUsersByName';

const TotalDeUsuarios = () => {

    const [usuarios, setUsuarios] = useState(null);

    useEffect(() => {

        getUsersByName(setUsuarios)

    }, [])

    return (
        <div className='top-card-home'>
            {usuarios != null ? (
                <h4 className='card-home'> Total de Usuarios: {usuarios.length}</h4>
            ) : ("0")}

        </div>
    );
};


export default TotalDeUsuarios;