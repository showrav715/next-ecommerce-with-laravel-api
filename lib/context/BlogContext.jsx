import { createContext, useEffect, useReducer } from "react";
import ApiUrl from "../Api/ApiUrl";
import reducer from "../reducer/BlogReducer";

const BlogContext = createContext();

const initialState = {
  blogs: [],
  latest_blogs: [],
};

const BlogContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    getBlogs();
  }, []);
  const getBlogs = async () => {
    const response = await fetch(ApiUrl.getBlogs);
    const data = await response.json();
    dispatch({ type: "GET_BLOGS", payload: data.data });
  };

  return <BlogContext.Provider value={state}>{children}</BlogContext.Provider>;
};

export { BlogContext, BlogContextProvider };
