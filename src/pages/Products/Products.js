import React, { useEffect } from 'react'
import Categories from './Categories'
import Content from './Content'
import { useSelector, useDispatch } from 'react-redux'
import * as actionProducts from '../../actions/actionProducts'
import { MODULE_NAME as MODULE_PRODUCTS } from '../../constain/productsConstain'
import { fetchLoading } from '../../common/utils/effect'
// import imgGym from '../../common/assets/images/products/gym-black.jpg'
// import imgNB from '../../common/assets/images/products/NB-shoes-black.jpg'
import { message } from 'antd'


function Products() {
    const pages_change = useSelector(state => state[MODULE_PRODUCTS].pages)
    // const listProducts = useSelector(state => state[MODULE_PRODUCTS].products)

    const dispatch = useDispatch()
    // console.log("Store Products: ", listProducts)
    // console.log("pages: ", pages_change)
    useEffect(() => {
        async function getProducts() {
            try {
                let result = await fetchLoading({
                    url: 'http://localhost:5000/api/products',
                    method: 'GET',
                    params: pages_change //store pages:{Keyword: "", PageIndex: 1, PageSize: 12 } default   
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
        getProducts()
        return () => {
            //cleanup
        }
    }, [pages_change])
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
