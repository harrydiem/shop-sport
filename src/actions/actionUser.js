import * as userConstain from '../constain/userConstain'
export const FETCH_USER = (user) => {
    return {
        type: userConstain.FETCH_USER,
        payload: user
    }
}

