
// import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware  } from 'redux';
import App from './containers/App';
// import mophApp from './reducers';
// import thunk from 'redux-thunk';
// import HomeSweetHome from './components/HomeSweetHome'

// let initialState = {};
// const store = createStore(mophApp, initialState, applyMiddleware(thunk));

ReactDOM.render(
  // <Provider store={store}>
    // <BrowserRouter>
      <App />,
    // </BrowserRouter>,
  // </Provider>,
  document.getElementById('app_root'),
);