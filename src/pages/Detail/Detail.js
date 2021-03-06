import React, { useEffect, useState } from 'react'
import { Rate, message, InputNumber, Select, Button, Form } from 'antd'
import { fetchLoading } from '../../common/utils/effect'
import * as actionCarts from '../../actions/actionCarts'
import formatNumber from '../../common/utils/formatNumber'
import { HeartFilled } from '@ant-design/icons'
import { useDispatch, useSelector, } from 'react-redux'
import { MODULE_NAME as MODULE_CART } from '../../constain/cartConstain'
function Detail(props) {
    const cartList = useSelector(state => state[MODULE_CART].carts)
    const dispatch = useDispatch()
    const [state, setstate] = useState({})
    // console.log("Detail -> state", state)
    const [image, setimage] = useState({ name: '', url: '' })
    // console.log("Detail -> image", image)
    const [form] = Form.useForm()
    const { Option } = Select;

    async function onFinish(values) {
        console.log(values)
        let GetQuantity = values.quantity + 1 //Khai báo mặc định là luôn lớn hơn số lượng đã chọn
        let paramss = values.selectColor === ""
            ? {
                productId: props.match.params.id,
                Size: "" + values.selectSize,
            } : {
                productId: props.match.params.id,
                Color: values.selectColor,
                Size: "" + values.selectSize,
            }
        try {
            let result = await fetchLoading({
                url: `http://localhost:5000/api/Products/${props.match.params.id}/GetQuantity`,
                method: 'GET',
                params: paramss
            })
            let statusProducts = result.status
            GetQuantity = result.data.data// Gán = Số lượng sp theo Size trả về
            if (statusProducts === 200) {
                GetQuantity = result.data.data
            } else {
                message.error("Đã xảy ra lỗi !")
            }
        } catch (error) {
            console.log(error)
            message.error("Lỗi kết nối đến Server")
        }
        if (values.quantity > GetQuantity) {//Số lượng vào > số lượng có
            message.warning(`Sản phầm màu :${values.selectColor} size: ${values.selectSize} không đủ số lượng !`)
        }
        else { //Số lượng có đủ
            let countItemInCart = 0 //tăng tạm 
            if (cartList) {
                if (cartList.cartItemsDTO) {
                    for (var i = 0; i < cartList.cartItemsDTO.length; i++) {
                        if (parseInt(cartList.cartItemsDTO[i].productId) === parseInt(props.match.params.id) && cartList.cartItemsDTO[i].color === values.selectColor && cartList.cartItemsDTO[i].size === values.selectSize)//Trung SP , Tang Num                                                 
                            countItemInCart = cartList.cartItemsDTO[i].quantity + parseInt(values.quantity) //     numcheck=numcart+ numadd  
                        console.log(cartList.cartItemsDTO[i].quantity, parseInt(values.quantity), countItemInCart)
                        break
                    }
                }
            }
            if (countItemInCart > 5) {
                message.warning('Số lượng mỗi sản phẩm trong giỏ hàng không vượt quá 5 sản phẩm')
            } else { //đủ số lượng và ko > 5
                if (localStorage.id) { //Login emty

                    try {
                        let result = await fetchLoading({
                            url: "http://localhost:5000/api/Carts/",
                            method: 'POST',
                            data: {
                                cartId: localStorage.id,
                                productId: props.match.params.id,
                                color: values.selectColor ? "" + values.selectColor : "",
                                size: "" + values.selectSize,
                                quantity: values.quantity
                            }
                        })
                        let statusProducts = result.status
                        if (statusProducts === 200) {
                            message.success("Sản phẩm đã được thêm vào giỏ hàng !")
                            await getCart() // Load xong fucn sẻ trả về cartList mới và tăng CountCart

                        } else {
                            message.error("Đã xảy ra lỗi !")
                        }
                    } catch (error) {
                        console.log(error)
                        message.error("Lỗi kết nối đến Server")
                    }
                } else //login false
                {
                    if (localStorage.dataCart) { //Local->dataCart find
                        const getCart = JSON.parse(localStorage.dataCart)
                        var updateCart = getCart
                        var checkPoint = false
                        for (var i = 0; i < updateCart.cartItemsDTO.length; i++) {
                            if (parseInt(updateCart.cartItemsDTO[i].productId) === parseInt(props.match.params.id) && updateCart.cartItemsDTO[i].color === values.selectColor && updateCart.cartItemsDTO[i].size === values.selectSize) {//Trung SP , Tang Num                                                 
                                updateCart.totalPrice += parseInt(state.currentPrice) * parseInt(values.quantity) //Price += Price * numAdd
                                updateCart.cartItemsDTO[i].quantity += parseInt(values.quantity) //     num+=numadd
                                checkPoint = true
                                break
                            }

                        }
                        if (!checkPoint) { //ko tìm thấy thì thêm mới
                            updateCart.countCart += 1
                            updateCart.totalPrice += parseInt(state.currentPrice) * parseInt(values.quantity)
                            updateCart.cartItemsDTO.push({
                                productId: parseInt(props.match.params.id),
                                productName: state.name,
                                size: values.selectSize,
                                color: values.selectColor,
                                price: state.currentPrice,
                                quantity: values.quantity,
                                productImageDTO: {
                                    url: state.productImages[0].url,
                                }
                            })
                        }
                        localStorage.setItem('dataCart', JSON.stringify(updateCart))
                        dispatch(actionCarts.FETCH_CART(updateCart)) // Sẽ bị xóa khi Có Login
                        dispatch(actionCarts.COUNT_CART(updateCart.countCart))
                        message.success("Sản phẩm đã được thêm vào giỏ hàng !")

                    }
                    else {//Local->dataCart Not Found
                        let dataCartNew = {
                            countCart: 1,
                            totalPrice: parseInt(state.currentPrice) * parseInt(values.quantity),
                            cartItemsDTO: [
                                {
                                    productId: parseInt(props.match.params.id),
                                    productName: state.name,
                                    size: values.selectSize,
                                    color: values.selectColor ? "" + values.selectColor : "",
                                    price: state.currentPrice,
                                    quantity: values.quantity,
                                    productImageDTO: {
                                        url: state.productImages[0].url,
                                    }
                                }
                            ]
                        }
                        localStorage.setItem('dataCart', JSON.stringify(dataCartNew))
                        dispatch(actionCarts.COUNT_CART(1))
                        dispatch(actionCarts.FETCH_CART(dataCartNew))
                        message.success("Sản phẩm đã được thêm vào giỏ hàng !")
                    }
                }
            }

        }

    }
    async function getCart() {
        try {
            let result = await fetchLoading({
                url: 'http://localhost:5000/api/carts/' + localStorage.id,
                method: 'GET',
                params: { userId: localStorage.id }
            })
            let statusProducts = result.status
            if (statusProducts === 200) {
                dispatch(actionCarts.COUNT_CART(result.data.data.cartItemsDTO.length))
                dispatch(actionCarts.FETCH_CART(result.data.data))
            }
        } catch (error) {
            console.log(error)
            message.error("Lỗi kết nối đến Server")
        }
    }

    function onChange(value) {
        // console.log('changed Quantity', value);
    }

    function handleChangeColor(value, option) {
        getImageByColor(option.key)
        getSize(option.value)
    }
    async function getImageByColor(value) {//value is idColor -_-
        try {
            let result = await fetchLoading({
                url: "http://localhost:5000/api/products/" + props.match.params.id + "/" + value,
                method: 'GET',
                params: { productId: props.match.params.id, productColorId: value }
            })
            let statusProducts = result.status
            if (statusProducts === 200) {
                if (result.data.data.length > 0) {
                    // setstate({ ...state, productImages: result.data.data })
                    setimage({ name: result.data.data[0].name, url: result.data.data[0].url, productImages: result.data.data })
                } else console.log("Đã xảy ra lỗi")
            } else {
                message.error("Đã xảy ra lỗi")
            }
        } catch (error) {
            console.log(error)
            message.error("Lỗi kết nối đến Server")
        }
    }
    function handleChangeSize(value) {
        // console.log(`selected  Size ${value}`);
    }

    async function getSize(color) {
        try {
            let result = await fetchLoading({
                url: `http://localhost:5000/api/Products/${props.match.params.id}/GetSizes`,
                method: 'GET',
                params: {
                    productId: props.match.params.id,
                    Color: color ? color : ""
                }
            })
            let statusProducts = result.status
            if (statusProducts === 200) {
                form.setFieldsValue({ selectSize: result.data.data[0] }) //
            } else {
                message.error("Đã có lỗi xảy ra !")
            }
        } catch (error) {
            console.log(error)
            message.error("Lỗi kết nối đến Server")
        }
    }
    async function getDetail() {
        try {
            let result = await fetchLoading({
                url: "http://localhost:5000/api/products/" + props.match.params.id,
                method: 'GET',
                params: props.match.params.id
            })
            let statusProducts = result.status
            if (statusProducts === 200) {
                setstate(result.data.data)
                form.setFieldsValue({ selectColor: result.data.data.colors[0].color })
                if (result.data.data.colors[0].color !== '') { //Có color là Áo
                    setimage({
                        name: result.data.data.productImages[0].name,
                        url: result.data.data.productImages[0].url
                    })
                    await getSize(result.data.data.colors[0].color)
                    await getImageByColor(result.data.data.colors[0].id)
                } else { //Giày ko có color
                    setimage({
                        name: result.data.data.productImages[0].name,
                        url: result.data.data.productImages[0].url,
                        productImages: result.data.data.productImages
                    })
                    form.setFieldsValue({ selectSize: result.data.data.sizes[0] })
                }


            } else {
                message.error("Đã có lỗi xảy ra !")
            }
        } catch (error) {
            console.log(error)
            message.error("Lỗi kết nối đến Server")
        }
    }

    useEffect(() => {

        getDetail()
        return () => {
            //cleanup
        }
    }, [])
    return (
        <div className="container" style={{ width: "80%" }}>
            <div className="row single-product">
                {/* <div className="col-md-3 sidebar">
                    <div className="sidebar-module-container">
                        <div className="home-banner outer-top-n">
                            <img src={imgAdv} alt="adad" />
                        </div>
                    </div>
                </div> */}
                {/* /.sidebar */}
                <div className="col-md-12">
                    <div className="detail-block">
                        <div
                            className="row  wow fadeInUp animated"
                            style={{ visibility: "visible", animationName: "fadeInUp" }}
                        >
                            <div className="col-xs-12 col-sm-6 col-md-5 gallery-holder">
                                <div className="product-item-holder size-big single-product-gallery small-gallery">
                                    <div
                                        id="owl-single-product"
                                        className="owl-carousel owl-theme"
                                        style={{ opacity: 1, display: "block" }}
                                    >
                                        <div className="owl-wrapper-outer">
                                            <div
                                                className="owl-wrapper"
                                                style={{
                                                    width: 4608,
                                                    left: 0,
                                                    display: "block",
                                                    transition: "all 0ms ease 0s",
                                                    transform: "translate3d(0px, 0px, 0px)"
                                                }}
                                            >
                                                <div className="owl-item" style={{ width: 340 }}>
                                                    <div className="single-product-gallery-item" id="slide1">
                                                        <a
                                                            data-lightbox="image-1"
                                                            data-title="Gallery"
                                                        >
                                                            <img
                                                                className="img-responsive"
                                                                alt={image.name}
                                                                src={(image.url) ? "http://localhost:5000" + image.url : ""}
                                                            />
                                                        </a>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>


                                        <div className="single-product-gallery-thumbs gallery-thumbs">
                                            <div
                                                id="owl-single-product-thumbnails"
                                                className="owl-carousel owl-theme"
                                                style={{ opacity: 1, display: "block" }}
                                            >
                                                <div className="owl-wrapper-outer">
                                                    <div
                                                        className="owl-wrapper"
                                                        style={{
                                                            width: 1440,
                                                            left: 0,
                                                            display: "block",
                                                        }}
                                                    >
                                                        {(image.productImages)
                                                            ? image.productImages.map((imageList, index) => {
                                                                return (

                                                                    <div className="owl-item" style={{ width: 80 }} key={index}>
                                                                        <div className="item">
                                                                            <a
                                                                                onClick={() => setimage({ ...image, url: imageList.url })}
                                                                                className="horizontal-thumb active"
                                                                                data-target="#owl-single-product"
                                                                                data-slide={1}
                                                                            >
                                                                                <img
                                                                                    className="img-responsive"
                                                                                    width={85}
                                                                                    alt={imageList.name}
                                                                                    src={"http://localhost:5000" + imageList.url}
                                                                                />
                                                                            </a>
                                                                        </div>
                                                                    </div>


                                                                )
                                                            })
                                                            : <></>
                                                        }

                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    {/* /.single-product-slider */}
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-7 product-info-block">
                                <div className="product-info">
                                    <h1 className="name">{state.name}</h1>
                                    <div className="rating-reviews m-t-20">
                                        <div className="row">
                                            <div className="col-sm-3" style={{}}>
                                                <div className="rating rateit-small rateit">
                                                    <Rate disabled defaultValue={4} style={{ fontSize: "15px", width: "215px" }} />
                                                </div>
                                            </div>
                                            <div className="col-sm-8">
                                                <div className="reviews">
                                                    <a href=" " className="lnk">
                                                        ({state.commentCount} Đánh giá)
                                                       </a>
                                                </div>
                                            </div>
                                        </div>
                                        {/* /.row */}
                                    </div>
                                    {/* /.rating-reviews */}
                                    <div className="stock-container info-container m-t-10">
                                        <div className="row">
                                            <div className="col-sm-2">
                                                <div className="stock-box">
                                                    <span className="label">Thể loại :</span>
                                                </div>
                                            </div>
                                            <div className="col-sm-9">
                                                <div className="stock-box">
                                                    <span className="value">Gym</span>
                                                </div>
                                            </div>
                                        </div>
                                        {/* /.row */}
                                    </div>
                                    {/* /.stock-container */}
                                    <div className="description-container m-t-20">
                                        {state.description}
                                        {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                        enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                        nisi ut aliquip ex ea commodo consequat. */}
                                    </div>
                                    {/* /.description-container */}
                                    <div className="price-container info-container m-t-20" style={{ padding: 0 }}>
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <div className="price-box">
                                                    <span className="label" style={{ marginRight: 2, color: "gray", fontSize: 17 }} >GIÁ :</span>
                                                    <span className="price">{formatNumber(state.currentPrice, '.', '.')} đ</span>
                                                    {((state.currentPrice === state.price) ? "" : <strike className="price-before-discount" style={{ color: '#f75b5b', fontSize: "25px", marginLeft: "20px" }}>{formatNumber(state.price, '.', '.')} đ</strike>)}
                                                </div>
                                            </div>
                                        </div>
                                        {/* /.row */}
                                    </div>
                                    {/* /.price-container */}
                                    <div className="quantity-container info-container">

                                        <Form onFinish={onFinish}
                                            form={form}
                                        >

                                            <div className="row">
                                                <div className="col-sm-3" style={{ padding: 0 }}>
                                                    {state.c}
                                                    <Form.Item
                                                        label="Màu :"
                                                        name="selectColor"
                                                    >
                                                        <Select size="middle" style={{ width: 100 }} onChange={handleChangeColor} >
                                                            {(state.colors)
                                                                ? state.colors.map((color, index) => {
                                                                    return (
                                                                        <Option key={color.id} value={color.color}>{color.color}</Option>
                                                                    )
                                                                })
                                                                : <></>
                                                            }
                                                        </Select>

                                                    </Form.Item>


                                                </div>
                                                <div className="col-sm-3" style={{ padding: 0 }}>

                                                    <Form.Item
                                                        label="Kích cỡ:"
                                                        name="selectSize"
                                                    >
                                                        <Select size="middle"
                                                            style={{ width: 70, fontWeight: "bold" }}
                                                            onChange={handleChangeSize}
                                                        >
                                                            {(state.sizes)
                                                                ? state.sizes.map((size, index) => {
                                                                    return (
                                                                        <Option key={index} value={size}>{size}</Option>
                                                                    )
                                                                })
                                                                : <></>}
                                                        </Select>
                                                    </Form.Item>
                                                </div>
                                                <div className="col-sm-3" style={{ padding: 0 }}>

                                                    <Form.Item
                                                        label="SL:"
                                                        name="quantity"
                                                        initialValue={1}
                                                        rules={[
                                                            { required: true, message: 'Bỏ trống!' },
                                                            { pattern: /^(0|[1-9][0-9]*)$/, message: 'Nhập số!' }
                                                        ]}
                                                    >
                                                        <InputNumber
                                                            className="numDetail"
                                                            min={1}
                                                            max={5}
                                                            size="large"
                                                            onChange={onChange}
                                                        />

                                                    </Form.Item>


                                                </div>
                                            </div>

                                            <div className="row m-t-10">
                                                <div className="col-sm-6">

                                                    <button type="submit" className="btn btn-primary checkout-btn">
                                                        <i className="fa fa-shopping-cart inner-right-vs" /> THÊM VÀO GIỎ
                                                     </button>

                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="favorite-button" title="Thêm vào danh sách yêu thích">
                                                        <Button size="large" className="addWishlist" style={{ height: 46, width: 55, borderRadius: 6 }}>
                                                            <HeartFilled className="addWishlist" />
                                                        </Button>

                                                    </div>
                                                </div>

                                            </div>
                                            {/* /.row */}
                                        </Form>
                                    </div>
                                    {/* /.quantity-container */}
                                </div>
                                {/* /.product-info */}
                            </div>
                            {/* /.col-sm-7 */}
                        </div>
                        {/* /.row */}
                    </div>
                </div>
                {/* /.col */}
                <div className="clearfix" />
            </div>
            {/* /.row */}
        </div>

    )

}
export default Detail
