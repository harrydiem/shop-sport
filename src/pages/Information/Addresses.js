import React, { useState, useEffect } from 'react'
import { Input, Form, Button, message } from 'antd'
import { DeleteFilled, EditFilled } from '@ant-design/icons';
import { fetchLoading } from '../../common/utils/effect'
function Addresses() {
    const [address, setAddress] = useState([])

    const [form] = Form.useForm()

    const onFinish = (value) => {

        console.log("Cap nhat ", value)
        // for (var i = 0; i < address.length; i++) {

        // }
    }
    // const onFormFinish = (name) => {
    //     console.log("name form", name)
    // }
    function cutAddress(address) {
        return address.split("-")
    }
    function setDefaultAddress(id) {
        console.log(id)
    }
    function deleteAddress(id) {
        console.log(id)
    }
    async function getaddress() {

        try {
            let result = await fetchLoading({
                url: `http://localhost:5000/api/Users/${localStorage.id}/getaddresses`,
                method: 'GET',
                // headers: { Authorization: 'Bearer ' + localStorage.token }
            })
            console.log(result)
            let statusProducts = result.status
            if (statusProducts === 200) {
                console.log("Co Dia chi :", result.data.data)
                setAddress(result.data.data)
            }
        } catch (error) {
            console.log(error)
            message.error("Lỗi kết nối đến Server")
        }
    }
    useEffect(() => {
        getaddress()
    }, [])

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
                            ĐỊA CHỈ CỦA TÔI
                                         </a>
                    </h4>
                </div>
                {/* panel-heading */}
                <div id="collapseOne" className="panel-collapse collapse in">
                    {/* panel-body  */}
                    <div className="panel-body">

                        <Form.Provider
                            // onFormFinish={onFormFinish}
                            onFormFinish={name => {
                                console.log(name)
                                // if (name === 'form0') {
                                //     // Do something...
                                //     console.log("form 1")
                                // }
                            }}
                        >

                            {(address)
                                ?
                                address.map((e, index) => {
                                    return (
                                        <Form
                                            key={index}
                                            name={'form' + index}
                                            onFinish={onFinish}
                                        >
                                            <div className="address">
                                                <div className="row">
                                                    <div className="col-md-3">
                                                        <label className='input-label '>
                                                            Địa chỉ
                                                <div style={{ fontStyle: 'italic', display: 'contents' }}>{" ("}{index === 0 ? "Mặc định" : e.id}{")"}</div>
                                                        </label>
                                                    </div>
                                                    {(index === 0) ? ""
                                                        : <><div className='col-md-3' style={{ padding: 0 }}>
                                                            <Button icon={<EditFilled />} type="link" onClick={() => setDefaultAddress(e.id)}>
                                                                Đặt làm mặc định
                                                      </Button>
                                                        </div>
                                                            <div className='col-md-4' style={{ padding: 0 }}>
                                                                <Button icon={<DeleteFilled />} type="link" danger onClick={() => deleteAddress(e.id)}>
                                                                    Xóa
                                                     </Button>
                                                            </div></>}

                                                </div>
                                                <div className="row">
                                                    <div className='col-md-1'></div>
                                                    <div className='col-md-2'>Tỉnh/Thành phố:</div>
                                                    <div className='formControl'>

                                                        <Form.Item
                                                            name={"city" + e.id}
                                                            className='col-md-6'
                                                            style={{ marginBottom: "20px" }}
                                                            initialValue={cutAddress(e.deliveryAddress)[0]}
                                                        >
                                                            <Input
                                                            // defaultValue={e.deliveryAddress}
                                                            ></Input>
                                                        </Form.Item>

                                                    </div>
                                                    <div />
                                                </div>
                                                <div className="row">
                                                    <div className='col-md-1'></div>
                                                    <div className='col-md-2'>Quận/Huyện: </div>
                                                    <div className='formControl'>
                                                        <Form.Item
                                                            name={"district" + e.id}
                                                            className='col-md-6'
                                                            style={{ marginBottom: "20px" }}
                                                            initialValue={cutAddress(e.deliveryAddress)[1]}
                                                        >
                                                            <Input

                                                            ></Input>
                                                        </Form.Item>

                                                    </div>
                                                    <div />
                                                </div>

                                                <div className="row">
                                                    <div className='col-md-1'></div>
                                                    <div className='col-md-2'>Phường/Xã:</div>
                                                    <div className='formControl'>
                                                        <Form.Item
                                                            name={"wards" + e.id}
                                                            className='col-md-6'
                                                            style={{ marginBottom: "20px" }}
                                                            initialValue={cutAddress(e.deliveryAddress)[2]}
                                                        >
                                                            <Input

                                                            ></Input>
                                                        </Form.Item>

                                                    </div>
                                                    <div />
                                                </div>
                                                <div className="row">
                                                    <div className='col-md-1'></div>
                                                    <div className='col-md-2'>Thôn/Số nhà:</div>
                                                    <div className='formControl'>
                                                        <Form.Item
                                                            name={"address" + e.id}
                                                            className='col-md-6'
                                                            style={{ marginBottom: "20px" }}
                                                            initialValue={cutAddress(e.deliveryAddress)[3]}
                                                        >
                                                            <Input

                                                            ></Input>
                                                        </Form.Item>
                                                        <div className='col-md-2'></div>
                                                    </div>
                                                    <div />
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className='col-md-3'></div>
                                                <div className='col-md-6'
                                                    style={{ padding: 0 }}>
                                                    <Button htmlType='submit' type='primary'>CẬP NHẬT</Button>
                                                </div>
                                            </div>


                                        </Form>
                                    )
                                })
                                : <div>Không có địa chỉ</div>
                            }

                        </Form.Provider>


                    </div>
                    {/* panel-body  */}
                </div>
                {/* row */}
            </div>
        </div >
    )
}

export default Addresses
