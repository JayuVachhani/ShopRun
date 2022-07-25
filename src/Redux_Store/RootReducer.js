import { combineReducers } from 'redux'
import Reducers from './Reducers'
import FavouriteItemsReducer from './FavouriteItemsReducer'

const RootReducer = combineReducers({
  Reducers,
  FavouriteItemsReducer,
})
export default RootReducer
