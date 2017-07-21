import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';
import configureStore from './stores/configureStore';
import * as actions from './actions';
import App from './components/App';
import PlaceFood from './components/PlaceFood';

const images = [
  {
    image: 'https://unsplash.it/100'
  },
  {
    image: 'https://unsplash.it/200'
  },
]

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

store.dispatch(actions.setImages(images));
// store.dispatch(actions.getRandomImage());

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={PlaceFood} />
        <Route path="/" component={PlaceFood} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);

module.hot.accept();