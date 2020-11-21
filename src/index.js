import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.min.js';
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware  } from 'redux';
// import { BrowserRouter } from 'react-router-dom';
// import AppReducers from './reducers';
// import thunk from 'redux-thunk';

// let initialState = {};
// const appStore = createStore(
//    AppReducers,
//    //Browser addon Redux Devtools
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
//    //applyMiddleware(thunk)
//    );

ReactDOM.render(
  //  <Provider store={appStore}>
        <App />,
  //  </Provider>,
    
document.getElementById('app_root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
