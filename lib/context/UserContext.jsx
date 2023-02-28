import React, { createContext, useEffect, useReducer, useState } from 'react'
import reducer from '../reducer/UserContext';
const UserContext = createContext();

const initialState = {
    user: null,
    refresh_token: null,
    isLogged: false,
    setUser: () => { },
    setAccessToken: () => { },
}
const UserProvider = ({ children }) => { 
    
    const [state, dispatch] = useReducer(reducer, initialState);


    const setUser = (user) => {
        dispatch({
            type: "SET_USER",
            payload: user
        })
    }

    const setAccessToken = (token) => { 
        if (token) {
            _setAccessToken(token);
            localStorage.setItem('access_token', token);
        } else {
            _setAccessToken(null);
            localStorage.removeItem('access_token');
        }
        dispatch({
            type: "SET_ACCESS_TOKEN",
            payload: token
        })
    }

    return (
        <UserContext.Provider value={{...state,setAccessToken,setUser}}>
            {children}
        </UserContext.Provider>

    )
}

export { UserContext, UserProvider }