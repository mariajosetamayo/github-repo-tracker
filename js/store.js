import {createStore} from 'redux';

import * as reducers from './reducers/index';

export default createStore(reducers.repositoryReducer); // we acreate a store using the createStore method telling it to use the repositoryReducer
                                                       // to handle any actions that are dispatched.
