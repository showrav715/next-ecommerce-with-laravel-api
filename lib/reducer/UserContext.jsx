const reducer = (state, action) => { 

    switch (action.type) { 
        case 'LOGIN':
            return {
                ...state,
                user: action.payload
            }
    }
}

export default reducer