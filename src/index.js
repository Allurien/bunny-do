import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as BunnyRouter} from 'react-router-dom';
import {Provider as BunnyProvider} from 'react-redux';
import {createStore as createBunnyStore} from 'redux';
import {applyMiddleware as applyBunnyware} from 'redux';
import bunnyPromise from 'redux-promise';
import rootBunnyReducer from './reducers';

import App from './components/app';

const store= createBunnyStore(rootBunnyReducer, {}, applyBunnyware(bunnyPromise));

ReactDOM.render(
    <BunnyProvider store={store}>
        <BunnyRouter>
            <App />
        </BunnyRouter>
    </BunnyProvider>,
    document.getElementById('root')
);
