const categoryReducer = (state, action) => {
  switch (action.type) {
    case "GET_CATEGORIES_SUCCESS":
      return {
        ...state,
        categories: action.payload,
        loading: false,
      };

    case "GET_CATEGORIES_ERROR":
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
  }
};

export default categoryReducer;
