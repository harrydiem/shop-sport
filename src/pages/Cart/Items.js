import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Select, InputNumber, Rate } from 'antd';
// import * as actionCarts from '../../actions/actionCarts'
import { MODULE_NAME as MODULE_CART } from '../../constain/cartConstain'
import { Link } from 'react-router-dom';
import formatNumber from '../../common/utils/formatNumber';

const { Option } = Select;
function onChange(value) {
    console.log('changed', value);
}
function Items() {
    const cartList = useSelector(state => state[MODULE_CART].carts)
    // const [cartsItem, setcartsItem] = useState({ cartsItem: {} })
    //const user = useSelector(state => state[MODULE_CART].user)
    // const dispatch = useDispatch()
    console.log("Store->", cartList)
    // console.log("State->", cartsItem)
    function handleChange(value) {
        console.log(`selected ${value}`);
    }

    function showItems() {
        let resutl = ''
        const items = cartList
        if (items.cartItemsDTO) {
            resutl = items.cartItemsDTO.map((item, index) => {
                return (
                    <tr key={index}>
                        <td className="romove-item"><Link to={"/detail/" + item.productId} title="cancel" className="icon"><i className="fa fa-trash-o" /></Link></td>
                        <td className="cart-image">
                            <a className="entry-thumbnail" href="/detail">
                                <img src={item.image} alt={item.productName} />
                            </a>
                        </td>
                        <td className="cart-product-name-info">
                            <h4 className="cart-product-description" style={{ maxWidth: "250px" }} >
                                <Link to={'/detail/' + item.productId}>
                                    {item.productName}
                                </Link>
                            </h4>
                            <div className="row">
                                <div className="col-sm-4">
                                    <div className="rating rateit-small rateit">
                                        <Rate defaultValue={4} disabled style={{ width: "102px", fontSize: "12px" }} ></Rate>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-8">
                                        <div className="reviews" style={{ margin: "5px 0 0 15px", fontSize: "12px" }}>
                                            (01 Đánh giá)
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div >
                            </div>
                        </td>
                        <td className="cart-product-edit">
                            <div className="row">
                                MÀU:
                            <Select size="middle" defaultValue={item.color} style={{ width: 100, margin: "0 0 5px 10px" }} onChange={handleChange}>
                                    <Option value="Xanh">Xanh</Option>
                                    <Option value="Đỏ">Đỏ</Option>
                                    <Option value="Trắng">Trắng</Option>
                                    <Option value="Vàng" disabled>
                                        Vàng
                                </Option>
                                </Select></div>
                            <div className="row">
                                SIZE :
                            <Select size="middle" defaultValue={item.size} style={{ width: 100, fontWeight: "bold", margin: "0 0 0 10px" }} onChange={handleChange}>
                                    <Option value="S">S</Option>
                                    <Option value="L">L</Option>
                                    <Option value="XL" disabled>XL</Option>
                                    <Option value="XXL">XZL</Option>
                                </Select>
                            </div>
                            {/* <a href=" " className="product-edit">Size</a> */}
                            <div >
                                {/* className="cart-product-info" */}


                            </div>
                        </td>
                        <td className="cart-product-quantity">
                            <InputNumber min={1} max={item.quantityOfWarehouse}
                                defaultValue={item.quantity}
                                size="large"
                                style={{
                                    fontWeight: 'bold',
                                    width: 60,
                                    borderRadius: "3px"
                                }}
                                onChange={onChange} />
                        </td>
                        <td className="cart-product-sub-total"><span className="cart-sub-total-price">{formatNumber(item.price, '.', '.')} VND</span></td>
                        <td className="cart-product-grand-total"><span className="cart-grand-total-price">{formatNumber(item.totalPrice, '.', '.')} VND</span></td>
                    </tr>
                )
            })
        } else return <></>
        return resutl
    }

    useEffect(() => {
        // setcartsItem({
        //     ...cartsItem,
        //     cartsItem: cartList
        // })
    }, [])

    return (
        <tbody>
            {showItems()}
        </tbody >
    )
}


export default Items

// eslint-disable-next-line no-lone-blocks
{/* <tr>
<td className="romove-item"><a href=" " title="cancel" className="icon"><i className="fa fa-trash-o" /></a></td>
<td className="cart-image">
    <a className="entry-thumbnail" href="detail.html">
        <img src="../assets/images/products/p1.jpg" alt="sa" />
    </a>
</td>
<td className="cart-product-name-info">
    <h4 className="cart-product-description" style={{ maxWidth: "250px" }} ><Link to='/detail'>Áo thun nữ Áo thun nữ </Link></h4>
    <div className="row">
        <div className="col-sm-4">
            <div className="rating rateit-small rateit"><button id="rateit-reset-2" data-role="none" className="rateit-reset" aria-label="reset rating" aria-controls="rateit-range-2" style={{ display: 'none' }} /><div id="rateit-range-2" className="rateit-range" tabIndex={0} role="slider" aria-label="rating" aria-owns="rateit-reset-2" aria-valuemin={0} aria-valuemax={5} aria-valuenow={4} aria-readonly="true" style={{ width: '70px', height: '14px' }}><div className="rateit-selected" style={{ height: '14px', width: '56px' }} /><div className="rateit-hover" style={{ height: '14px' }} /></div></div>
        </div>
        <div className="col-sm-8">
            <div className="reviews">
                (01 Đánh giá)
            </div>
        </div>
    </div>{/* /.row }

    <div >
        {/* className="cart-product-info" }
        {/* Màu  :
            <Select size="small" defaultValue="Trắng" style={{ width: 80 }} onChange={handleChange}>
            <Option value="blue">Xanh</Option>
            <Option value="red">Đỏ</Option>
            <Option value="white">Trắng</Option>
            <Option value="yellow" disabled>
                Vàng
                    </Option>
        </Select> /}
    </div>
</td>
<td className="cart-product-edit">
    SIZE :
    <Select size="middle" defaultValue="lucy" style={{ width: 90, fontWeight: "bold", margin: "0 0 5px 10px" }} onChange={handleChange}>
        <Option value="jack">S</Option>
        <Option value="lucy">L</Option>
        <Option value="Yiminghe">XXL</Option>
        <Option value="disabled" disabled>
            XL
        </Option>
    </Select>
    {/* <a href=" " className="product-edit">Size</a> /}
    <div >
        {/* className="cart-product-info" /}
        MÀU:
        <Select size="middle" defaultValue="Trắng" style={{ width: 90, margin: "0 0 0 10px" }} onChange={handleChange}>
            <Option value="blue">Xanh</Option>
            <Option value="red">Đỏ</Option>
            <Option value="white">Trắng</Option>
            <Option value="yellow" disabled>
                Vàng
                    </Option>
        </Select>

    </div>
</td>
<td className="cart-product-quantity">
    <InputNumber min={1} max={10}
        defaultValue={3}
        size="large"
        style={{
            fontWeight: 'bold',
            width: 60,
            borderRadius: "3px"
        }}
        onChange={onChange} />
</td>
<td className="cart-product-sub-total"><span className="cart-sub-total-price">60 000 VND</span></td>
<td className="cart-product-grand-total"><span className="cart-grand-total-price">60 000 VND</span></td>
</tr> */}

