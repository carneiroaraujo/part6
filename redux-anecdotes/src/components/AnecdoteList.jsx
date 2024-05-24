import { useSelector, useDispatch} from "react-redux"
import { vote } from "../reducers/anecdoteReducer"
export default function AnecdoteList() {
    const dispatch = useDispatch()
    const handleVote = (id) => {
        dispatch(vote(id))
        console.log('vote', id)
      }
    const anecdotes = useSelector(state=>state)
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