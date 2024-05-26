import { useEffect } from "react"
import { useDispatch } from "react-redux"
import NoteForm from "./components/NoteForm"
import Notes from "./components/Notes"
import VisibilityFilter from "./components/VisibilityFilter"

import noteService from "./services/notes.js"
import { setNotes } from "./reducers/noteReducer"

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    noteService.getAll().then(n=>{
      dispatch(setNotes(n))
    })
  }, [])  

  return (
    <div>
      <NoteForm />
      <VisibilityFilter />
      <Notes />
    </div>
  )
}

export default App