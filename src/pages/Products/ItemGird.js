import React, { } from 'react'
import { Link } from 'react-router-dom'
import { Rate, message, Result } from 'antd'
import imgYoga from '../../common/assets/images/products/gym-black.jpg'
import { useSelector } from 'react-redux'
import { MODULE_NAME as MODULE_PRODUCTS } from '../../constain/productsConstain'
import { HeartFilled } from '@ant-design/icons'
import formatNumber from '../../common/utils/formatNumber'
import { fetchLoading } from '../../common/utils/effect'
function ItemGird() {
    const listProducts = useSelector(state => state[MODULE_PRODUCTS].products)
    console.log("ItemGird -> listProducts", listProducts)
    function showProducts() {

        async function addToCart(id) {
            console.log(id)
            if (!localStorage.id) {
                message.success('Bạn cần đăng nhập để thêm vào Yêu thích')
            } else {
                try {
                    let result = await fetchLoading({
                        url: 'http://localhost:5000/api/WishLists',
                        method: 'POST',
                        data: {
                            userId: localStorage.id,
                            productId: id
                        }
                    })
                    if (result.status === 200) {
                        message.success('Sản phẩm đã được thêm vào Yêu thích')
                        //Cong voi so luong trong GH co san
                    } else {//Bad Request => 0
                        message.warning('Sản phẩm này đã có trong Yêu thích')
                    }
                } catch (error) {
                    console.log(error)
                    message.error("Lỗi kết nối đến Server")
                }
            }
        }
        let resutl = ''
        if (listProducts.items) {
            if (listProducts.items.length === 0) {
                return <Result
                    status="404"
                    title="KHÔNG TÌM THẤY"
                    subTitle="LỰA CHỌN CỦA BẠN KHÔNG TÌM THẤY KẾT QUẢ"
                />
            } else
                resutl = listProducts.items.map((product, index) => {
                    return (
                        <div key={product.id} className="col-sm-6 col-md-4 wow fadeInUp animated" style={{ visibility: 'visible', animationName: 'fadeInUp' }}>
                            <div className="products">
                                <div className="product">
                                    <div className="product-image"
                                    >
                                        <div className="image">
                                            <Link to={"/detail/" + product.id}><img src={(product.productImages[0]) ? "http://localhost:5000" + product.productImages[0].url : imgYoga} alt={product.name} /></Link>
                                        </div>
                                        {product.price === product.currentPrice ? "" :
                                            (<div className="tag hot">
                                                <span>SALE</span>
                                            </div>)
                                        }
                                        {/* {parseInt(product.price)===parseInt(product.promotionPrice)) ? "" : (<div className="tag HOT"><span>-20%</span></div>)} */}
                                        {product.quantity === 0 ? (<div className="tag sale"><span>HẾT</span></div>) : ""}
                                        {/* /.image */}
                                    </div>
                                    {/* /.product-image */}
                                    <div className="product-info text-left">
                                        <h3 className="name" style={{ marginTop: "10px", fontSize: '14px' }}><Link to={"/detail/" + product.id}>{product.name}</Link></h3>
                                        <div className="ratingProduct">
                                            <Rate disabled defaultValue={4} className="rateit-range" style={{ height: '15px', fontSize: "13px" }} />
                                        </div>
                                        <div className="description" />
                                        <div className="product-price">
                                            {product.price === product.currentPrice ? (
                                                <span className="price">{formatNumber(product.currentPrice, '.', '.')} VND</span>
                                            ) : (<>
                                                <span className="price">{formatNumber(product.currentPrice, '.', '.')} VND</span>
                                                <span className="price-before-discount" style={{ color: '#f75b5b', fontSize: "12px" }}><strike>{formatNumber(product.price, '.', '.')} VND</strike></span>
                                            </>
                                                )}
                                        </div>
                                    </div>
                                    {/* /.product-info */}
                                    <div className="cart clearfix animate-effect">
                                        <div className="action">
                                            <ul className="list-unstyled" style={{ margin: "10px 0 0 42px" }}>

                                                <li className="lnk wishlist">
                                                    <Link className="add-to-cart" onClick={() => addToCart(product.id)} to='/products' title="Thêm vào danh sách yêu thích">
                                                        <HeartFilled className="addWishlist clickActive" />
                                                        {/* <i className="icon fa fa-heart" />  */}
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
        }
        else return <div>Loading . . .</div>
        return resutl
    }
    return (
        <>
            {showProducts()}
        </>
    )
}
export default ItemGird

