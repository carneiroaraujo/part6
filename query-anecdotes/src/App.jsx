import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'
import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query'
import { updateAnecdote, getAll } from './requests'
// function test(anecdote) {
//   console.log(anecdote);
//   anecdote.votes ++
//   return anecdote
// }
const App = () => {
  const queryClient = useQueryClient()
  const updateAnecdoteMutation = useMutation({
    mutationFn: updateAnecdote,
    onSuccess: function (newAnecdote) {

      const anecdotes = queryClient.getQueryData(["anecdotes"])
      queryClient.setQueryData(["anecdotes"], anecdotes.map(anecdote => {
        return anecdote.id === newAnecdote.id ? newAnecdote : anecdote
      }))
    }
  })
  const handleVote = (anecdote) => {  
    console.log('vote')
    updateAnecdoteMutation.mutate({...anecdote, votes:anecdote.votes+1})
  }

  let anecdotes = []
  const result = useQuery({
    queryKey: ["anecdotes"],
    queryFn: getAll,
    retry: false
  })

  switch (result.status) {
    case "pending":
      return <div>content is loading...</div>
    case "error":
      return <div>anecdote service not available due to problems in server</div>
  }

  anecdotes = result.data// console.log(result.data);
  return (
    <div>
      <h3>Anecdote app</h3>
    
      <Notification />
      <AnecdoteForm />
    
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVote(anecdote)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
