import axios from "axios";
import React, { createContext, useEffect, useReducer } from "react";
import ApiUrl from "../Api/ApiUrl";
import categoryReducer from "../reducer/CategoryReducer";
const CategoryContext = createContext();

const initialState = {
  categories: [],
  category: {},
  error: null,

};

const CategoryContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(categoryReducer, initialState);
  useEffect(() => {
    getCategories()
  }, []);


  // get all categories
  const getCategories = async () => {
    try {
      const response = await axios.get(`${ApiUrl.getCategories}`);
      dispatch({ type: "GET_CATEGORIES_SUCCESS", payload: response.data.data });
    } catch (error) {
      dispatch({ type: "GET_CATEGORIES_ERROR", payload: error });
    }
  };
  

  return (
    <CategoryContext.Provider value={{ ...state }}>
      {children}
    </CategoryContext.Provider>
  );
};

export { CategoryContext, CategoryContextProvider };
