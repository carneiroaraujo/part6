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
function generateId() {
    return Number((Math.random()*10e6).toFixed(0))
  }
export function createNote(content) {
    return {
        type: "NEW_NOTE",
        payload: {
            content,
            important: false,
            id: generateId()
        }
    }
}
export function toggleImportanceOf(id) {
    return {
        type: "TOGGLE_IMPORTANCE",
        payload: {
            id
        }
    }
}

export default noteReducer