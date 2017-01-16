require('babel-polyfill');

import * as actions from './actions/index';
import * as reducers from './reducers/index';
import store from './store';

store.dispatch(actions.addRepository('joe'));
store.dispatch(actions.addRepository('maria'));
store.dispatch(actions.rateRepository('maria','5 starts'))
console.log(store.getState())
