const Reducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return { ...state, loading: true };
    case "STORE_ITEMS":
      const featuredProducts = action.payload.slice(0, 8);
      const popular_products = action.payload.slice(0, 8);
      const special_offers = action.payload.slice(8, 12);

      let colors = [];
      action.payload.map((product) => {
        if (product.colors.length != 0) {
          product.colors.map((color) => {
            // update colors array
            if (!colors.includes(color)) {
              colors = [...colors, color];
            }

          })
        }

      });

      return {
        ...state,
        products: action.payload,
        filter_products: action.payload,
        loading: false,
        featuredProducts,
        special_offers,
        popular_products,
        colors,
      };

    case "FILTER_PRODUCTS":
      const { name, value } = action.payload;
      const tempProducts = [...state.products];

      if (name == "category") {
        const filterProducts = tempProducts.filter(
          (product) => {
            return product.category_id == value
          }
        );
        return { ...state, filter_products: filterProducts };
      }



    case "ERROR":
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};

export default Reducer;
