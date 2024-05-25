
const reducer = (state = "", action) => {
  switch (action.type) {
    case "SET_FILTER": 
      return action.payload
    default:
      return state

  }
}

export function setFilter(filter) {
  return {
    type: "SET_FILTER",
    payload: filter
  }
}

export default reducer