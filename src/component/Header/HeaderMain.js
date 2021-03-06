/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useEffect, useState } from 'react'
// import Img from '../../common/assets/images/cart.jpg'
import Logo from '../../common/assets/images/logo3.png'
import { Link } from 'react-router-dom'
import { MODULE_NAME as MODULE_CART } from '../../constain/cartConstain'
import { MODULE_NAME as MODULE_USER } from '../../constain/userConstain'
import { useSelector, useDispatch } from 'react-redux'
import * as actionCarts from '../../actions/actionCarts'
import * as actionUser from '../../actions/actionUser'
import * as actionProducts from '../../actions/actionProducts'
import { MODULE_NAME as MODULE_PRODUCTS } from '../../constain/productsConstain'
import { fetchLoading } from '../../common/utils/effect'
import { message } from 'antd'
// import { useForm } from 'antd/lib/form/util'
// import { useForm } from "react-hook-form"
function HeaderMain() {
  const countCart = useSelector(state => state[MODULE_CART].countCart)
  const pages_change = useSelector(state => state[MODULE_PRODUCTS].pages)
  const user = useSelector(state => state[MODULE_USER].user)
  const [search, setSearch] = useState('')
  // const { handleSubmit } = useForm()
  const dispatch = useDispatch()
  const onSubmit = (e) => {
    e.preventDefault()
    console.log(search)
    dispatch(actionProducts.PAGES_CHANGE({ ...pages_change, Keyword: search }))

  }
  function onChange(e) {
    console.log(e.target.value)
  }
  async function getCart() {
    if (user) {
      try {
        let result = await fetchLoading({
          url: 'http://localhost:5000/api/carts/' + user,
          method: 'GET',
          params: { userId: user }
        })
        let statusProducts = result.status
        if (statusProducts === 200) {
          dispatch(actionCarts.COUNT_CART(result.data.data.cartItemsDTO.length))
          dispatch(actionCarts.FETCH_CART(result.data.data))
          localStorage.setItem('dataCart', JSON.stringify({ countCart: result.data.data.cartItemsDTO.length })) //Cong voi so luong trong GH co san
        } else {//Bad Request => 0
          dispatch(actionCarts.COUNT_CART(0))
        }
      } catch (error) {
        console.log(error)
        message.error("Lỗi kết nối đến Server")
      }
    }
  }
  useEffect(() => {
    if (localStorage.id) {
      dispatch(actionUser.FETCH_USER(localStorage.id))
      getCart()
    }
  })
  return (
    <div className="main-header">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-3 logo-holder">
            {/* ============================================================= LOGO ============================================================= */}
            <div className="logo">

              <Link to="/">

                <img src={Logo} alt="logo" />
              </Link>
            </div>
            {/* /.logo */}
            {/* ============================================================= LOGO : END ============================================================= */}
          </div>
          {/* /.logo-holder */}
          <div className="col-xs-12 col-sm-12 col-md-7 top-search-holder">
            {/* /.contact-row */}
            {/* ============================================================= SEARCH AREA ============================================================= */}
            <div className="search-area">

              <form
                // onFinish={onFinish}
                onSubmit={onSubmit}
              >
                <div className="control-group">
                  <ul className="categories-filter animate-dropdown">
                    <li className="dropdown">

                      <a
                        className="dropdown-toggle"
                        data-toggle="dropdown"
                        href="category.html"
                      >
                        Tất cả <b className="caret" />
                      </a>
                      <ul className="dropdown-menu" role="menu">

                        <li role="presentation">
                          <a role="menuitem" tabIndex={-1} >
                            - Đồ tập gym
                         </a>
                        </li>
                        <li role="presentation">
                          <a role="menuitem" tabIndex={-1}>
                            - Đồ tập Yoga
                       </a>
                        </li>
                        <li role="presentation">
                          <a role="menuitem" tabIndex={-1} >
                            - Đồ Chạy bộ
                     </a>
                        </li>

                      </ul>
                    </li>
                  </ul>

                  <input type='text' name="Txtsearch" className="search-field" onChange={(e) => setSearch(e.target.value)} placeholder="Tìm kiếm tại đây ..." />
                  <button type="submit" className="search-button" style={{ border: "none" }}></button>
                  {/* <a className="search-field" className="search-button" type="submit" /> */}
                </div>
              </form>
            </div>
            {/* /.search-area */}
            {/* ============================================================= SEARCH AREA : END ============================================================= */}
          </div>
          {/* /.top-search-holder */}
          <div className="col-xs-12 col-sm-12 col-md-2 animate-dropdown top-cart-row">
            {/* ============================================================= SHOPPING CART DROPDOWN ============================================================= */}
            <div className="dropdown dropdown-cart">
              <Link
                to="/cart"
                className="dropdown-toggle lnk-cart"
                data-toggle="dropdown"
              >
                <div className="items-cart-inner">
                  <div className="basket" />
                  <div className="basket-item-count">
                    <span className="count">
                      {/* {(localStorage.dataCart) ? JSON.parse(localStorage.dataCart).countCart : 0} */}
                      {(countCart) ? countCart : 0}
                    </span>
                  </div>
                  {/* <div className="total-price-basket">
                    <span className="lbl" />
                    <span className="total-price" />
                  </div> */}
                </div>
              </Link>
              {/* <ul className="dropdown-menu">
                <li>
                  <div className="cart-item product-summary">
                    <div className="row">
                      <div className="col-xs-4">
                        <div className="image">

                          <a href="detail.html">
                            <img src={Img} alt="ab" />
                          </a>
                        </div>
                      </div>
                      <div className="col-xs-7">
                        <h3 className="name">
                          <Link to="cart">Simple Product</Link>
                        </h3>
                        <div className="price">600.000 VND</div>
                      </div>
                      <div className="col-xs-1 action">

                        <Link to="cart">
                          <i className="fa fa-trash" />
                        </Link>
                      </div>
                    </div>
                  </div>

              <div className="clearfix" />
              <hr />
              <div className="clearfix cart-total">
                <div className="pull-right">

                  <span className="text">Sub Total :</span>
                  <span className="price">$600.00</span>
                </div>
                <div className="clearfix" />
                <a
                  href="checkout.html"
                  className="btn btn-upper btn-primary btn-block m-t-20"
                >
                  Checkout
                </a>
              </div>
   
                </li>
              </ul> */}
              {/* /.dropdown-menu*/}
            </div>
            {/* /.dropdown-cart */}
            {/* ============================================================= SHOPPING CART DROPDOWN : END============================================================= */}
          </div>
          {/* /.top-cart-row */}
        </div>
        {/* /.row */}
      </div >
      {/* /.container */}
    </div >

  )
}
export default HeaderMain