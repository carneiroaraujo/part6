import { createSlice, current } from "@reduxjs/toolkit"

const anecdoteSlice = createSlice({
  name:"anecdotes",
  initialState:[],
  reducers: {
    vote(state, action) {
      console.log(current(state));
      const id = action.payload
      return state.map(anecdote => anecdote.id === id ? {...anecdote, votes: anecdote.votes+1} : anecdote)
    },
    addAnecdote(state, {payload}) {
      
      state.push(payload)
    },
    setAnecdotes(state, {payload}) {
      return payload
    }
  }
})

export const {vote, addAnecdote, setAnecdotes} = anecdoteSlice.actions
export default anecdoteSlice.reducer
