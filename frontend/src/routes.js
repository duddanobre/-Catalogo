import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Login from './pages/Login'
import Register from './pages/Register';
import Netflix from './pages/Netflix';
//import Teste from './components/SliderComponent';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/series" component={Netflix} />
            </Switch>
        </BrowserRouter>

    );
}