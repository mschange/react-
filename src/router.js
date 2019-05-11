import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/home'
import Sort from './components/sort'
import Shop from './components/shop'
import My from './components/my'

export default () => (
    <BrowserRouter>
        <Switch>
            <Route path="/home" component= {Home}></Route>
            <Route path="/sort" component= {Sort}></Route>
            <Route path="/shop" component= {Shop}></Route>
            <Route path="/my" component= {My}></Route>
        </Switch>
    </BrowserRouter>
)