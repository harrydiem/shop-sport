
import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
// import { fetchLoading } from '../../common/utils/effect'
import Items from './Items'
import { useSelector, useDispatch } from 'react-redux'
import * as actionCarts from '../../actions/actionCarts'
// import * as actionUser from '../../actions/actionUser'
import { MODULE_NAME as MODULE_CART } from '../../constain/cartConstain'
// import { MODULE_NAME as MODULE_USER } from '../../constain/userConstain'
import formatNumber from '../../common/utils/formatNumber'
import IMG1 from '../../common/assets/images/products/gym-black.jpg'
import IMG2 from '../../common/assets/images/products/yoga-pink.jpg'
import IMG3 from '../../common/assets/images/products/NB-shoes-black.jpg'
import { fetchLoading } from '../../common/utils/effect'
import { message } from 'antd'


const dataCarts = {
    "successed": true,
    "message": null,
    "data": {
        "totalQuantity": 3,
        "totalPrice": 550000,
        "cartItemsDTO": [
            {
                "cartId": 2,
                "productId": 1,
                "productName": "Áo Tập Gym Nữ",
                "price": 100000,
                "totalPrice": 200000,
                "size": 'L',
                "color": 'Đen',
                "quantity": 2,
                "quantityOfWarehouse": 5,
                "image": IMG1,
            },
            {
                "cartId": 2,
                "productId": 2,
                "productName": "Áo tập yoga",
                "price": 50000,
                "totalPrice": 150000,
                "size": 'L',
                "color": 'Hồng',
                "quantity": 3,
                "quantityOfWarehouse": 5,
                "image": IMG2
            },
            {
                "cartId": 2,
                "productId": 7,
                "productName": "Giày NB Run1",
                "price": 200000,
                "totalPrice": 200000,
                "size": '41',
                "color": 'Đen',
                "quantity": 1,
                "quantityOfWarehouse": 4,
                "image": IMG3
            }
        ],
    }
}

function Cart(props) {
    const history = useHistory()
    // const { } = props
    const cartList = useSelector(state => state[MODULE_CART].carts)
    const dispatch = useDispatch()
    console.log("Store Carts: ", cartList)
    // console.log("User API trả về: ", user)

    function clickCheckout() {
        history.push("/checkout")
    }

    useEffect(() => {
        async function getCart() {
            try {
                let result = await fetchLoading({
                    url: 'http://localhost:5000/api/carts/1',
                    method: 'GET',
                    params: { userId: 1 }
                })
                let statusProducts = result.status
                if (statusProducts === 200) {
                    console.log(result.data.data)
                    dispatch(actionCarts.FETCH_CART(result.data.data))
                } else {
                    message.error(result.data.message)
                }

            } catch (error) {
                console.log(error)
                message.error("Lỗi kết nối đến Server")
            }
        }
        getCart()
        // dispatch(actionCarts.FETCH_CART(dataCarts))
    }, [])


    return (
        <div className="container">
            <div>
                <div className="shopping-cart">
                    <div className="shopping-cart-table ">
                        <div className="table-responsive">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th className="cart-romove item">Thao Tác</th>
                                        <th className="cart-description item">Hình Ảnh</th>
                                        <th className="cart-product-name item">Tên Sản Phẩm</th>
                                        <th className="cart-edit item">Tùy Chọn</th>
                                        <th className="cart-qty item">Số Lượng</th>
                                        <th className="cart-sub-total item">Đơn Giá</th>
                                        <th className="cart-total last-item">Tổng</th>
                                    </tr>
                                </thead>{/* /thead */}

                                <tfoot>
                                    <tr>
                                        <td colSpan={7}>
                                        </td>
                                    </tr>
                                </tfoot>

                                {/* /tbody ITEMS*/}
                                <Items />

                                {/* /tbody */}
                            </table>{/* /table */}
                        </div>
                    </div>{/* /.shopping-cart-table */}
                    <div className="col-md-4 col-sm-12 estimate-ship-tax">
                        <span >
                            <Link to="/products" className="btn btn-upper btn-primary outer-left-xs">TIẾP TỤC MUA SẮM</Link>
                        </span>
                    </div>{/* /.estimate-ship-tax */}
                    <div className="col-md-4 col-sm-12 estimate-ship-tax">

                    </div>{/* /.estimate-ship-tax */}
                    <div className="col-md-4 col-sm-12">
                        <div className="cart-shopping-total">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>
                                            <div className="cart-sub-total">
                                                Tổng giá :<span className="inner-left-md">{(cartList) ? formatNumber(cartList.totalPrice, '.', '.') : ''} VNĐ</span>
                                            </div>
                                            <div className="cart-grand-total">
                                                Giá Trị Đơn Hàng: <span className="inner-left-md">{(cartList) ? formatNumber(cartList.totalPrice, '.', '.') : ''} VNĐ</span>
                                            </div>
                                        </th>
                                    </tr>
                                </thead>{/* /thead */}
                                <tbody>
                                    <tr>
                                        <td>
                                            <div className="cart-checkout-btn pull-right">
                                                <button type="submit" onClick={clickCheckout} className="btn btn-primary checkout-btn">THANH TOÁN</button>
                                                {/* <span >Cần xác thực thêm thông tin !</span> */}
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>{/* /tbody */}
                            </table>{/* /table */}
                        </div>
                    </div>{/* /.cart-shopping-total */}			</div>{/* /.shopping-cart */}
            </div> {/* /.row */}
            {/* ============================================== BRANDS CAROUSEL ============================================== */}

            {/* /.logo-slider */}
            {/* ============================================== BRANDS CAROUSEL : END ============================================== */}
        </div>
    )

}

export default (Cart)

