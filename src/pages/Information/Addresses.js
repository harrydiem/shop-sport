import React, { useState, useEffect } from 'react'
import { Input, Form, Button, message, Modal } from 'antd'
import { DeleteFilled, EditFilled, FileAddOutlined } from '@ant-design/icons';
import { fetchLoading } from '../../common/utils/effect'
function Addresses() {
    const [address, setAddress] = useState([])
    const [visible, setVisible] = useState(false);
    const CreateAddress = ({ visible, onCreate, onCancel }) => {
        return (
            <Modal
                visible={visible}
                title="THÊM ĐỊA CHỈ"
                okText="Thêm"
                cancelText="Đóng"
                onCancel={onCancel}
                onOk={() => {
                    form
                        .validateFields()
                        .then(values => {
                            form.resetFields();
                            onCreate(values);
                        })
                        .catch(info => {
                            console.log('Cú pháp sai:', info);
                        });
                }}
            >
                <Form
                    form={form}
                    layout="vertical"
                    name="form_in_modal"
                    initialValues={{
                        modifier: 'public',
                    }}
                >
                    <Form.Item
                        name="cityCreate"
                        label="Thành Phố/Tỉnh"
                        rules={[
                            {
                                required: true,
                                message: 'Vui lòng không bỏ trống!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="districtCreate"
                        label="Quận/Huyện"
                        rules={[
                            {
                                required: true,
                                message: 'Vui lòng không bỏ trống!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="wardsCreate"
                        label="Xã/Phường"
                        rules={[
                            {
                                required: true,
                                message: 'Vui lòng không bỏ trống!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="addressCreate"
                        label="Số nhà/Thôn"
                        rules={[
                            {
                                required: true,
                                message: 'Vui lòng không bỏ trống!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                </Form>
            </Modal>
        );
    }
    const onCreate = async (values) => {
        console.log('Received values of form: ', values);
        let addaddress = "" + values.cityCreate + "-" + values.districtCreate + "-" + values.wardsCreate + "-" + values.addressCreate
        try {
            let result = await fetchLoading({
                url: `http://localhost:5000/api/Users/${localStorage.id}/addaddresses`,
                method: 'POST',
                data: { deliveryAddress: addaddress }
            }).then(
                message.success('Thêm thành công !')
            )
        } catch (e) {
            console.log(e)
            message.error('Đã có lỗi xảy ra !')
        }
        setVisible(false);
        getaddress()
    };


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

    const changeAddress = (index) => {
        console.log("change,", index)
        return true
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
                                                <div className="row" style={{ marginBottom: "5px" }}>
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
                                                            <div className='col-md-5' style={{ padding: 0 }}>
                                                                <Button icon={<DeleteFilled />} type="link" danger onClick={() => deleteAddress(e.id)}>
                                                                    Xóa
                                                               </Button>
                                                                <Button htmlType='submit' type='primary' disabled={changeAddress(index)} style={{ marginLeft: "20px" }}>Cập nhật</Button>
                                                            </div>

                                                        </>}

                                                </div>
                                                <div className="row">
                                                    <div className='col-md-1'></div>
                                                    <div className='col-md-2'>Tỉnh/Thành phố:</div>
                                                    <div className='formControl'>

                                                        <Form.Item
                                                            name={"city"}
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
                                                            name={"district"}
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
                                                            name={"wards"}
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
                                                    <div className='col-md-2'>Số nhà/Thôn:</div>
                                                    <div className='formControl'>
                                                        <Form.Item
                                                            name={"address"}
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
                                            {/* <div className='row'>
                                                <div className='col-md-3'></div>
                                                <div className='col-md-6'
                                                    style={{ padding: 0 }}>
                                                    <Button htmlType='submit' type='primary' style={{ marginButtom: "5px" }} >Cập nhật</Button>
                                                </div>
                                            </div> */}
                                            <hr />

                                        </Form>
                                    )
                                })
                                : <div>Không có địa chỉ</div>
                            }

                        </Form.Provider>

                        <div>
                            <Button type='primary'
                                onClick={() => {
                                    setVisible(true);
                                }}
                            >
                                <FileAddOutlined />
                                    Thêm địa chỉ mới
                                </Button>
                            <CreateAddress
                                visible={visible}
                                onCreate={onCreate}
                                onCancel={() => {
                                    setVisible(false);
                                }}
                            />
                        </div>


                    </div>
                    {/* panel-body  */}
                </div>
                {/* row */}
            </div>
        </div >
    )
}

export default Addresses
