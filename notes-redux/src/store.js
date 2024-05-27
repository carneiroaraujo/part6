import {configureStore} from "@reduxjs/toolkit"
import filterReducer from "./reducers/filterReducer"
import noteReducer from "./reducers/noteReducer"

export default configureStore({
    reducer: {
        notes: noteReducer,
        filter: filterReducer
    }
})



