import React, { createContext, useReducer } from "react";
import reducer from "../reducer/CartReducer";
const CartContext = createContext();

const initialState = {
  cart: [],
  total: 0,
    qty: 0,
    addToCart: () => { },
};

const CartProvider = ({ children }) => {
    const addToCart = (product, color, size, qty) => {
        dispatch({ type: "ADD_TO_CART", payload: { product, color, size, qty } });
      };
      const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <CartContext.Provider value={{ ...state,addToCart }}>
            {children}
        </CartContext.Provider>
    )
};

export { CartContext, CartProvider };
