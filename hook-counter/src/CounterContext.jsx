import { useReducer, useContext, createContext } from "react";
function counterReducer(state, action) {
    switch (action.type) {
        case "INC":
            return state + 1
        case "DEC":
            return state - 1
        case "ZERO":
            return 0
        default:
            return state
    }
}
const CounterContext = createContext()

export function useCounterValue() {
    return useContext(CounterContext)[0]
}

export function useCounterDispatch() {
    return useContext(CounterContext)[1]
}

export function CounterContextProvider(props) {
  const [counter, counterDispatch] = useReducer(counterReducer, 0)
  return (
    <CounterContext.Provider value={[counter, counterDispatch]}>
        {props.children}
    </CounterContext.Provider>
  )
}
export default CounterContext