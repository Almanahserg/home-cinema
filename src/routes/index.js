import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Data } from '../conteiners/GettingData';
import Header from "../components/Header";


export const Main = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' component={ Data } exact/>
                <Route path='/movies' component={ Header }/>
            </Switch>
        </BrowserRouter>
    )
};