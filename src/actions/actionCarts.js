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

export const COUNT_CART = (countCart) => {
    return {
        type: cartConstain.COUNT_CART,
        payload: countCart
    }
}

export const CHECKOUT = (checkout) => {
    return {
        type: cartConstain.CHECKOUT,
        payload: checkout
    }
}