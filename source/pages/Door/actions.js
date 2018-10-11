import {
    SET_SHIFT_TYPE,
} from './actionTypes';






/***********************demo action***************************************************************/
export const setShiftType = (shiftType) => {
    return {
        type:SET_SHIFT_TYPE,
        shiftType
    }
}


