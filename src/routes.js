import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from './pages/home'

export default function Routes()
{
    return(
        <Switch>
            <Route path="/" exact component={Home} />
            <Redirect to="/"/> 
        </Switch>
    );
}