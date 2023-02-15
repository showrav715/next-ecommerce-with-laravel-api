
const Reducer = (state, action) => {
    
    switch (action.type) { 
        case 'GET_BLOGS':
            const blogs = action.payload;
           
            return {
                ...state,
                blogs: blogs,
            }
    }
}

export default Reducer;