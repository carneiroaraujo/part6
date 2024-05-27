import { useDispatch } from "react-redux"
import { addAnecdote } from '../reducers/anecdoteReducer'
import { notify } from "../reducers/notificationReducer"

export default function AnecdoteForm() {
    const dispatch = useDispatch()
    async function handleSubmit(event) {
        event.preventDefault()
        const content = event.target.content.value
        event.target.content.value = ""
        dispatch(addAnecdote(content))
        dispatch(notify(`you created '${content}'`), 10)
        
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