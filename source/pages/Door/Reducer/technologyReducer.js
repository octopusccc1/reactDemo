import DEFAULT_STATE from './initialState';
import {
  SET_SHIFT_TYPE,
} from '../actionTypes';
const technologyReducer = (state = DEFAULT_STATE.technology, action) => {
  switch (action.type) {
    case SET_SHIFT_TYPE:
      return Object.assign({}, state, {
        shiftType: action.shiftType
      });
    default:
      return state;
  }
}
export default technologyReducer;