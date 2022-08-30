import React from 'react';
import UsersList from '../components/UsersList';
import { usuarios } from "../data/usuarios";

const TotalUsuarios = () => {

    return (
        <section>
            <hr />
            <div className="card-header bg-primary text-uppercase">Listado de Usuarios activos</div>
            <div className="card-body">
            </div>
            <div className="col-auto">
            </div>
            <hr />

            <UsersList usuarios={usuarios} />

        </section>
    );
};

export default TotalUsuarios;