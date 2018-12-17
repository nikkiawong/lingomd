import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore, applyMiddleware } from 'redux';
import App from './components/App';
import { AppContainer } from 'react-hot-loader';
import { HashRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import searchDoctorReducer from './reducers/searchDoctorReducer';
import middlewareLogger from './middleware/middleware-logger';
import thunkMiddleware from 'redux-thunk';

const store = createStore(searchDoctorReducer, applyMiddleware(middlewareLogger, thunkMiddleware));

  ReactDOM.render(
    <HashRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </HashRouter>,
  document.getElementById('root')
  );

serviceWorker.unregister();
