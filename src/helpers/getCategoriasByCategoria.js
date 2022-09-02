import axios from 'axios'; 

const getCategoriasByCategoria = async (state) =>{
    const peticion = await axios.get ('https://dragontech5.herokuapp.com/api/products')
        state(peticion.data.countByCategory);
    
}

//export default getProductsByCategoria



//const getCategoriasByCategoria = (categoria) =>{

    //const validCategoria = ["Headseat", "Mouse", "Teclado"];

    //if (!validCategoria.includes(categoria)) {
      //  throw new Error(`Categoria inválida: ${categoria}`);
   // }

    //return categoria.filter ((categoria) => categoria === categoria);
//}

export default getCategoriasByCategoria