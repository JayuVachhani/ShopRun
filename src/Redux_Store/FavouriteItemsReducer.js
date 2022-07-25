const initialState = {
  favouriteItems: [],
  totalItemsInFavourite: 0,
}

const FavouriteItemsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Add item to Favourite
    case 'ADD_TO_FAVOURITE':
      const existingItem = state.favouriteItems.find((favouriteItem) => {
        return favouriteItem.id === action.payload.item.id
      })
      return {
        ...state,
        favouriteItems: existingItem
          ? state.favouriteItems.map((item) =>
              item.id === action.payload.item.id ? { ...item } : item,
            )
          : [...state.favouriteItems, { ...action.payload.item }],
        totalItemsInFavourite:
          state.favouriteItems.reduce((acc, cur) => acc + cur.quantity, 0) + 1,
      }
    // Delete item from Favourite
    case 'REMOVE_ITEM_FROM_FAVOURITE':
      return {
        ...state,
        favouriteItems: state.favouriteItems.filter((item) => {
          return item.id !== action.payload.id
        }),
      }

    default:
      return state
  }
}
export default FavouriteItemsReducer
