import React, { useEffect } from 'react'
import Categories from './Categories'
import Content from './Content'
import { useSelector, useDispatch } from 'react-redux'
import * as actionProducts from '../../actions/actionProducts'
import { MODULE_NAME as MODULE_PRODUCTS } from '../../constain/productsConstain'
import { fetchLoading } from '../../common/utils/effect'
import { message } from 'antd'


function Products() {
    const pages_change = useSelector(state => state[MODULE_PRODUCTS].pages)
    const dispatch = useDispatch()

    async function getProducts() {
        try {
            let result = await fetchLoading({
                url: 'http://localhost:5000/api/products',
                method: 'GET',
                params: pages_change //store pages:{Keyword: "", PageIndex: 1, PageSize: 9 } default in redurcer
            })
            let statusProducts = result.status
            if (statusProducts === 200) {
                dispatch(actionProducts.FETCH_PRODUCTS(result.data.data))
            } else {
                message.error(result.data.message)
            }

        } catch (error) {
            console.log(error)
            message.error("Lỗi kết nối đến Server")
        }
    }

    return (
        <>
            <div className="container">
                <Categories />
                <Content />
            </div>
        </>
    )
}
export default Products
