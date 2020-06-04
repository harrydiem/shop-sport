import React, { useEffect, useState } from 'react'
import imgAdv from '../../common/assets/images/banners/LHS-banner.jpg'
import { Rate, message, InputNumber, Select, Button, Form } from 'antd'
import { fetchLoading } from '../../common/utils/effect'
import { Link } from 'react-router-dom'
import formatNumber from '../../common/utils/formatNumber'
import { HeartFilled } from '@ant-design/icons'
function Detail(props) {
    // console.log(props.match.params.id)
    const [state, setstate] = useState({})
    const [image, setimage] = useState({ name: '', url: '' })
    const [form] = Form.useForm()
    // console.log("list images: ", state.productImages)
    // console.log("Main Image:", image)
    const { Option } = Select;

    const onFinish = values => {
        console.log('Add:', values);
    };

    function onChange(value) {
        console.log('changed Quantity', value);
    }

    function handleChangeColor(value) {
        console.log(`selected ${value}`);
        getImageByColor(value)
    }
    async function getImageByColor(value) {

        try {

            let result = await fetchLoading({
                url: "http://localhost:5000/api/products/" + props.match.params.id + "/" + value,
                method: 'GET',
                params: { productId: props.match.params.id, productColorId: value }
            })
            let statusProducts = result.status
            if (statusProducts === 200) {
                if (result.data.data.length > 0) {
                    console.log("Change color: ", result.data.data)
                    setstate({ ...state, productImages: result.data.data })
                    setimage({ name: result.data.data[0].name, url: result.data.data[0].url })
                } else console.log("Change color: ", result.data.message)

            } else {
                message.error(result.data.message)
            }
        } catch (error) {
            console.log(error)
            message.error("Lỗi kết nối đến Server")
        }
    }
    function handleChangeSize(value) {
        console.log(`selected ${value}`);
    }

    useEffect(() => {
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
                    setimage({
                        name: result.data.data.productImages[0].name,
                        url: result.data.data.productImages[0].url
                    })
                    form.setFieldsValue({ selectColor: result.data.data.colors[0].id })
                    form.setFieldsValue({ selectSize: result.data.data.sizes[0] })
                } else {
                    message.error(result.data.message)
                }
            } catch (error) {
                console.log(error)
                message.error("Lỗi kết nối đến Server")
            }
        }
        getDetail()
        return () => {
            //cleanup
        }
    }, [])
    return (
        <div className="container">
            <div className="row single-product">
                <div className="col-md-3 sidebar">
                    <div className="sidebar-module-container">
                        <div className="home-banner outer-top-n">
                            <img src={imgAdv} alt="adad" />
                        </div>
                    </div>
                </div>
                {/* /.sidebar */}
                <div className="col-md-9">
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
                                                        <Link
                                                            data-lightbox="image-1"
                                                            data-title="Gallery"
                                                            to={"/detail/" + props.match.params.id}
                                                        >
                                                            <img
                                                                className="img-responsive"
                                                                alt={image.name}
                                                                src={(image.url) ? "http://localhost:5000" + image.url : ""}
                                                            // src={"http://localhost:5000" + image.url}
                                                            />
                                                        </Link>
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
                                                        {(state.productImages)
                                                            ? state.productImages.map((imageList, index) => {
                                                                return (

                                                                    <div className="owl-item" style={{ width: 80 }} key={index}>
                                                                        <div className="item">
                                                                            <Link
                                                                                onClick={() => setimage({ ...image, url: imageList.url })}
                                                                                className="horizontal-thumb active"
                                                                                data-target="#owl-single-product"
                                                                                data-slide={1}
                                                                                to="/detail/2"
                                                                            >
                                                                                <img
                                                                                    className="img-responsive"
                                                                                    width={85}
                                                                                    alt={imageList.name}
                                                                                    src={"http://localhost:5000" + imageList.url}
                                                                                />
                                                                            </Link>
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
                                                    <span className="price">{formatNumber(state.currentPrice, '.', '.')} VND</span>
                                                    <strike className="price-before-discount" style={{ color: '#f75b5b', fontSize: "25px", marginLeft: "20px" }}>{formatNumber(state.price, '.', '.')} VND</strike>
                                                    {/* <span >$900.00</span> */}
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
                                                <div className="col-sm-5" style={{ padding: 0 }}>
                                                    {/* <span className="label" style={{ marginRight: 2 }} >Màu:</span> */}
                                                    <Form.Item
                                                        label="Màu :"
                                                        name="selectColor"
                                                    >
                                                        <Select size="middle" style={{ width: 100 }} onChange={handleChangeColor}>
                                                            {(state.colors)
                                                                ? state.colors.map((color, index) => {
                                                                    return (
                                                                        <Option key={index} value={color.id}>{color.color}</Option>
                                                                    )
                                                                })
                                                                : <></>
                                                            }
                                                        </Select>
                                                    </Form.Item>


                                                </div>
                                                <div className="col-sm-4" style={{ padding: 0 }}>

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
                                                            min={1}
                                                            max={5}
                                                            size="large"
                                                            style={{
                                                                fontWeight: 'bold',
                                                                width: 60,
                                                                borderRadius: "3px"
                                                            }}
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
