import { createStore } from "redux";

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                cart: state.cart.concat(action.product)
            }
        case 'TAKE_OFF_CART':
            return {
                ...state,
                cart: state.cart.filter((product) =>
                    product.id !== action.product.id
                    // {
                    //     if (product.id != action.product.id)
                    //         return product;
                    // }
                )
            }
    }

    return state;
}

export default createStore(reducer, { cart: [] });

