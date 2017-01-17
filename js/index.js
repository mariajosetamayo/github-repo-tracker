require('babel-polyfill');

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import store from './store';
import RepositoryList from './components/repository-list';

// You pass store as a prop of Provider
document.addEventListener('DOMContentLoaded', () =>
    ReactDOM.render( <Provider store={store}>
            <RepositoryList />
        </Provider>,
        document.getElementById('app')
    )
);

// import * as actions from './actions/index';
// import * as reducers from './reducers/index';
// import store from './store';
//
// store.dispatch(actions.addRepository('joe'));
// store.dispatch(actions.addRepository('maria'));
// store.dispatch(actions.rateRepository('maria','5 starts'))
// console.log(store.getState())
