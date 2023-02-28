const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.payload,
          };
      
    case "SET_ACCESS_TOKEN":
      return {
        ...state,
        access_token: action.payload,
      };
  }
};

export default reducer;
