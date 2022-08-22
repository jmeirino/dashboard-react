import { productos } from "../data/productos";

const getProductsByCategoria = (categoria) =>{

    const validCategoria = ["Headseat", "Mouse", "Teclado"];

    if (!validCategoria.includes(categoria)) {
        throw new Error(`Categoria inválida: ${categoria}`);
    }

    return productos.filter ((producto) => producto.categoria === categoria);
}

export default getProductsByCategoria