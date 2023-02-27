import React, { createContext, useReducer } from 'react'
import reducer from '../reducer/UserContext';
const UserContext = createContext();
const initialState = {
    user: null,
    access_token: null,
    refresh_token: null,
    isLogged: false,
}
const UserProvider = ({ children }) => { 
    // reducer 
    const [state,dispatch] = useReducer(reducer,initialState)
    return (
        <UserContext.Provider value={{...state}}>
            {children}
        </UserContext.Provider>

    )
}

export { UserContext, UserProvider }