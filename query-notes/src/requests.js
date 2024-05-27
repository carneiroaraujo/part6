import axios from "axios"

const baseUrl = "http://10.0.0.20:3001/notes"

export function getNotes() {
    return axios.get(baseUrl).then(res=>res.data)
}

export function createNote(newNote) {
    return axios.post(baseUrl, newNote).then(res=>res.data)
}

export function updateNote(updatedNote) {
    return axios.put(baseUrl+"/"+updatedNote.id, updatedNote).then(res=>res.data)
}