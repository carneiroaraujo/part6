import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "notification",
    initialState: {isVisible: false, content: null},
    reducers: {
        setContent(state, {payload}) {
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

const {setContent, hideNotification} = slice.actions

export function notify(content, duration) {
    return async function (dispatch) {
        dispatch(setContent(content))
        setTimeout(() => {
            dispatch(hideNotification())
        }, duration*1000)
    }
}


export default slice.reducer