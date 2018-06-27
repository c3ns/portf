import React from 'react';
import ReactDOM from 'react-dom';
import './sass/main.scss';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import App from './App';
import menuReducer from './reducers/menuReducer';

const rootReducer = combineReducers({
    menu: menuReducer,
});

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
    <Provider store={store}><App /></Provider>
    , document.getElementById('root'));
