import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "notification",
    initialState: {isVisible: false, content: null},
    reducers: {
        setNotification(state, {payload}) {
            console.log("hi");
            return {
                isVisible: true,
                content: payload
            } 
        },
        hideNotification(state, {payload}) {
            state.isVisible = false
        }
    }
})

export const {setNotification, hideNotification} = slice.actions
export default slice.reducer