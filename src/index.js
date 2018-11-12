import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import promise from 'redux-promise';

import reducers from './reducers';


import NavBar from './components/main_navbar';
import MainContainer from './components/main_container';
import BottomAppBar from './components/footer';

serviceWorker.unregister();

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);


ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            <div>
                <NavBar />
                    <MainContainer/>
                <BottomAppBar/>
            </div>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));

