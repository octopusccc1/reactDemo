
const Reducers = (state = { count: 0 }, action) => {
    const { type, payload } = action;
    switch (action.type) {
        case 'INCREASE': return { count: state.count + 1 };
        case 'DECREASE': return { count: state.count - 1 };
        default: return state;
    }
}

export default Reducers;