import { useDispatch } from "react-redux"
import { addAnecdote } from '../reducers/anecdoteReducer'

export default function AnecdoteForm() {
    const dispatch = useDispatch()
    function handleSubmit(event) {
        event.preventDefault()
        const content = event.target.content.value
        event.target.content.value = ""
        dispatch(addAnecdote(content))
    
      }
    return (
        <>
            <h2>create new</h2>
            <form onSubmit={handleSubmit}>
                <div><input name='content' /></div>
                <button type='submit'>create</button>
            </form>
        </>
    )
}