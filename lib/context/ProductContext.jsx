
import { createContext, useEffect, useReducer } from 'react';
import ApiUrl from '../Api/ApiUrl.js';
import Reducer from '../reducer/ProductReducer.jsx';
const ProductContext = createContext();

const ProductProvider = ({ children }) => { 

    const initsvalue = {
        products: [],
        filter_products: [],
        featuredProducts: [],
        special_offers: [],
        popular_products: [],
        colors : [],
        loading: false,
        error: '',
    }

    const [state, dispatch] = useReducer(Reducer, initsvalue ); 

    useEffect(() => {
        getProducts();
    }, [])
    
    const getProducts = async () => { 
        dispatch({ type: 'LOADING' });
        try {
            const response = await fetch(ApiUrl.getProducts);
            const data = await response.json();
            dispatch({ type: 'STORE_ITEMS', payload: data.data });
           
        } catch (error) {
            dispatch({ type: 'ERROR', payload: error });
        }
    }

    const filterProducts = (event) => {
    //    li attribute name and value
        const name = event.target.getAttribute('name');
        const value = event.target.value;
        console.log(name, value);
         dispatch({ type: 'FILTER_PRODUCTS', payload: {name,value} });
    }
    

    return (
        <ProductContext.Provider value={{ ...state,filterProducts }}>
            {children}
        </ProductContext.Provider>
    )
}

export { ProductContext, ProductProvider };