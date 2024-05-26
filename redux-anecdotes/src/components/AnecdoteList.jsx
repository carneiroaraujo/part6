import { useSelector, useDispatch} from "react-redux"
import { vote } from "../reducers/anecdoteReducer"
import { setNotification, hideNotification } from "../reducers/notificationReducer"
export default function AnecdoteList() {
    const dispatch = useDispatch()
    const handleVote = (id, content) => {
        dispatch(vote(id))
        console.log('vote', id)
        dispatch(setNotification(`you voted '${content}'`))
        setTimeout(() => {
            dispatch(hideNotification())
        }, 5000);
    }
    const anecdotes = useSelector(({anecdotes, filter})=>{
        return anecdotes.filter(anecdote=>anecdote.content.includes(filter))
    })

    
    return (
        <>
            {anecdotes
                .sort((a, b) => b.votes - a.votes)
                .map(anecdote =>
                    <div key={anecdote.id}>
                        <div>
                            {anecdote.content}
                        </div>
                        <div>
                            has {anecdote.votes}
                            <button onClick={() => handleVote(anecdote.id, anecdote.content)}>vote</button>
                        </div>
                    </div>
                )
            }
        </>
    )
}