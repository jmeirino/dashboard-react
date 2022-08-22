import { categorias } from "../data/categorias";

const getCategoriasByCategoria = (categoria) =>{

    const validCategoria = ["Headseat", "Mouse", "Teclado"];

    if (!validCategoria.includes(categoria)) {
        throw new Error(`Categoria inválida: ${categoria}`);
    }

    return categoria.filter ((categoria) => categoria === categoria);
}

export default getCategoriasByCategoria