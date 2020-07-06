import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom'; // importação da biblioteca de rotas para web

import Home from './pages/Home'; //importa o componente Home
import CreatePoint from './pages/CreatePoint'; //importa o componente CreatePoint

const Routes = () => {
    return (
        <BrowserRouter>
            <Route component={Home} path="/" exact /> 
            <Route component={CreatePoint} path="/create-point" />
        </BrowserRouter>
    )
}

export default Routes;