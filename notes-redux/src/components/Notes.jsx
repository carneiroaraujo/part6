import { useDispatch, useSelector } from "react-redux";
import { toggleImportanceOf } from "../reducers/noteReducer";
function Note({ note, onClick }) {
    return (
        <li onClick={() => onClick(note.id)}>
            {note.content} <strong>{note.important ? 'important' : ''}</strong>
        </li>
    )
}
function Notes() {
    const notes = useSelector(state => state)
    const dispatch = useDispatch()
    return (
        <ul>
            {notes.map(note =>
                <Note
                    note={note}
                    key={note.id}
                    onClick={() => dispatch(toggleImportanceOf(note.id))}

                />

            )}
        </ul>
    )
}

export default Notes