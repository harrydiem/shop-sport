
import React, { useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import Items from './Items'
import { useSelector, useDispatch } from 'react-redux'
import * as actionCarts from '../../actions/actionCarts'
import { MODULE_NAME as MODULE_CART } from '../../constain/cartConstain'
import { MODULE_NAME as MODULE_USER } from '../../constain/userConstain'
import formatNumber from '../../common/utils/formatNumber'
import { fetchLoading } from '../../common/utils/effect'
import { message } from 'antd'

function Cart(props) {
    const history = useHistory()
    const cartList = useSelector(state => state[MODULE_CART].carts)
    console.log("Cart -> cartList", cartList)
    const dispatch = useDispatch()
    const user = useSelector(state => state[MODULE_USER].user)
    // console.log(user)

    function clickCheckout() {
        history.push("/checkout")
    }
    async function getCart() {
        if (localStorage.id) {
            try {
                let result = await fetchLoading({
                    url: 'http://localhost:5000/api/carts/' + localStorage.id,
                    method: 'GET',
                    params: { userId: localStorage.id }
                })
                let statusProducts = result.status
                if (statusProducts === 200) {
                    dispatch(actionCarts.FETCH_CART(result.data.data))
                    // (result.data.data.cartItemsDTO)
                    // ? dispatch(actionCarts.COUNT_CART(result.data.data.cartItemsDTO.length))
                    // : dispatch(actionCarts.COUNT_CART(0))
                } else {
                    dispatch(actionCarts.FETCH_CART({}))
                    dispatch(actionCarts.COUNT_CART(0))
                    console.log("Trống")
                    //Gọi hàm return
                }
            } catch (error) {
                console.log(error)
                message.error("Lỗi kết nối đến Server")
            }
        }
    }
    useEffect(() => {
        if (localStorage.id) {
            getCart()
        }
    }, [])

    return (
        <div className="container">
            <div>
                <div className="shopping-cart">
                    {/* Cần check emty */}
                    {cartList
                        ? cartList.cartItemsDTO
                            ? <div>
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
                                            <Items getCart={getCart} />
                                        </table>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-12 estimate-ship-tax">
                                    <span >
                                        <Link to="/products" className="btn btn-upper btn-primary outer-left-xs">TIẾP TỤC MUA SẮM</Link>
                                    </span>
                                </div>{/* /.estimate-ship-tax */}
                                <div className="col-md-4 col-sm-12 estimate-ship-tax">

                                </div>
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
                                </div>{/* /.cart-shopping-total */}

                            </div>
                            : <div>Giỏ hàng trống</div>
                        : ""}

                </div>{/* /.shopping-cart */}

            </div> {/* /.row */}
            {/* ============================================== BRANDS CAROUSEL ============================================== */}

            {/* /.logo-slider */}
            {/* ============================================== BRANDS CAROUSEL : END ============================================== */}
        </div>
    )

}

export default (Cart)

