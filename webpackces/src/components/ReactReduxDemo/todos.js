
const Reducers = (state = { count: 0,themeColor:'blue' }, action) => {
    const { type, payload } = action;
    switch (action.type) {
        case 'INCREASE': 
        return { ...state,count: state.count + 1 }
        
        case 'DECREASE': 
        return { ...state,count: state.count - 1 }
        
        case 'CHANGE_COLOR': 
        if(state.themeColor==='red'){
            return{...state,themeColor:'blue'}
        }else{
            return{...state,themeColor:'red'}
        }
        
        
        default: return state;
    }
}

export default Reducers;