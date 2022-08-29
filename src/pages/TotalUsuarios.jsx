import React from 'react';
import UsersList from '../components/UsersList';
import { usuarios } from "../data/usuarios";

const TotalUsuarios = () => {
       
    return (
        <section>
        <hr/>
        <div className="card text-white bg-primary mb-3">
                <div className="card-header bg-dark text-uppercase font-weight-bold">Usuarios  </div>
                <div className="card-body">
                    <h5 className="card-title">Listado de Usuarios activos</h5>
                </div>
        </div>
        <div className="col-auto">
        </div>

        <UsersList usuarios = {usuarios}/>
            
        </section>        
    );
};

export default TotalUsuarios;