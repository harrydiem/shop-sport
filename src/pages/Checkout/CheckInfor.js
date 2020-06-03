import React from 'react'
import { Form, Input, Button, Checkbox, Select } from 'antd';
import { PlusOutlined } from '@ant-design/icons'
// import { UserOutlined, LockOutlined } from '@ant-design/icons';
const { Option } = Select
function CheckInfor() {

    const onFinish = values => {
        console.log('Received values of form: ', values);
    }

    const formItemLayout = {
        labelCol: {
            xs: { span: 27 },
            sm: { span: 5 },
        },
        wrapperCol: {
            xs: { span: 24 },
            sm: { span: 16 },
        },
        // labelCol: {
        //     xs: { span: 24 },
        //     sm: { span: 8 },
        // },
        // wrapperCol: {
        //     xs: { span: 24 },
        //     sm: { span: 16 },
        // },
    }
    function onChange(value) {
        console.log(`selected ${value}`);
    }

    function onBlur() {
        console.log('blur');
    }

    function onFocus() {
        console.log('focus');
    }

    function onSearch(val) {
        console.log('search:', val);
    }
    return (
        <>


            <div className="sign-in-page" style={{ borderRadius: "10px", borderColor: "#bebcbc" }}>
                <legend ><h4 style={{ margin: "0 0 25px 0" }}>XÁC NHẬN THÔNG TIN CÁ NHÂN</h4></legend>

                {/* <div className="social-sign-in outer-top-xs">
                </div> */}
                <Form onFinish={onFinish}
                    {...formItemLayout}
                    className="register-form outer-top-xs formCheckout"
                    style={{ width: "80%", display: 'inline-block' }}
                >
                    <div className="form-group">
                        <Form.Item
                            className='inputCheckout'
                            label="Email"
                            name="email"
                            initialValue="thaidiem99@gmail.com"
                        >
                            <Input
                                disabled
                                size='large'
                                placeholder="Nhập địa chỉ Email..."
                                className="form-control unicase-form-control text-input"
                                id="InputEmail1"
                            />
                        </Form.Item>
                    </div>
                    <div className="form-group">
                        <Form.Item
                            className='inputCheckout'
                            label="SĐT"
                            name="phoneNum"
                            initialValue="0926015381"
                        >
                            <Input
                                size='large'
                                type="text"
                                className="form-control unicase-form-control text-input"
                                id="InputPass1"
                            />
                        </Form.Item>
                    </div>
                    <div className="form-group">
                        <Form.Item
                            className='inputCheckout'
                            label="Tên"
                            name="name"
                            initialValue="Hán Thái Diêm"
                        >
                            <Input
                                size='large'
                                type="text"
                                className="form-control unicase-form-control text-input"
                                id="name"
                            />
                        </Form.Item>
                    </div>
                    {/* <Form.Item
                        className='inputCheckout'
                        label="Địa Chỉ"
                        name="addess"
                        initialValue="Hồ Chí Minh - Quận 5 - Phường 3 - 273 An Dương Vương"
                    >
                        <Input
                            size='large'
                            type="text"
                            className="form-control unicase-form-control text-input"
                            id="addess"
                        />
                    </Form.Item> */}

                    <Form.Item
                        label="Chọn Địa Chỉ"
                        name="selectAddess"
                        id="selectAddess"
                        initialValue="default"
                    >

                        <Select
                            size="large"
                            showSearch
                            // style={{ float: "left" }}
                            placeholder="Chọn 1 địa chỉ"
                            optionFilterProp="children"
                            onChange={onChange}
                            onFocus={onFocus}
                            onBlur={onBlur}
                            onSearch={onSearch}
                            filterOption={(input, option) =>
                                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                        >
                            <Option value="default">Hồ Chí Minh - Quận 5 - Phường 3 - 273 An Dương Vương</Option>
                            <Option value="addess2">Hồ Chí Minh - Tân Bình - Phường 9 - 192/9 Âu Cơ </Option>
                            {/* <Option value="addess3"><img
                                style={{ maxHeight: "20px" }}
                                className="img-responsive"
                                alt="s"
                                src="http://localhost:3000/static/media/yoga-pink.acb4479f.jpg"
                            /><span>Ninh Thuận - Ninh Phước - Phước Thuận - Phú Nhuận</span></Option> */}
                        </Select>
                        {/* <PlusOutlined /> */}
                    </Form.Item>
                </Form>
            </div>


            {/* <Form
            {...formItemLayout}
            style={{ width: '50%', display: 'inline-block' }}
            name="normal_login"
            className="login-form "
            initialValues={{ remember: true }}
            onFinish={onFinish}
        >
            <Form.Item
                label="Email"
                name="username"
                rules={[{ required: true, message: 'Please input your Username!' }]}
                initialValue="thaidiem99@gmail.com"
            >

                <Input name="username" disabled size="large" />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[{ required: true, message: 'Please input your Password!' }]}
            >
                <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                />
            </Form.Item>
            <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <a className="login-form-forgot" href="">
                    Forgot password
          </a>
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                    Log in
          </Button>
          Or <a href="">register now!</a>
            </Form.Item>
        </Form> */}


        </>
    )
}

export default CheckInfor
