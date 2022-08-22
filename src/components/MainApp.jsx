import React from 'react';
import AppRouter from '../routes/AppRouter';

const MainApp = () => {
    return (
        <section className='container'>
            <h1>Dashboard Dragon Tech</h1>
        <hr/>    

        <AppRouter/>
        </section>
       
    );
};

export default MainApp;