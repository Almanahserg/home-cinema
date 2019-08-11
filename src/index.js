import React from 'react';
import ReactDOM from 'react-dom';
import { store } from './store';
import { Provider } from 'react-redux';
import './App.css';
import './index.css';
import { Data } from "./conteiners/GettingData";

ReactDOM.render(
    <Provider store={ store }>
        <div className="App">
            <Data/>
        </div>
    </Provider>,

    document.getElementById( 'root' ) );
