import React, { useEffect, useState } from 'react';
import getUsersByName from '../helpers/getUsersByName';

const TotalDeUsuarios = () => {

    const [usuarios, setUsuarios] = useState(null);

    useEffect(() => {

        getUsersByName(setUsuarios)

    }, [])

    return (
        <div>
            {usuarios != null ? (
                <h4 className='card-home'> Total de usuarios: {usuarios.length}</h4>
            ) : ("0")}

        </div>
    );
};


export default TotalDeUsuarios;