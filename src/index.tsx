import React from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';
import reducers from './data/root-reducer';
import { Route, Switch } from 'react-router';

import { Provider, ReactReduxContext  } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createBrowserHistory } from 'history';
import createSagaMiddleWare from 'redux-saga';
import rootSaga from './data/root-saga'; 
import { ConnectedRouter } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension'

import Layout from './components/Layout';
import Home from './Scenes/Home';

export const history = createBrowserHistory()
const sagaMiddleWare = createSagaMiddleWare();
const enhancer = composeWithDevTools(applyMiddleware(sagaMiddleWare));
const store = createStore(reducers(history), enhancer);

sagaMiddleWare.run(rootSaga);

ReactDOM.render(
  <Provider store={store} context={ReactReduxContext}>
      <ConnectedRouter history={history} context={ReactReduxContext} >
        <Layout>
            <Switch>
              <Route exact path="/" component={Home}/>
            </Switch>         
        </Layout>
      </ConnectedRouter>
      
    </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
