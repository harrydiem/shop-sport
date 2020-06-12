
import React, { useState, useEffect } from 'react'
// import CheckInfor from './CheckInfor';
import CheckoutOption from './CheckoutOption';
import * as actionCarts from '../../actions/actionCarts'
import { Button, Steps, message, Form, Input, Select, Radio } from 'antd';
import { fetchLoading } from '../../common/utils/effect';
import { useHistory } from 'react-router-dom';
import { MODULE_NAME as MODULE_CART } from '../../constain/cartConstain'
import { useSelector, useDispatch } from 'react-redux';

const { Option } = Select


function Checkout() {
    const [form] = Form.useForm()
    const history = useHistory()
    const [current, setCurrent] = useState(0)
    const [valueRadio, setValueRadio] = useState(1)
    const [stripe, setStripe] = useState(false)
    const [address, setAddress] = useState([])
    const dispatch = useDispatch()
    const dataCheckout = useSelector(state => state[MODULE_CART].checkout)

    console.log("Checkout -> dataCheckout", dataCheckout)
    //Step 1 
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
    const onChangeRadio = e => {
        console.log('radio checked', e.target.value);
        setValueRadio(e.target.value);
        // if (e.target.value === 2) {
        //     e.target.value === 2 ? setStripe(true) : ''
        // }
    };

    async function ClickCheckOut() {
        if (valueRadio === 1) {
            try {
                let result = await fetchLoading({
                    url: `http://localhost:5000/api/Orders`,
                    method: 'POST',
                    data: {
                        paymentMethod: "Thanh toán khi nhận hàng",
                        shipName: "Giao hàng tiết kiệm",
                        shipPrice: 10000,
                        userId: localStorage.id,
                        addressId: dataCheckout.addressId
                    }
                })
                let statusProducts = result.status
                if (statusProducts === 200) {
                    message.success('Thanh Toán Thành Công')
                    localStorage.setItem('dataCart', JSON.stringify({ countCart: 0 }))
                    dispatch(actionCarts.COUNT_CART(0))
                    history.push('/orders')
                }
            } catch (error) {
                console.log(error)
                message.error("Lỗi kết nối đến Server")
            }
        }
        else {
            message.success("Stripe")
        }


    }

    const onFinish = values => {
        console.log('Received values of form: ', values);
    }

    function onChange(value) { //Selected
        console.log(`selected ${value}`);
        let checkout = dataCheckout
        checkout.addressId = value
        dispatch(actionCarts.CHECKOUT(checkout))
        history.push("/checkout")
    }

    function onBlur() {
        // console.log('blur');
    }

    function onFocus() {
        // console.log('focus');
    }

    function onSearch(val) {
        console.log('search:', val);
    }


    async function getAddress() {
        try {
            let result = await fetchLoading({
                url: `http://localhost:5000/api/Users/${localStorage.id}/getaddresses`,
                method: 'GET',
            })
            let statusProducts = result.status
            if (statusProducts === 200) {

                console.log("Co Dia chi :", result.data)
                setAddress(result.data.data)//Show option
                //redux can` 1  checkout.addressId mac dinh (luc dau` la API)       
                if (dataCheckout.addressId === 0) {
                    //Nếu load lại trang thì  -> dataCheckout.addressId === 0
                    form.setFieldsValue({ selectAddress: result.data.data[0].id })
                    let checkout = dataCheckout
                    checkout.userId = localStorage.id
                    checkout.addressId = result.data.data[0].id
                    dispatch(actionCarts.CHECKOUT(checkout))
                } else {
                    //Da dc thay doi , Ko load lại trang
                    console.log("redux", dataCheckout.addressId)
                    console.log("mac dinh", result.data.data[0].id)
                    form.setFieldsValue({ selectAddress: dataCheckout.addressId })
                }

            }
        } catch (error) {
            console.log(error)
            message.error("Lỗi kết nối đến Server")
        }
    }
    const radioStyle = {
        // display: 'block',
        height: '30px',
        lineHeight: '30px',
    }

    useEffect(() => {
        getAddress()
    }, [])
    return (
        <div className="container">
            <div className="steps-content">


                <div className="sign-in-page" style={{ borderRadius: "10px", border: "NONE", marginTop: "10px" }}>

                    <>
                        <legend ><h4 style={{ margin: "0 0 10px 0" }}>XÁC NHẬN THÔNG TIN ĐẶT HÀNG</h4></legend>

                        <div className="checkout-box ">
                            <div className="row">
                                <div className="col-md-8">
                                    <div className="panel-group checkout-steps" id="accordion">
                                        <div className="panel panel-default checkout-step-01">
                                            <div className="panel-heading">
                                                <h4 className="unicase-checkout-title">
                                                    <a
                                                        style={{
                                                            display: "inline-block",
                                                            marginRight: 10,
                                                            padding: "15px 20px"
                                                        }}
                                                    >
                                                        THÔNG TIN TÀI KHOẢN
                                                 </a>
                                                </h4>
                                            </div>
                                            <div id="collapseOne" className="panel-collapse collapse in">
                                                <div className="panel-body">


                                                    <Form onFinish={() => onFinish()}
                                                        form={form}
                                                        {...formItemLayout}
                                                        className="register-form outer-top-xs formCheckout"
                                                        style={{ width: "95%", display: 'inline-block' }}
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
                                                            name="selectAddress"
                                                            id="selectAddress"
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
                                                                    option.children.toString().toLowerCase().indexOf(input.toLowerCase()) >= 0
                                                                }
                                                            >
                                                                {address
                                                                    ? address.map((e, index) => {
                                                                        return (
                                                                            <Option key={e.id} value={e.id}> {e.deliveryAddress}</Option>
                                                                        )
                                                                    })
                                                                    : <></>

                                                                }
                                                            </Select>

                                                        </Form.Item>

                                                        <Radio.Group onChange={(e) => onChangeRadio(e)} value={valueRadio}>
                                                            <Radio style={radioStyle} value={1}>
                                                                Thanh toán khi giao hàng
                                                             </Radio>
                                                            <Radio style={radioStyle} value={2}>
                                                                Thanh Toán Bằng Ví Điện Tử
                                                            </Radio>

                                                        </Radio.Group>

                                                        {(valueRadio === 2)
                                                            ? <Form.Item
                                                                label="."
                                                                name="Stripe"
                                                                initialValue="Carts"
                                                            >
                                                                <Input />

                                                            </Form.Item>
                                                            : <></>
                                                        }

                                                    </Form>


                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">

                                    <div className="cart-shopping-total">
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th>
                                                        <div className="cart-sub-total">

                                                            <legend ><h4 style={{ margin: "0 0 10px 0" }}>THÔNG TIN THANH TOÁN</h4></legend>


                                                        </div>
                                                        <div className="cart-grand-total">
                                                            Giá Trị Đơn Hàng: <span className="inner-left-md">800.000 VNĐ</span>
                                                        </div>
                                                    </th>
                                                </tr>
                                            </thead>{/* /thead */}
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <div className="cart-checkout-btn pull-right">
                                                            <button onClick={() => ClickCheckOut()} type="submit" className="btn btn-primary checkout-btn">THANH TOÁN</button>
                                                            {/* <span >Cần xác thực thêm thông tin !</span> */}
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>{/* /tbody */}
                                        </table>{/* /table */}
                                    </div>



                                </div>

                            </div>

                        </div>;




                    </>

                </div>

            </div>

        </div >
    )
}

export default Checkout




// import React, { useState, useEffect } from 'react'
// // import CheckInfor from './CheckInfor';
// import CheckoutOption from './CheckoutOption';
// import * as actionCarts from '../../actions/actionCarts'
// import { Button, Steps, message, Form, Input, Select } from 'antd';
// import { fetchLoading } from '../../common/utils/effect';
// import { useHistory } from 'react-router-dom';
// import { MODULE_NAME as MODULE_CART } from '../../constain/cartConstain'
// import { useSelector, useDispatch } from 'react-redux';

// const { Step } = Steps;
// const { Option } = Select


// function Checkout() {
//     const [form] = Form.useForm()
//     const history = useHistory()
//     const [current, setCurrent] = useState(0)
//     const [address, setAddress] = useState([])
//     const dispatch = useDispatch()
//     const dataCheckout = useSelector(state => state[MODULE_CART].checkout)

//     console.log("Checkout -> dataCheckout", dataCheckout)
//     //Step 1 
//     const formItemLayout = {
//         labelCol: {
//             xs: { span: 27 },
//             sm: { span: 5 },
//         },
//         wrapperCol: {
//             xs: { span: 24 },
//             sm: { span: 16 },
//         },
//     }
//     const onFinish = values => {
//         console.log('Received values of form: ', values);
//     }

//     function onChange(value) { //Selected
//         console.log(`selected ${value}`);
//         let checkout = dataCheckout
//         checkout.addressId = value
//         dispatch(actionCarts.CHECKOUT(checkout))
//         history.push("/checkout")
//     }

//     function onBlur() {
//         // console.log('blur');
//     }

//     function onFocus() {
//         // console.log('focus');
//     }

//     function onSearch(val) {
//         console.log('search:', val);
//     }

//     //1
//     const steps = [
//         {
//             title: 'Xác Nhận Thông Tin',
//             content: CheckInfor(),
//         },
//         {
//             title: 'Phương Thức Thanh Toán',
//             content: CheckoutOption(),
//         },
//         {
//             title: 'Kiểm Tra Đơn Hàng',
//             content: 'Thông tin đơn hàng',
//         },
//         {
//             title: 'Hoàn Thành',
//             content: 'Đơn hàng đang được xác nhận',
//         },
//     ];

//     async function getAddress() {
//         try {
//             let result = await fetchLoading({
//                 url: `http://localhost:5000/api/Users/${localStorage.id}/getaddresses`,
//                 method: 'GET',
//             })
//             let statusProducts = result.status
//             if (statusProducts === 200) {

//                 console.log("Co Dia chi :", result.data)
//                 setAddress(result.data.data)//Show option
//                 //redux can` 1  checkout.addressId mac dinh (luc dau` la API)       
//                 if (dataCheckout.addressId === 0) {
//                     //Nếu load lại trang thì  -> dataCheckout.addressId === 0
//                     form.setFieldsValue({ selectAddress: result.data.data[0].id })
//                     let checkout = dataCheckout
//                     checkout.userId = localStorage.id
//                     checkout.addressId = result.data.data[0].id
//                     dispatch(actionCarts.CHECKOUT(checkout))
//                 } else {
//                     //Da dc thay doi , Ko load lại trang
//                     console.log("redux", dataCheckout.addressId)
//                     console.log("mac dinh", result.data.data[0].id)
//                     form.setFieldsValue({ selectAddress: dataCheckout.addressId })
//                 }

//             }
//         } catch (error) {
//             console.log(error)
//             message.error("Lỗi kết nối đến Server")
//         }
//     }
//     function CheckInfor() {
//         return (
//             <>
//                 <legend ><h4 style={{ margin: "0 0 25px 0" }}>XÁC NHẬN THÔNG TIN CÁ NHÂN</h4></legend>

//                 {/* <div className="social-sign-in outer-top-xs">
//                 </div> */}
//                 <Form onFinish={() => onFinish()}
//                     form={form}
//                     {...formItemLayout}
//                     className="register-form outer-top-xs formCheckout"
//                     style={{ width: "80%", display: 'inline-block' }}
//                 >
//                     <div className="form-group">
//                         <Form.Item
//                             className='inputCheckout'
//                             label="Email"
//                             name="email"
//                             initialValue={localStorage.email}
//                         >
//                             <Input
//                                 disabled
//                                 size='large'
//                                 placeholder="Nhập địa chỉ Email..."
//                                 className="form-control unicase-form-control text-input"
//                                 id="InputEmail1"
//                             />
//                         </Form.Item>
//                     </div>
//                     <div className="form-group">
//                         <Form.Item
//                             className='inputCheckout'
//                             label="SĐT"
//                             name="phoneNum"
//                             initialValue={localStorage.phoneNumber}
//                         >
//                             <Input
//                                 disabled
//                                 size='large'
//                                 type="text"
//                                 className="form-control unicase-form-control text-input"
//                                 id="InputPass1"
//                             />
//                         </Form.Item>
//                     </div>
//                     <div className="form-group">
//                         <Form.Item
//                             className='inputCheckout'
//                             label="Tên"
//                             name="name"

//                             initialValue={localStorage.name}
//                         >
//                             <Input
//                                 disabled
//                                 size='large'
//                                 type="text"
//                                 className="form-control unicase-form-control text-input"
//                                 id="name"
//                             />
//                         </Form.Item>
//                     </div>

//                     <Form.Item
//                         label="Chọn Địa Chỉ"
//                         name="selectAddress"
//                         id="selectAddress"
//                     >

//                         <Select
//                             size="large"
//                             showSearch
//                             // style={{ float: "left" }}
//                             placeholder="Chọn 1 địa chỉ"
//                             optionFilterProp="children"
//                             onChange={onChange}
//                             onFocus={onFocus}
//                             onBlur={onBlur}
//                             onSearch={onSearch}
//                             filterOption={(input, option) =>
//                                 option.children.toString().toLowerCase().indexOf(input.toLowerCase()) >= 0
//                             }
//                         >
//                             {address
//                                 ? address.map((e, index) => {
//                                     return (
//                                         <Option key={e.id} value={e.id}> {e.deliveryAddress}</Option>
//                                     )
//                                 })
//                                 : <></>

//                             }
//                             {/* <Option value="default">Hồ Chí Minh - Quận 5 - Phường 3 - 273 An Dương Vương</Option>
//                                 <Option value="addrss2">Hồ Chí Minh - Tân Bình - Phường 9 - 192/9 Âu Cơ </Option> */}
//                         </Select>
//                         {/* <PlusOutlined /> */}
//                     </Form.Item>
//                 </Form>




//             </>
//         )
//     }

//     function CheckoutOption() {
//         return (
//             <>
//                 <legend ><h4 style={{ margin: "0 0 25px 0" }}>CHỌN PHƯƠNG THỨC THANH TOÁN</h4></legend>
//             </>
//         )

//     }

//     function next() {
//         setCurrent(current + 1);
//     }

//     function prev() {
//         setCurrent(current - 1);
//     }

//     useEffect(() => {
//         getAddress()
//     }, [])
//     return (
//         <div className="container">
//             <Steps current={current}>
//                 {steps.map(item => (
//                     <Step key={item.title} title={item.title} />
//                 ))}
//             </Steps>
//             <div className="steps-content">

//                 <div className="sign-in-page" style={{ borderRadius: "10px", borderColor: "#bebcbc" }}> {steps[current].content}</div>

//             </div>
//             <div className="steps-action">
//                 {current < steps.length - 1 && (<>
//                     <Button type="primary" className="btnCheckout" style={{ float: "left" }} size="large" onClick={() => history.push('/cart')}>
//                         QUAY LẠI GIỎ HÀNG
//                 </Button>
//                     <Button type="primary" className="btnCheckout" style={{ float: "right" }} size="large" onClick={() => next()}>
//                         BƯỚC KẾ TIẾP
//                </Button>
//                 </>
//                 )}
//                 {current === steps.length - 1 && (
//                     <Button type="primary" className="btnCheckout" size="large" onClick={() => message.success('Processing complete!')}>
//                         ĐẶT HÀNG
//                     </Button>
//                 )}
//                 {current > 0 && (
//                     <Button size="large" className="btnCheckout" style={{ margin: '0 8px', float: "right" }} onClick={() => prev()}>
//                         QUAY LẠI
//                     </Button>
//                 )}
//             </div>
//         </div>
//     )
// }

// export default Checkout
