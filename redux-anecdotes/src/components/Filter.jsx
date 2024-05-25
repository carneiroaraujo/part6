import {useDispatch} from "react-redux"
import { setFilter } from "../reducers/filterReducer"
export default function Filter() {
    const dispatch = useDispatch()
    const style = {
        marginBottom: 10
    }
    return (
        <div style={style}>
            filter <input type="text" onChange={(e) => {dispatch(setFilter(e.target.value))}}/>
        </div>
    )
}