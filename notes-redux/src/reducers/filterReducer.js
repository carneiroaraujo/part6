
function filterReducer(state = "ALL", action) {
    if (action.type === 'SET_FILTER') {
        return action.payload
    }

    
    return state
}
export function setFilter(value) {
    return {
        type: "SET_FILTER",
        payload: value
    }
}

export default filterReducer