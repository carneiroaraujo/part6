import { useSelector, useDispatch} from "react-redux"
import { vote } from "../reducers/anecdoteReducer"
export default function AnecdoteList() {
    const dispatch = useDispatch()
    const handleVote = (id) => {
        dispatch(vote(id))
        console.log('vote', id)
    }
    const anecdotes = useSelector(({anecdotes, filter})=>{
        return anecdotes.filter(anecdote=>anecdote.content.includes(filter))
        console.log(anecdotes.filter(anecdote=>anecdote.content.includes(filter)));
        return anecdotes.map(anecdote=>anecdote)
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
                            <button onClick={() => handleVote(anecdote.id)}>vote</button>
                        </div>
                    </div>
                )
            }
        </>
    )
}