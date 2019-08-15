import { createStore, applyMiddleware, compose } from 'redux';
import { rootReducer } from '../reducers';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';

const composeEnchancers = (window && window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__']) || compose;

export let store = createStore( rootReducer, composeEnchancers(applyMiddleware( thunk )));
export const history = createBrowserHistory();