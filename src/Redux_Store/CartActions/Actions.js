// Add to cart
export const add_to_cart = (item) => {
  return {
    type: 'ADD_TO_CART',
    payload: {
      item: item,
    },
  }
}
// Add to favourite
export const add_to_favourite = (item) => {
  return {
    type: 'ADD_TO_FAVOURITE',
    payload: {
      item: item,
    },
  }
}
// increase decrease quantity of item
export const adjust_food_quantity = (itemID, value) => {
  return {
    type: 'ADJUST_FOOD_QUANTITY',
    payload: {
      id: itemID,
      quantity: value,
    },
  }
}
// delete item from cart
export const remove_food_from_cart = (id) => {
  return {
    type: 'REMOVE_ITEM_FROM_CART',
    payload: {
      id,
    },
  }
}
// delete item from favourite
export const remove_food_from_favourite = (id) => {
  return {
    type: 'REMOVE_ITEM_FROM_FAVOURITE',
    payload: {
      id,
    },
  }
}
