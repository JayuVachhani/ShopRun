const initialState = {
  cart: [],
  totalItemsInCart: 0,
}

const Reducers = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      // check for existing item in cart
      const existingItem = state.cart.find((cartItem) => {
        return cartItem.id === action.payload.item.id
      })

      return {
        ...state,
        cart: existingItem
          ? // if existing item then increase item's quantity
            state.cart.map((item) =>
              item.id === action.payload.item.id
                ? { ...item, quantity: item.quantity + 1 }
                : item,
            )
          : // if not existing then add new item to cart
            [...state.cart, { ...action.payload.item, quantity: 1 }],
        // overall item quantity
        totalItemsInCart:
          state.cart.reduce((acc, cur) => acc + cur.quantity, 0) + 1,
      }
    // Delete item from cart
    case 'REMOVE_ITEM_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter((item) => {
          return item.id !== action.payload.id
        }),
      }
    // increase decrease item quantity
    case 'ADJUST_FOOD_QUANTITY':
      return {
        ...state,
        cart: state.cart.map((cartItem) =>
          cartItem.id === action.payload.id
            ? { ...cartItem, quantity: action.payload.quantity }
            : cartItem,
        ),
        totalItemsInCart: Number(state.totalItemsInCart) + 1,
      }

    default:
      return state
  }
}
export default Reducers
