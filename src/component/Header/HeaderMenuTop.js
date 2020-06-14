import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { MODULE_NAME as MODULE_USER } from '../../constain/userConstain'
import { DownOutlined, ExportOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu, Dropdown, message } from 'antd';
import * as actionCarts from '../../actions/actionCarts'
function Header1() {
    const history = useHistory()
    const dispatch = useDispatch()
    const userInfo = useSelector(state => state[MODULE_USER].user)
    const menu = (
        <Menu>
            <Menu.Item key="0" icon={<SettingOutlined />} onClick={() => history.push("/information/account")} >
                <Link to="/information/account" >
                    Quản lý tài khoản
          </Link>
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item key="2" icon={<ExportOutlined />} onClick={() => {
                dispatch(actionCarts.COUNT_CART(0))
                dispatch(actionCarts.FETCH_CART({}))
                localStorage.clear()
                message.success('Tài khoản đã được đăng xuất !')
                history.push("/")
            }}>
                Đăng xuất
      </Menu.Item>
        </Menu>
    )
    return (
        <div className="top-bar animate-dropdown">
            <div className="container">
                <div className="header-top-inner">
                    <div className="cnt-account">
                        <ul className="list-unstyled">
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
                            {/* <li>
                                <Link to="/orders">
                                    <i className="icon fa fa-check" />
                                        ĐƠN HÀNG
                                   </Link>
                            </li> */}
                            {(localStorage.id)
                                ?
                                <li>
                                    <Dropdown overlay={menu} placement="bottomLeft">
                                        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                            <i className="icon fa fa-user" />
                                            {localStorage.name}
                                            <DownOutlined />
                                        </a>
                                    </Dropdown>
                                    {/* <a>
                                        <i className="icon fa fa-user" />
                                        {localStorage.name}
                                    </a> */}
                                </li>
                                : <li>
                                    <Link to="/Login">
                                        <i className="icon fa fa-lock" />
                                              ĐĂNG NHẬP
                                     </Link>
                                </li>
                            }


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
export default (Header1)