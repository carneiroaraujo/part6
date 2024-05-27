
import { createSlice } from "@reduxjs/toolkit"


const slice = createSlice({
  name:"filter",
  initialState: "",
  reducers: {
    setFilter(state, {payload}) {
      console.log("hello");
      return payload
    }
  }
})

export const {setFilter} = slice.actions
export default slice.reducer

