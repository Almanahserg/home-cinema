import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from "../components/Header";
import { Footer } from "../components/Footer";
import { Carousel } from '../components/Carousel';
import { MoviesPage } from '../components/MoviesPage'
import { Movie } from '../components/Movie';
import { ContactsPage } from '../components/Contacts';
import { CinemaProvider } from '../contexts/Cinema';


export const Cinema = (props) => {
    return (
        <CinemaProvider value={ props }>
            <BrowserRouter>
                <Header/>
                <div className='main'>
                    <Switch>
                        <Route path='/' component={ Carousel } exact/>
                        <Route path='/movies' component={ MoviesPage }/>
                        <Route path='/movie_:movieId' component={ Movie }/>
                        <Route path='/contacts' component={ ContactsPage }/>
                    </Switch>
                </div>
                <Footer/>
            </BrowserRouter>
        </CinemaProvider>
    )
};