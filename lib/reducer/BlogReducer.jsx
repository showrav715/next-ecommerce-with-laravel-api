const reducer = (state = initialState, action) => { 

    switch (action.type) { 
        case 'GET_BLOGS':
            return {
                ...state,
                blogs: action.payload,
                latest_blogs: action.payload.slice(-0, 4)
            }
    }
}

export default reducer;