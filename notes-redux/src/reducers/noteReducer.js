function noteReducer(state = [], action) {
    if (action.type === 'NEW_NOTE') {
        return state.concat(action.payload)
    }
    else if (action.type === "TOGGLE_IMPORTANCE") {
        return state.map(note => {
            return note .id === action.payload.id
            ? {...note, important:!note.important}
            : note
        })
    }
    return state
}

// const store = createStore(noteReducer)
export default noteReducer