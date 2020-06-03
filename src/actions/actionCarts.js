import * as cartConstain from '../constain/cartConstain'

export const FETCH_CART = (data) => {

    return {
        type: cartConstain.FETCH_CART,
        payload: data,
    }
}

export const GET_USER = (user) => {
    return {
        type: cartConstain.GET_USER,
        payload: user
    }
}

