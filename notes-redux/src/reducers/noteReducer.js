import {createSlice, current} from "@reduxjs/toolkit"

const initialState = [
    {
        content: 'reducer defines how redux store works',
        important: true,
        id: 1,
      },
      {
        content: 'state of store can contain any data',
        important: false,
        id: 2,
      },
]
function generateId() {
    return Number((Math.random()*10e6).toFixed(0))
  }

const noteSlice = createSlice({
    name: "notes",
    initialState,
    reducers: {
        createNote(state, action) {
            const content = action.payload
            state.push({
                content,
                important: false,
                id: generateId()
            })
        },
        toggleImportanceOf(state, {id}) {
            console.log(current(state));
            return state.map(note => note.id===id ? {...note, important:!note.important} : note)
        }
    }
})

export const { createNote, toggleImportanceOf} = noteSlice.actions
export default noteSlice.reducer


// function noteReducer(state = initialState, action) {
//     if (action.type === 'NEW_NOTE') {
//         return state.concat(action.payload)
//     }
//     else if (action.type === "TOGGLE_IMPORTANCE") {
//         return state.map(note => {
//             return note .id === action.payload.id
//             ? {...note, important:!note.important}
//             : note
//         })
//     }
//     return state
// }

// export function createNote(content) {
//     return {
//         type: "NEW_NOTE",
//         payload: {
//             content,
//             important: false,
//             id: generateId()
//         }
//     }
// }
// export function toggleImportanceOf(id) {
//     return {
//         type: "TOGGLE_IMPORTANCE",
//         payload: {
//             id
//         }
//     }
// }

// export default noteReducer