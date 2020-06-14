import * as productsConstain from '../constain/productsConstain'

const initialState = {
    products: {},
    pages: {
        categoryId: '',
        Keyword: '',
        PageIndex: 1,
        PageSize: 9,
        MinPrice: '',
        MaxPrice: '',
        Color: '',
        SortBy: '',
        Order: ''
    },
    // { Keyword: "", PageIndex: 1, PageSize: 9 },
    //{ Keyword: {search}, PageIndex: 1, PageSize: 12 }
    dataLoad: {
        categoryId: '',
        Keyword: '',
        PageIndex: 1,
        PageSize: 9,
        MinPrice: '',
        MaxPrice: '',
        Color: '',
        SortBy: '',
        Order: ''
    },
}

function listProduct(state = initialState, action) {
    switch (action.type) {
        case productsConstain.FETCH_PRODUCTS:
            return {
                ...state,
                products: action.payload
            }
        case productsConstain.PAGES_CHANGE:
            return {
                ...state,
                pages: action.payload
            }
        case productsConstain.DATA_SEARCH:
            return {
                ...state,
                dataLoad: action.payload
            }
        default:
            return state
    }
}
export default listProduct