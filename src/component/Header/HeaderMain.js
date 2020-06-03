/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Component } from 'react'
import Img from '../../common/assets/images/cart.jpg'
import Logo from '../../common/assets/images/logo3.png'
import { Link } from 'react-router-dom'
export default class HeaderMain extends Component {
  render() {
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
                <form>
                  <div className="control-group">
                    <ul className="categories-filter animate-dropdown">
                      <li className="dropdown">
                        {" "}
                        <a
                          className="dropdown-toggle"
                          data-toggle="dropdown"
                          href="category.html"
                        >
                          Categories <b className="caret" />
                        </a>
                        <ul className="dropdown-menu" role="menu">
                          <li className="menu-header">Computer</li>
                          <li role="presentation">
                            <a role="menuitem" tabIndex={-1} href="category.html">
                              - Clothing
                </a>
                          </li>
                          <li role="presentation">
                            <a role="menuitem" tabIndex={-1} href="category.html">
                              - Electronics
                </a>
                          </li>
                          <li role="presentation">
                            <a role="menuitem" tabIndex={-1} href="category.html">
                              - Shoes
                </a>
                          </li>
                          <li role="presentation">
                            <a role="menuitem" tabIndex={-1} href="category.html">
                              - Watches
                </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                    <input className="search-field" placeholder="Search here..." />
                    <a className="search-button" href=" " />
                  </div>
                </form>
              </div>
              {/* /.search-area */}
              {/* ============================================================= SEARCH AREA : END ============================================================= */}{" "}
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
                      <span className="count">2</span>
                    </div>
                    <div className="total-price-basket">

                      <span className="lbl" />
                      <span className="total-price" />

                      {/* <span className="value">600.000</span>
                                                <span className="sign">VND</span> */}




                    </div>
                  </div>
                </Link>
                <ul className="dropdown-menu">
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
                    {/* /.cart-item */}
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
                    {/* /.cart-total*/}
                  </li>
                </ul>
                {/* /.dropdown-menu*/}
              </div>
              {/* /.dropdown-cart */}
              {/* ============================================================= SHOPPING CART DROPDOWN : END============================================================= */}
            </div>
            {/* /.top-cart-row */}
          </div>
          {/* /.row */}
        </div>
        {/* /.container */}
      </div>

    )
  }
}
