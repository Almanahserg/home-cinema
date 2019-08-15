import React from 'react';
import ReactDOM from 'react-dom';
import { store } from './store';
import { Provider } from 'react-redux';
import './App.css';
import './index.css';
import { Data } from "./conteiners/DataContainer";
import { CookiesProvider } from 'react-cookie';

ReactDOM.render(
    <Provider store={ store }>
        <CookiesProvider>
            <div className="App">
                <Data/>
            </div>
        </CookiesProvider>
    </Provider>,
    document.getElementById( 'root' ) );
