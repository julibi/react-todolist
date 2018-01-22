import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import { routerMiddleware, syncHistoryWithStore } from 'react-router-redux';
import { createBrowserHistory } from 'history';
import rootReducer from './reducers/index';
import reducers from './reducers';
import Home from './components/Home';
import TodosContainer from './components/TodosContainer';
import SomeOther from './components/SomeOther';

const myHistory = createBrowserHistory();

const myRouterMiddleWare = routerMiddleware(myHistory);
const store = createStore(rootReducer, applyMiddleware(ReduxPromise, myRouterMiddleWare));
const history = syncHistoryWithStore(myHistory, store);

const App = () => (
  <Provider store={store}>
    <Router history={history}>
        <div>
          <div>
            <ul>
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/todos">Todos</NavLink></li>
              <li><NavLink to="/someother">SomeOther</NavLink></li>
            </ul>
          </div>
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/todos" component={TodosContainer} />
            <Route path="/someother" component={SomeOther} />
          </div>
        </div>
      </Router>
  </Provider>
);

render(<App/>, document.getElementById('app'));