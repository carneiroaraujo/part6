import { useDispatch } from "react-redux";
import { setFilter } from "../reducers/filterReducer";
function VisibilityFilter() {
    const dispatch = useDispatch()
    function filterSelected(value) {
        dispatch(setFilter(value))
    }
    return (
        <div>
            <input type="radio" name="filter" onChange={() => { filterSelected("ALL") }} />all
            <input type="radio" name="filter" onChange={() => { filterSelected("IMPORTANT") }} />important
            <input type="radio" name="filter" onChange={() => { filterSelected("NONIMPORTANT") }} />nonimportant
        </div>
    )
}

export default VisibilityFilter