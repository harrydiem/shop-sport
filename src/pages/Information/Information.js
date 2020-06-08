import React from 'react'
import { Input, Form, Button } from 'antd'

function Information() {
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
                                                    <a >Danh sách địa chỉ của tôi</a>
                                                </li>
                                                <li>
                                                    <a >Đơn Hàng </a>
                                                </li>
                                                <li>
                                                    <a >Sản phẩm yêu thích</a>
                                                </li>
                                                <li>
                                                    <a>Ví điện tử</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* checkout-progress-sidebar */}{" "}
                        </div>

                        <div className="col-md-8">
                            <div className="panel-group checkout-steps" id="accordion">
                                {/* checkout-step-01  */}
                                <div className="panel panel-default checkout-step-01">
                                    {/* panel-heading */}
                                    <div className="panel-heading">
                                        <h4 className="unicase-checkout-title">
                                            <a
                                                style={{
                                                    display: "inline-block",
                                                    marginRight: " 10px",
                                                    padding: "15px 20px"
                                                }}
                                            >
                                                Thông tin tài khoản
                                             </a>
                                        </h4>
                                    </div>
                                    {/* panel-heading */}
                                    <div id="collapseOne" className="panel-collapse collapse in">
                                        {/* panel-body  */}
                                        <div className="panel-body">


                                            <Form>
                                                <div className="row">
                                                    <div className='formControl'>
                                                        <label className='input-label col-md-2'>Email: </label>
                                                        <Form.Item
                                                            className='col-md-6'
                                                            style={{ margin: "0 0 20px 0" }}
                                                        >
                                                            <Input
                                                                disabled
                                                                defaultValue="admin@gmail.com"
                                                            ></Input>
                                                        </Form.Item>

                                                    </div>
                                                </div>

                                                <div className="row">
                                                    <div className='formControl'>
                                                        <label className='input-label col-md-2'>Tên: </label>
                                                        <Form.Item
                                                            className='col-md-6'
                                                            style={{ margin: "0 0 20px 0" }}
                                                        >
                                                            <Input

                                                                defaultValue="Thái Diêm"
                                                            ></Input>
                                                        </Form.Item>
                                                    </div>
                                                    <div />
                                                </div>
                                                <div className="row">
                                                    <div className='formControl'>
                                                        <label className='input-label col-md-2'>SĐT: </label>
                                                        <Form.Item
                                                            className='col-md-6'
                                                            style={{ marginBottom: "20px" }}
                                                        >
                                                            <Input

                                                                defaultValue="Thái Diêm"
                                                            ></Input>
                                                        </Form.Item>
                                                    </div>
                                                    <div />
                                                </div>
                                                <div className="row">
                                                    <div className='formControl'>
                                                        <label className='input-label col-md-2'>Địa chỉ : </label>
                                                        <Form.Item
                                                            className='col-md-6'
                                                            style={{ marginBottom: "20px" }}
                                                        >
                                                            <Input

                                                                defaultValue="Thái Diêm"
                                                            ></Input>
                                                        </Form.Item>
                                                    </div>
                                                    <div />
                                                </div>
                                                <div className='row'>
                                                    <div className='col-md-2'></div>
                                                    <div className='col-md-6'>
                                                        <Button>CẬP NHẬT</Button>
                                                    </div>
                                                </div>
                                            </Form>



                                            {/* 
                                            <div className="row">
                              
                                                <div className="col-md-6 col-sm-6 guest-login">
                                                    <h4 className="checkout-subtitle">
                                                        Guest or Register Login
                                                      </h4>
                                                    <p className="text title-tag-line">
                                                        Register with us for future convenience:
                                                  </p>
                                               
                                                    <form className="register-form" role="form">
                                                        <div className="radio radio-checkout-unicase">
                                                            <input
                                                                id="guest"
                                                                type="radio"
                                                                name="text"
                                                                defaultValue="guest"
                                                                defaultChecked
                                                            />
                                                            <label
                                                                className="radio-button guest-check"
                                                                htmlFor="guest"
                                                            >
                                                                Checkout as Guest
                          </label>
                                                            <br />
                                                            <input
                                                                id="register"
                                                                type="radio"
                                                                name="text"
                                                                defaultValue="register"
                                                            />
                                                            <label className="radio-button" htmlFor="register">
                                                                Register
                          </label>
                                                        </div>
                                                    </form>
                                                   
                                                    <h4 className="checkout-subtitle outer-top-vs">
                                                        Register and save time
                                            </h4>
                                                    <p className="text title-tag-line ">
                                                        Register with us for future convenience:
                                                        </p>
                                                    <ul className="text instruction inner-bottom-30">
                                                        <li className="save-time-reg">
                                                            - Fast and easy check out
                                                        </li>
                                                        <li>- Easy access to your order history and status</li>
                                                    </ul>
                                                    <button
                                                        type="submit"
                                                        className="btn-upper btn btn-primary checkout-page-button checkout-continue "
                                                    >
                                                        Continue
                                                      </button>
                                                </div>
                                            
                                                <div className="col-md-6 col-sm-6 already-registered-login">
                                                    <h4 className="checkout-subtitle">Already registered?</h4>
                                                    <p className="text title-tag-line">
                                                        Please log in below:
                                                      </p>
                                                    <form className="register-form" role="form">
                                                        <div className="form-group">
                                                            <label
                                                                className="info-title"
                                                                htmlFor="exampleInputEmail1"
                                                            >
                                                                Email Address <span>*</span>
                                                            </label>
                                                            <input
                                                                type="email"
                                                                className="form-control unicase-form-control text-input"
                                                                id="exampleInputEmail1"

                                                            />
                                                        </div>
                                                        <div className="form-group">
                                                            <label
                                                                className="info-title"
                                                                htmlFor="exampleInputPassword1"
                                                            >
                                                                Password <span>*</span>
                                                            </label>
                                                            <input
                                                                type="password"
                                                                className="form-control unicase-form-control text-input"
                                                                id="exampleInputPassword1"

                                                            />
                                                            <a className="forgot-password">
                                                                Forgot your Password?
                                                               </a>
                                                        </div>
                                                        <button
                                                            type="submit"
                                                            className="btn-upper btn btn-primary checkout-page-button"
                                                        >
                                                            Login
                                                     </button>
                                                    </form>
                                                </div>                                             
                                            </div>
                                     */}
                                        </div>
                                        {/* panel-body  */}
                                    </div>
                                    {/* row */}
                                </div>
                            </div>
                            {/* /.checkout-steps */}
                        </div>
                    </div>
                    {/* /.row */}
                </div>
            </div >
            {/* /.container */}
        </div >

    )
}

export default Information
