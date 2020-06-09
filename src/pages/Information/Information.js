import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Information extends Component {
    render() {


        return (
            <div className="body-content">
                <div className="container">
                    <div className="checkout-box ">
                        <div className="row">
                            <div className="col-md-4">
                                {/* checkout-progress-sidebar */}
                                <div className="checkout-progress-sidebar ">
                                    <div className="panel-group">
                                        <div className="panel panel-default">
                                            <div className="panel-heading">
                                                <h4 className="unicase-checkout-title">
                                                    Quản lý tài khoản
                                          </h4>
                                            </div>
                                            <div >
                                                <ul className="nav nav-checkout-progress list-unstyled">
                                                    <li>
                                                        <Link to='/information/account'>Thông tin tài khoản</Link>
                                                    </li>
                                                    <li>
                                                        <Link to='/information/addresses' >Địa chỉ của tôi</Link>
                                                    </li>
                                                    <li>
                                                        <Link to='/information/changepass'>Đổi mật khẩu </Link>
                                                    </li>
                                                    <li>
                                                        <a>Ví điện tử</a>
                                                    </li>
                                                    <li>
                                                        <a>Liên kết tài khoản</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* checkout-progress-sidebar */}
                            </div>

                            <div className="col-md-8">
                                {this.props.children}

                            </div>
                        </div>
                        {/* /.row */}
                    </div>
                </div >
                {/* /.container */}
            </div >

        )
    }
}

export default Information
