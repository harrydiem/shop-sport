import React from 'react'
import { Input, Form, Button, message, Modal } from 'antd'
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { fetchLoading } from '../../common/utils/effect';

function ChangePass() {
    const onFinish = async (value) => {
        if (value.password === value.newPass)
            message.error('Mật khẩu mới phải khác mật khẩu cũ')
        else {
            if (value.newPass !== value.newPass2) {
                message.error('Mật khẩu mới không trùng nhau !')
            } else
                Modal.confirm({
                    title: "Xác nhận thay đổi mật khẩu ?",
                    icon: <ExclamationCircleOutlined />,
                    okText: "Đổi",
                    cancelText: "Hủy",
                    async onOk() {
                        try {
                            let result = await fetchLoading({
                                url: `http://localhost:5000/api/Users/${localStorage.id}/ChangePassword`,
                                method: 'PUT',
                                data: {
                                    oldPassword: value.password,
                                    newPassword: value.newPass
                                }
                            })
                            if (result.status === 200) {
                                message.success('Thay đổi thành công !')
                            }
                        } catch (error) {
                            console.log(error)
                            message.error("Lỗi kết nối đến Server")
                        }
                    },
                    onCancel() { },
                })
        }
    }
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

                        <Form onFinish={onFinish}>
                            <div className="row">
                                <div className='formControl1'>
                                    <label className='input-label col-md-3'>Mật khẩu cũ: </label>
                                    <Form.Item
                                        name="password"
                                        className='col-md-6'
                                        style={{ marginBottom: "20px" }}
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Vui lòng không bỏ trống!',
                                            },
                                        ]}
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
                                        name="newPass"
                                        className='col-md-6'
                                        style={{ marginBottom: "20px" }}
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Vui lòng không bỏ trống!',
                                            },
                                        ]}
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
                                        name="newPass2"
                                        className='col-md-6'
                                        style={{ marginBottom: "20px" }}
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Vui lòng không bỏ trống!',
                                            },
                                        ]}
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
                                    <Button htmlType="submit" type='danger'>THAY ĐỔI</Button>
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
