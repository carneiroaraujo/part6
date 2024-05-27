import axios from "axios"

const baseUrl = "http://10.0.0.20:3001/anecdotes"

async function getAll() {
    return (await axios.get(baseUrl)).data
}
async function createNew(content) {
    return (await axios.post(baseUrl, {
        content,
        important: false,
        votes: 0
    })).data
}
async function vote(id, newObj) {
    console.log(newObj);
    return (await axios.put(baseUrl+"/"+id, newObj)).data
}


export default {getAll, createNew, vote}