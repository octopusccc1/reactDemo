import DEFAULT_STATE from './initialState';
import {
  SET_MARKET_PRECIPITATION_LIST,
  SET_MARKET_PRECIPITATION_LIST_LOADING,
} from './actionTypes';

const List = (state = DEFAULT_STATE.marketPrecipitation, action) => {
  switch (action.type) {
    case SET_MARKET_PRECIPITATION_LIST_LOADING:
      return Object.assign({}, state, {
        isMarketPrecipitationListLoading: action.status,
      });
    case SET_MARKET_PRECIPITATION_LIST:
      return Object.assign({}, state, {
        marketPrecipitationList: action.list,
      });
    default:
      return state;
  }
};

export default List;

