import React from 'react';
import ReactDOM from 'react-dom';
import { store } from './store';
import { Provider } from 'react-redux';
import { Main } from './routes';
import './App.css';
import './index.css';

ReactDOM.render(
    <Provider store={ store }>
        <div className="App">
            <Main/>
        </div>
    </Provider>,

    document.getElementById( 'root' ) );
