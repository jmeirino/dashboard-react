import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PublicNavigation from '../components/PublicNavigation';
import AdminPage from '../pages/admin/AdminPage';
import HomePage from '../pages/HomePage';
import TotalCategorias from '../pages/TotalCategorias';
import TotalProductos from '../pages/TotalProductos';
import TotalUsuarios from '../pages/TotalUsuarios';

const AppRouter = () => {
    return (
        <>
        <PublicNavigation/>

        <Routes>
            <Route path='/' element= { <HomePage/> } /> 
            <Route path='productos' element= { <TotalProductos/> } /> 
            <Route path='categorias' element= { <TotalCategorias/> } /> 
            <Route path='usuarios' element= { <TotalUsuarios/> } /> 
            <Route path='admin' element= { <AdminPage/> } /> 
        </Routes>

        </>
    );
};

export default AppRouter;