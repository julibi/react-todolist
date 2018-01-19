import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import rootReducer from './reducers';
import Home from './components/Home';
import SearchContainer from './components/SearchContainer';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

const App = () => (
  <Provider store={createStoreWithMiddleware(rootReducer)}>
    <Router>
        <div>
          <div>
            <ul>
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/Search">Search</NavLink></li>
            </ul>
          </div>
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/Search" component={SearchContainer} />
          </div>
        </div>
      </Router>
  </Provider>
);

render(<App/>, document.getElementById('app'));