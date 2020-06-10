import React, { useEffect, useState } from 'react'
import { Form, Input, Button, Checkbox, Select, message } from 'antd';
import { PlusOutlined } from '@ant-design/icons'
import { fetchLoading } from '../../common/utils/effect';
// import { UserOutlined, LockOutlined } from '@ant-design/icons';
// const [form] = Form.useForm()

function CheckInfor() {
    const { Option } = Select


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
                            initialValue={localStorage.email}
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
                            initialValue={localStorage.phoneNumber}
                        >
                            <Input
                                disabled
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

                            initialValue={localStorage.name}
                        >
                            <Input
                                disabled
                                size='large'
                                type="text"
                                className="form-control unicase-form-control text-input"
                                id="name"
                            />
                        </Form.Item>
                    </div>

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
                        </Select>
                        {/* <PlusOutlined /> */}
                    </Form.Item>
                </Form>
            </div>

        </>
    )
}

export default CheckInfor
