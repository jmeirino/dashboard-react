import { usuarios } from "../data/usuarios";

const getUsersByName = (name) =>{

    const validName = [""];

    if (!validName.includes(name)) {
        throw new Error(`Nombre invalido: ${name}`);
    }

    return usuarios.filter ((usuario) => usuarios.name === name);
}

export default getUsersByName