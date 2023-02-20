const Reducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return { ...state, loading: true };
    case "STORE_ITEMS":
      const featuredProducts = action.payload.slice(0, 8);
      const popular_products = action.payload.slice(0, 8);
      const special_offers = action.payload.slice(8, 12);
      
      return {
        ...state,
        products: action.payload,
        loading: false,
        featuredProducts,
        special_offers,
        popular_products,
      };
    case "ERROR":
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};

export default Reducer;
