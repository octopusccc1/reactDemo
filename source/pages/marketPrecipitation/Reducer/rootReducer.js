import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import marketPrecipitationList from './marketPrecipitation';

const rootReducer = combineReducers({
  routing: routerReducer,
  marketPrecipitationList
});

export default rootReducer;
