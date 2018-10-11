import DEFAULT_STATE from './initialState';
import {
} from '../actionTypes';
const testReducer = (state = DEFAULT_STATE.test, action) => {
	switch (action.type) {
		default:
			return state;
	}
}
export default testReducer ;