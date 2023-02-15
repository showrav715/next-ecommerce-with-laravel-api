import React, { createContext, useEffect, useReducer } from 'react';
import Reducer from '../reducer/BlogReducer';
const BlogContext = createContext();

const initialState ={
    blogs: [],
    loading: false,
    error: null

}

const BlogContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(Reducer, initialState);
    const getBlogs = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        dispatch({ type: 'GET_BLOGS', payload: data });
    }

    return (
        <BlogContext.Provider value={{...state,getBlogs}}>
            {children}
        </BlogContext.Provider>
    )
} 

export { BlogContext, BlogContextProvider };