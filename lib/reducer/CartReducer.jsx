const reducer = (state = initialState, action) => { 

    switch (action.type) { 
        case "ADD_TO_CART":
            const { product, color, size, qty } = action.payload;

            let cartIndex = product.id + color + size;
            let newItem = [
                cartIndex,
                {
                    product,
                    color,
                    size,
                    qty,
                }
            ]
            console.log(newItem);

            return {
                ...state,
                cart: {
                   
                }
            }

    }
}

export default reducer;