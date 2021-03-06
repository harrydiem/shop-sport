import React, { useEffect, useState } from 'react'
import { Input, Form, Button, message, Select } from 'antd'
import { fetchLoading } from '../../common/utils/effect'
import { EditOutlined, SolutionOutlined, MailOutlined, PhoneOutlined, EnvironmentOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';


function Information() {
    const [address, setAddress] = useState([])
    const { Option } = Select
    const [form] = Form.useForm()

    const onFinish = async (value) => {
        console.log(value)

        try {
            let result = await fetchLoading({
                url: `http://localhost:5000/api/Users/${localStorage.id}/Update`,
                method: 'PUT',
                data: {
                    userId: localStorage.id,
                    name: value.firstname,
                    phoneNumber: value.phone,
                }
            })
            let statusProducts = result.status
            if (statusProducts === 200) {
                // console.log(result.data)
                localStorage.setItem("name", value.firstName)
                localStorage.setItem("phoneNumber", value.phone)
                message.success("Thông tin đã được cập nhật !")
                // form.setFieldsValue({ firstname: result.data.data.firstName })
            }
        } catch (error) {
            console.log(error)
            message.error("Lỗi kết nối đến Server")
        }
    }

    async function getUser() {

        try {
            let result = await fetchLoading({
                url: `http://localhost:5000/api/Users/${localStorage.id}`,
                method: 'GET',
                params: { userId: localStorage.id }
            })
            let statusProducts = result.status
            if (statusProducts === 200) {
                console.log(result.data)
                form.setFieldsValue({ firstname: result.data.data.firstName, email: result.data.data.email, phone: result.data.data.phoneNumber })
            }
        } catch (error) {
            console.log(error)
            message.error("Lỗi kết nối đến Server")
        }
    }

    useEffect(() => {
        async function getAddress() {

            try {
                let result = await fetchLoading({
                    url: `http://localhost:5000/api/Users/${localStorage.id}/getaddresses`,
                    method: 'GET',
                })
                let statusProducts = result.status
                if (statusProducts === 200) {
                    console.log("Co Dia chi :", result.data)
                    form.setFieldsValue({ selectAddress: result.data.data[0].id })
                    setAddress(result.data.data)
                }
            } catch (error) {
                console.log(error)
                message.error("Lỗi kết nối đến Server")
            }
        }
        getUser()
        getAddress()
    }, [])
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
        <div className="panel-group checkout-steps" id="accordion">
            <div className="panel panel-default checkout-step-01">
                <div className="panel-heading">
                    <h4 className="unicase-checkout-title">
                        <a
                            style={{
                                display: "inline-block",
                                marginRight: " 10px",
                                padding: "15px 20px"
                            }}
                        > Thông tin tài khoản
                                             </a>
                    </h4>
                </div>
                {/* panel-heading */}
                <div id="collapseOne" className="panel-collapse collapse in">
                    {/* panel-body  */}
                    <div className="panel-body">

                        <Form
                            onFinish={onFinish}
                            form={form}
                        >
                            <div className="row">
                                <div className='formControl'>
                                    <label className='input-label col-md-2'>Email: </label>
                                    <Form.Item
                                        name='email'
                                        className='col-md-6'
                                        style={{ margin: "0 0 20px 0" }}
                                    // initialValue={localStorage.getItem('email')}
                                    >
                                        <Input
                                            addonBefore={<MailOutlined />}
                                            disabled
                                        ></Input>
                                    </Form.Item>

                                </div>
                            </div>

                            <div className="row">
                                <div className='formControl'>
                                    <label className='input-label col-md-2'>Tên: </label>
                                    <Form.Item
                                        name='firstname'
                                        className='col-md-6'
                                        style={{ margin: "0 0 20px 0" }}

                                    >
                                        <Input
                                            addonBefore={<SolutionOutlined />}

                                        ></Input>
                                    </Form.Item>
                                </div>
                                <div />
                            </div>
                            <div className="row">
                                <div className='formControl'>
                                    <label className='input-label col-md-2'>SĐT: </label>
                                    <Form.Item
                                        name='phone'
                                        className='col-md-6'
                                        style={{
                                            marginBottom: "20px",
                                        }}
                                    // initialValue={localStorage.phoneNumber}
                                    >
                                        <Input

                                            addonBefore={<PhoneOutlined />}
                                        ></Input>
                                    </Form.Item>
                                </div>
                                <div />
                            </div>
                            <div className="row">
                                <div className='formControl'>
                                    <label className='input-label col-md-2'>Địa chỉ : </label>
                                    {/* <div className='col-md-6'>HCM -Q5 -P3</div> */}
                                    {/* <Form.Item
                                        className='col-md-6'
                                        style={{ marginBottom: "20px" }}
                                    >
                                        <Input
                                            defaultValue="HCM -Q5 -P3"
                                        ></Input>
                                    </Form.Item> */}

                                    {address ?
                                        <div>
                                            <div
                                                className='col-md-6'
                                                style={{ marginBottom: "20px", fontSize: "15px" }}
                                            >   <EnvironmentOutlined />
                                                {address.length > 0 ? " " + address[0].deliveryAddress : ''}
                                            </div>
                                            <div className='col-md-4'>
                                                <Link to='/information/addresses'>
                                                    <EditOutlined />
                                                      Địa chỉ mặc định
                                                </Link>
                                            </div>
                                        </div>
                                        : <div>Chưa có</div>
                                    }

                                </div>


                                <div />
                            </div>
                            <div className='row'>
                                <div className='col-md-2'></div>
                                <div className='col-md-6'
                                    style={{ padding: 0 }}>
                                    <Button htmlType='submit'>CẬP NHẬT</Button>
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

export default Information
