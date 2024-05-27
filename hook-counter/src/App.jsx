import CounterContext from './CounterContext'
import { useContext } from 'react'
import {useCounterValue} from "./CounterContext"
function counterReducer(state, action) {
  switch (action.type) {
    case "INC":
      return state +1
    case "DEC":
      return state -1
    case "ZERO":
      return 0
    default:
      return state
  }
}
function Button({type, label}) {
  const [counter, counterDispatch] = useContext(CounterContext)
  return (
    <button onClick={() => counterDispatch({type})}>{label}</button>
  )
}
function Display() {
  const counter = useCounterValue()
  return (
    <div>
      {counter}
    </div>
  )
}
function App() {
 
  return (
    <div>
      <Display></Display>
      <div>        
        <Button type="INC" label="+">+</Button> 
        <Button type="DEC" label="-">-</Button> 
        <Button type="ZERO" label="0">0</Button> 
      </div>
    </div>
  )
}

export default App
