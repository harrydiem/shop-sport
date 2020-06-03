import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class Header1 extends Component {
    render() {
        return (

            <div className="top-bar animate-dropdown">
                <div className="container">
                    <div className="header-top-inner">
                        <div className="cnt-account">
                            <ul className="list-unstyled">
                                <li>
                                    <a href=" ">
                                        <i className="icon fa fa-user" />
                                    My Account
                                      </a>
                                </li>
                                <li>
                                    <Link to="/wishlists">
                                        <i className="icon fa fa-heart" />
                                        YÊU THÍCH
                                        </Link>
                                </li>
                                <li>
                                    <Link to="/cart">
                                        <i className="icon fa fa-shopping-cart" />
                                    GIỎ HÀNG
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/checkout">
                                        <i className="icon fa fa-check" />
                                        ĐƠN HÀNG
                                   </Link>
                                </li>
                                <li>
                                    <Link to="/Login">
                                        <i className="icon fa fa-lock" />
                                        ĐĂNG NHẬP
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        {/* /.cnt-account */}
                        <div className="cnt-block">
                            <ul className="list-unstyled list-inline">
                                <li className="dropdown dropdown-small">
                                    {" "}
                                    <a
                                        href=" "
                                        className="dropdown-toggle"
                                        data-hover="dropdown"
                                        data-toggle="dropdown"
                                    >
                                        <span className="value">VND</span>
                                        <b className="caret" />
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <a href=" ">VND</a>
                                        </li>
                                        <li>
                                            <a href=" ">USD</a>
                                        </li>

                                    </ul>
                                </li>
                                <li className="dropdown dropdown-small">
                                    {" "}
                                    <a
                                        href=" "
                                        className="dropdown-toggle"
                                        data-hover="dropdown"
                                        data-toggle="dropdown"
                                    >
                                        <span className="value">VIETNAMESE</span>
                                        <b className="caret" />
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <a href=" ">ENGLISH</a>
                                        </li>

                                    </ul>
                                </li>
                            </ul>
                            {/* /.list-unstyled */}
                        </div>
                        {/* /.cnt-cart */}
                        <div className="clearfix" />
                    </div>
                    {/* /.header-top-inner */}
                </div>
                {/* /.container */}
            </div>

        )
    }
}
