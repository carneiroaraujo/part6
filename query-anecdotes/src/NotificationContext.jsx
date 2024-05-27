import { createContext, useContext } from "react";

import { useReducer } from 'react'
function notificationReducer(state, action) {
    switch (action.type) {
        case "SHOW":
            return action.payload
        case "HIDE":
            return null
        default:
            return state
    }
}
const NotificationContext = createContext()

export function NotificationContextProvider(props) {
    const [notification, notificationDispatch] = useReducer(notificationReducer, null)
    return (
        <NotificationContext.Provider value={[notification, notificationDispatch]}>
            {props.children}
        </NotificationContext.Provider>
    )
}
export function useNotificationValue() {
    return useContext(NotificationContext)[0]
}
export function useNotificationDispatch() {
    return useContext(NotificationContext)[1]
}
export default NotificationContext