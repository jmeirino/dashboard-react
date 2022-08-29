import axios from 'axios'; 

const getUsersByName = async (state) =>{
    const peticion = await axios.get ('https://dragontech5.herokuapp.com/api/users')
        state(peticion.data.users);

    //const validName = [""];

    //if (!validName.includes(name)) {
        //throw new Error(`Nombre invalido: ${name}`);
    //}

    //return usuarios.filter ((usuario) => usuarios.name === name);
}

export default getUsersByName