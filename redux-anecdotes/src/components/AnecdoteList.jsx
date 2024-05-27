import { useSelector, useDispatch} from "react-redux"
import { vote } from "../reducers/anecdoteReducer"
import { notify } from "../reducers/notificationReducer"
export default function AnecdoteList() {
    const dispatch = useDispatch()
    const handleVote = (id, anecdote) => {
        dispatch(vote(anecdote))
        console.log('vote', id)
        dispatch(notify(`you voted '${anecdote.content}'`, 10))
       
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
                            <button onClick={() => handleVote(anecdote.id, anecdote)}>vote</button>
                        </div>
                    </div>
                )
            }
        </>
    )
}