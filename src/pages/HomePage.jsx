import React from 'react';
import TotalDeProductos from '../components/TotalDeProductos';
import TotalDeUsuarios from '../components/TotalDeUsuarios';



const HomePage = () => {
    return (
        <div className='main-home-container'>
        <div className='upper-container'>
          <TotalDeProductos/>
          <TotalDeUsuarios/>

        </div>
  
        <div className='middle-container'>
        </div>
</div>
    );
};

export default HomePage;