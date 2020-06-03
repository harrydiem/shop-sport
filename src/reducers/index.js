import { combineReducers } from 'redux'
import reducerCart from './cart.reducer'
import { MODULE_NAME as MODULE_CART } from '../constain/cartConstain'

import reducerUser from './user.reducer'
import { MODULE_NAME as MODULE_USER } from '../constain/userConstain'

import reducerProducts from './products.reducer'
import { MODULE_NAME as MODULE_PRODUCTS } from '../constain/productsConstain'

const rootReducer = combineReducers({
    [MODULE_CART]: reducerCart,
    [MODULE_USER]: reducerUser,
    [MODULE_PRODUCTS]: reducerProducts,
})

export default rootReducer