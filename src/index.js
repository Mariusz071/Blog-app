import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom';
import reducers from './reducers';

import PostsIndex from './components/posts_index';


serviceWorker.unregister();

const createStoreWithMiddleware = applyMiddleware()(createStore);



ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            <div>
                <Route path="/" component={PostsIndex} />
            </div>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));

