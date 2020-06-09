import React from 'react'
import { Input, Form, Button, message } from 'antd'
import { EditOutlined } from '@ant-design/icons';
function ChangePass() {
    return (
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
                            THAY ĐỔI MẬT KHẨU
                                         </a>
                    </h4>
                </div>
                {/* panel-heading */}
                <div id="collapseOne" className="panel-collapse collapse in">
                    {/* panel-body  */}
                    <div className="panel-body">

                        <Form>


                            <div className="row">
                                <div className='formControl1'>
                                    <label className='input-label col-md-3'>Mật khẩu cũ: </label>
                                    <Form.Item
                                        className='col-md-6'
                                        style={{ marginBottom: "20px" }}
                                    >
                                        <Input.Password
                                            placeholder="Nhập mật khẩu cũ"
                                        ></Input.Password>
                                    </Form.Item>
                                </div>
                                <div />
                            </div>
                            <div className="row">
                                <div className='formControl1'>
                                    <label className='input-label col-md-3'>Mật khẩu mới: </label>
                                    <Form.Item
                                        className='col-md-6'
                                        style={{ marginBottom: "20px" }}
                                    >
                                        <Input.Password
                                            placeholder="Nhập mật khẩu mới"
                                        ></Input.Password>
                                    </Form.Item>
                                </div>
                                <div />
                            </div>
                            <div className="row">
                                <div className='formControl1'>
                                    <label className='input-label col-md-3'>Nhập lại mật khẩu: </label>
                                    <Form.Item
                                        className='col-md-6'
                                        style={{ marginBottom: "20px" }}
                                    >
                                        <Input.Password
                                            placeholder="Nhập lại mật khẩu mới"
                                        ></Input.Password>
                                    </Form.Item>
                                </div>
                                <div />
                            </div>


                            <div className='row'>
                                <div className='col-md-3'></div>
                                <div className='col-md-6'
                                    style={{ padding: 0 }}
                                >
                                    <Button type='danger'>THAY ĐỔI</Button>
                                </div>
                            </div>
                        </Form>


                    </div>
                    {/* panel-body  */}
                </div>
                {/* row */}
            </div>
        </div>

    )
}

export default ChangePass
