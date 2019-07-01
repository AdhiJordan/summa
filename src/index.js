import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import App from './App';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const middleware = applyMiddleware(logger, thunk);

const createStoreWithMiddleware = (createStore(middleware));

ReactDOM.render(
<Provider store={createStoreWithMiddleware}>
	<App />
</Provider>
, document.getElementById('root'));