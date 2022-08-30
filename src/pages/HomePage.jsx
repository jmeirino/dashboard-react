import React from 'react';
import TotalCategorias from './TotalCategorias';
import TotalProductos from './TotalProductos';
import TotalUsuarios from './TotalUsuarios';


const HomePage = () => {
    return (
        <div className='main-home-container'>
        <div className='upper-container'>
  
          <TotalProductos/>
          <TotalCategorias/>
          <TotalUsuarios/>

  
        </div>
  
        <div className='middle-container'>
        </div>
</div>
    );
};

export default HomePage;