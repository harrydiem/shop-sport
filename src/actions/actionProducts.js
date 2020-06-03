import * as productsConstain from '../constain/productsConstain'

export const FETCH_PRODUCTS = (data) => {
    return {
        type: productsConstain.FETCH_PRODUCTS,
        payload: data,
    }
}

export const PAGES_CHANGE = (page) => {
    return {
        type: productsConstain.PAGES_CHANGE,
        payload: page,
    }
}


