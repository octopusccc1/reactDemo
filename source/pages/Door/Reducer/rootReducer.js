import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import doorReducer from './doorReducer';
import technologyReducer from './technologyReducer';
const rootReducer = combineReducers({
    routing: routerReducer,
    doorReducer,
    technologyReducer
});


export default rootReducer;