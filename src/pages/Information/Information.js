import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { ReloadOutlined, ScheduleOutlined, UserOutlined, EnvironmentOutlined, SolutionOutlined, SafetyOutlined } from '@ant-design/icons'

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
                                                    <SafetyOutlined />   Quản lý tài khoản
                                          </h4>
                                            </div>
                                            <div >
                                                <ul className="nav nav-checkout-progress list-unstyled menuinfo">
                                                    <li>

                                                        <SolutionOutlined style={{ margin: "14px 10px" }} /> <Link to='/information/account'>THÔNG TIN TÀI KHOẢN</Link>
                                                    </li>
                                                    <li>
                                                        <EnvironmentOutlined style={{ margin: "14px 10px" }} /> <Link to='/information/addresses' >ĐỊA CHỈ CỦA TÔI</Link>
                                                    </li>
                                                    <li>
                                                        <ScheduleOutlined style={{ margin: "14px 10px" }} /><Link to='/information/orders'>ĐƠN HÀNG CỦA TÔI</Link>
                                                    </li>
                                                    <li>
                                                        <ReloadOutlined style={{ margin: "14px 10px" }} /> <Link to='/information/changepass'> ĐỔI MẬT KHẨU</Link>
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
