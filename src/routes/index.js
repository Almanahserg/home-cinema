import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Data } from '../conteiners/GettingData';
import Header from "../components/Header";
import { Footer } from "../components/Footer";
import { Carousel } from '../components/Carousel';


export const Main = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route path='/' component={ Carousel } exact/>
                <Route path='/movies' component={ Data }/>
            </Switch>
            <Footer/>
        </BrowserRouter>
    )
};