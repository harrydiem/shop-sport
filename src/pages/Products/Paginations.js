import React, { useEffect } from 'react'
import { Pagination } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import * as actionProducts from '../../actions/actionProducts'
import { MODULE_NAME as MODULE_PRODUCTS } from '../../constain/productsConstain'
function Paginations() {
    const pages_change = useSelector(state => state[MODULE_PRODUCTS].pages)
    const listProducts = useSelector(state => state[MODULE_PRODUCTS].products)
    const dispatch = useDispatch()
    return (
        <div>
            {(listProducts.totalItem > pages_change.PageSize)
                ? (<Pagination size="small" total={listProducts.totalItem}
                    pageSize={pages_change.PageSize}
                    current={pages_change.PageIndex}
                    onChange={(page, pageSize) => { dispatch(actionProducts.PAGES_CHANGE({ ...pages_change, PageIndex: page })) }}
                />)
                : (<></>)}
        </div>
    )
}


export default Paginations
