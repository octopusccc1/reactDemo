import { request } from '../../../utils';

import {
  SET_MARKET_PRECIPITATION_LIST,
  SET_MARKET_PRECIPITATION_LIST_LOADING,
} from './actionTypes';




const setMarketPrecipitationListLoading = (status) => {
  return {
    type: SET_MARKET_PRECIPITATION_LIST_LOADING,
    status
  }
}

const getMarketPrecipitationList = (list) => {
  return {
    type: SET_MARKET_PRECIPITATION_LIST,
    list
  }
}

export const getMarketPrecipitationList = (params) => {
  return dispatch => {
    setMarketPrecipitationListLoading(true)
    return request({
      url: '/api/prophet/poi/precipitation/list',
      method: 'GET',
      params
    })
      .then(
        (json) => {
          dispatch(setMarketPrecipitationListLoading(false));
          dispatch(setList(json.result));
        }
      )
  };
}