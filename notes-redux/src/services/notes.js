import axios from "axios"

const baseUrl = "http://10.0.0.20:3001/notes"

async function getAll() {
    return (await axios.get(baseUrl)).data
}

async function createNew(content) {
    return (await axios.post(baseUrl, {
        content,
        important:false
    })).data
}

export default {getAll, createNew}