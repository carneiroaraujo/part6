import { useDispatch } from "react-redux";
import { createNote } from "../reducers/noteReducer";
import noteService from "../services/notes"

function NoteForm() {
    const dispatch = useDispatch()

    async function handleAdd(event) {
        event.preventDefault()
        const content = event.target.note.value
        event.target.note.value = ""
        // const newNote = await noteService.createNew(content)
        dispatch(createNote(content))
    }

    return (
        <form onSubmit={handleAdd}>
            <input name="note" />
            <button type="submit">add</button>
        </form>
    )
}

export default NoteForm