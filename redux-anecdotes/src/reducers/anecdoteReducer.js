import { createSlice, current } from "@reduxjs/toolkit"
import anecdotesService from '../services/anecdotes'
const anecdoteSlice = createSlice({
  name:"anecdotes",
  initialState:[],
  reducers: {
    replace(state, {payload}) {
      return state.map(anecdote => anecdote.id === payload.id ? payload : anecdote)
    },
    appendAnecdote(state, {payload}) {
      state.push(payload)
    },
    setAnecdotes(state, {payload}) {
      return payload
    }
  }
}) 
const {replace, setAnecdotes, appendAnecdote} = anecdoteSlice.actions

export function initializeAnecdotes() {
  return async function (dispatch) {
    dispatch(setAnecdotes(await anecdotesService.getAll()))
  }
}
export function addAnecdote(content) {
  return async function (dispatch) {
    dispatch(appendAnecdote(await anecdotesService.createNew(content)))
  }
}
export function vote(anecdote) {
  return async function (dispatch) {
    
    dispatch(replace(await anecdotesService.vote(anecdote.id, {...anecdote, votes: anecdote.votes+1})))
  }
}

export default anecdoteSlice.reducer
