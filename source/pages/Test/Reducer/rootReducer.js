import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import testReducer from './testReducer';
const rootReducer = combineReducers({
    routing: routerReducer,
    testReducer,
});


export default rootReducer;