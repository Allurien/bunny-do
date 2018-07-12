import React from 'react';
import BunnyList from './list';
import 'materialize-css/dist/css/materialize.min.css';
// import AddItem from '../components/add_item';
import {Route as BunnyRoute} from 'react-router-dom';
import {Switch as BunnySwitch} from 'react-router-dom';
// import ViewItem from './view_item';
// import NotFound from './notfound';

const App = () => (
    <div className="container">
        <BunnySwitch>
            <BunnyRoute exact path='/' component={BunnyList} />
            {/* <BunnyRoute path='/add-item' component={AddItem} />
            <BunnyRoute exact path='/todo/:bunnyId' component={ViewItem} /> */}

        </BunnySwitch>
    </div>
);

export default App;
