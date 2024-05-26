import { useDispatch } from "react-redux"
import { addAnecdote } from '../reducers/anecdoteReducer'
import { hideNotification, setNotification } from "../reducers/notificationReducer"
import anecdotesService from "../services/anecdotes"

export default function AnecdoteForm() {
    const dispatch = useDispatch()
    async function handleSubmit(event) {
        event.preventDefault()
        const content = event.target.content.value
        event.target.content.value = ""
        const newAnecdote = await anecdotesService.createNew(content)
        dispatch(addAnecdote(newAnecdote))
        dispatch(setNotification(`you created '${content}'`))
        setTimeout(() => {
            dispatch(hideNotification())
        }, 5000)

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