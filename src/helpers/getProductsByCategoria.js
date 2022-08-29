import axios from 'axios'; 

const getProductsByCategoria = async (state) =>{
    const peticion = await axios.get ('https://dragontech5.herokuapp.com/api/products')
        state(peticion.data.products);
    
}

export default getProductsByCategoria