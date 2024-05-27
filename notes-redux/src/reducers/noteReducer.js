import { createSlice, current } from "@reduxjs/toolkit"
import noteService from "../services/notes"

const noteSlice = createSlice({
    name: "notes",
    initialState: [],
    reducers: {
        appendNote(state, action) {
            state.push(action.payload)
        },
        toggleImportanceOf(state, { payload }) {
            console.log(current(state));
            return state.map(note => note.id === payload ? { ...note, important: !note.important } : note)
        },
        setNotes(state, action) {
            return action.payload
        }
    }
})

export function initializeNotes() {
    return async function (dispatch) {
        const notes = await noteService.getAll()
        dispatch(setNotes(notes))
    }
}
export function createNote(content) {
    return async function (dispatch) {

        const newNote = await noteService.createNew(content)
        dispatch(appendNote(newNote))
    }
}

export const { toggleImportanceOf, appendNote, setNotes } = noteSlice.actions
export default noteSlice.reducer
