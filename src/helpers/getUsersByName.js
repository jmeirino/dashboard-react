import axios from 'axios'; 

const getUsersByName = async (state) =>{
    const peticion = await axios.get ('https://dragontech5.herokuapp.com/api/users')
        state(peticion.data.users);
    
}

export default getUsersByName