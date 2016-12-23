import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk'; //允许action为函数，发异步请求
import promise from 'redux-promise'; //允许action为promise对象，发异步请求
import createLogger from 'redux-logger'; //记录action和nextState
import allReducers from './reducers/userReducers';
import App from './containers/App';


const middleware = applyMiddleware(thunk, createLogger());

const store = createStore(
    allReducers,
    compose(middleware, window.devToolsExtension ? window.devToolsExtension() : f => f)
);

ReactDOM.render(
	<Provider store={store}>
		<App>
		</App>
	</Provider>
	, document.getElementById('root')
);
