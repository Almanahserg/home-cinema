import { createStore, applyMiddleware, compose } from 'redux';
import { rootReducer } from '../reducers';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';

const composeEnchancers = (window && window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__']) || compose;

export let store = createStore( rootReducer, composeEnchancers(applyMiddleware( thunk )));
export const history = createBrowserHistory();

export const COLOR = {
    gold: '#b5a551',
    white: '#e2e2e2'
};

export let Menu = {
    show: false
};


export let UserInfo = {
    label: "Личный кабинет"
};