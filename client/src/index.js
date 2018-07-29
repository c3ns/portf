import React from 'react';
import ReactDOM from 'react-dom';
import './sass/main.scss';
import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import App from './App';
import menuReducer from './reducers/menuReducer';
import elementsReducer from './reducers/elementsReducer';
import projectsReducer from './reducers/projectsReducer';
import experienceReducer from './reducers/experienceReducer';
import pageReducer from './reducers/pageReducer';
import authReducer from './reducers/authReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({
    auth: authReducer,
    menu: menuReducer,
    elements: elementsReducer,
    projects: projectsReducer,
    experience: experienceReducer,
    page:pageReducer,
});
const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
    <Provider store={store}><App /></Provider>
    , document.getElementById('root'));
