import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CounterReducer from "./store/reducers/counter";
import ResultReducer from "./store/reducers/result";

const rootReducer = combineReducers({
    ctr: CounterReducer,
    res: ResultReducer
})

const loggerMiddleware = store =>{
    return next =>{
        return action =>{
            console.log("[Middleware dispatching:] ",action);
            console.log("[Middleware state:]", store.getState())
            const result = next(action)
            return result;
        }
    };
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // google chrome redux devTool setup

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(loggerMiddleware, thunk)) );  // applying middleware to store 

ReactDOM.render(
  <React.StrictMode>
   <Provider store={store} ><App /></Provider> 
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
