import React, { useEffect, useState } from 'react';
import axios from 'axios'

const TotalUsuarios = (props) => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3000/api/users")
            .then(res => {
                // console.log("datos");
                console.log(res.data.count); 
                setUsers(res.data.users)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])


    return (
        <>
            <hr />
            <div className="card text-white bg-danger mb-3">
                <div className="card-header bg-dark text-uppercase font-weight-bold">Total de Usuarios</div>
                <div className="card-body">
                    <h5 className="card-title">Listado de Usuarios activos</h5>
                </div>
            </div>
            <div className="col-auto">
            </div>
        </>
    );
};

export default TotalUsuarios;