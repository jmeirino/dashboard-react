import React from 'react';
import AppRouter from '../routes/AppRouter';
import Image from '../public/logo2.png';

const MainApp = () => {
    return (
        <section className='container'>
            <img className='imagen logo' src={require('../public/logo2.png')}/>
        <hr/>    

        <AppRouter/>
        </section>
       
    );
};

export default MainApp;