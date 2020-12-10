export const initialState = {       // Initial State of the Data-Layer
    basket: [],     // Empty Basket
    user: null
}

export const getBasketTotal = (basket) =>           // Takes in the basket and return
    basket?.reduce(                                 // reduce that takes two arguments amount and item
        (amount, item) => item.price + amount, 0    // starting from 0, add all of prices in the basket
    )

const reducer = (state, action) => {
    console.log(action);
    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,   // current State
                user: action.user // Set user to user in action
            }
            
        case 'ADD_TO_BASKET':
            return {    // Return what the New data-layer will look like
                ...state,   // Return whatever is currently in the Object
                basket: [...state.basket, action.item],     // Append action.item to whatever is in the basket
            };

        case 'REMOVE_FROM_BASKET':
            let newBasket = [...state.basket];  // newBasket with all the elements of the basket, basically cloning the current basket

            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);

            if (index >= 0) {
                newBasket.splice(index, 1);
            }
            else {
                console.warn(
                    `Cant remove product (id: ${action.id}) as it's not in Basket`
                );
            }

            return {
                ...state,   // Return whatever is currently in the Object
                basket: newBasket   // Append newBasket to whatever is in the basket
            };

        default:
            return state;
    }
}

export default reducer;