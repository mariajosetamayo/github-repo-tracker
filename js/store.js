import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import * as reducers from './reducers/index';

export default createStore(reducers.repositoryReducer, applyMiddleware(thunk)); // we acreate a store using the createStore method telling it to use the repositoryReducer
                                                       // to handle any actions that are dispatched.
