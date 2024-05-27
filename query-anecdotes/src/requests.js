import axios from "axios"
const baseUrl = "http://10.0.0.20:3001/anecdotes"

export function getAll() {
    return axios.get(baseUrl).then(r=>r.data)
}
export function createAnecdote(newAnecdote) {

    return axios.post(baseUrl, newAnecdote).then(r=>r.data)
}
export function updateAnecdote(changedAnecdote) {
    //
    return axios.put(baseUrl+"/"+changedAnecdote.id, changedAnecdote).then(r=>r.data)
}