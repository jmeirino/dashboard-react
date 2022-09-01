import React from 'react';
import TotalDeCategorias from '../components/TotalDeCategorias';
import TotalDeProductos from '../components/TotalDeProductos';
import TotalDeUsuarios from '../components/TotalDeUsuarios';
import UltimoProducto from '../components/UltimoProducto';
import UltimoUsuario from '../components/UltimoUsuario';




const HomePage = () => {
    return (
        <div className='main-home-container'>
        <div className='upper-container'>
          <TotalDeProductos/>
          <TotalDeUsuarios/>
          <TotalDeCategorias/>
          <UltimoProducto/>
          <UltimoUsuario/>

        </div>
  
        <div className='middle-container'>
        </div>
</div>
    );
};

export default HomePage;