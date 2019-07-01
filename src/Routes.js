import React, {Component} from 'react';
import { Route  } from 'react-router';
import { BrowserRouter, Switch, HashRouter } from 'react-router-dom';
import App from './App.js';
import List from './List';


export default class Routes extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={App} />
                    <Route exact path='/home' component={App} />
                    <Route exact path='/list' component={List} />
                </Switch>
            </BrowserRouter>
        );
    }
}
