import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import HomePage from './pages/home'

export default function Routes()
{
    return(
        <Switch>
            <Route path="/" exact component={HomePage} />
            <Redirect to="/"/> 
        </Switch>
    );
}