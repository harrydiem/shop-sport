import React from 'react'
import { Link } from 'react-router-dom'
import { Rate } from 'antd'
import { useSelector } from 'react-redux'
import { MODULE_NAME as MODULE_PRODUCTS } from '../../constain/productsConstain'

import formatNumber from '../../common/utils/formatNumber'
import imgGym from '../../common/assets/images/products/gym-black.jpg'


function ViewList() {
    const listProducts = useSelector(state => state[MODULE_PRODUCTS].products)
    function showProductsList() {
        let resutl = ''
        if (listProducts.items) {
            resutl = listProducts.items.map((product, index) => {
                return (
                    <div key={product.id} className="category-product">

                        <div className="category-product-inner wow fadeInUp animated" style={{ visibility: 'visible', animationName: 'fadeInUp' }}>
                            <div className="products">
                                <div className="product-list product">
                                    <div className="row product-list-row">
                                        <div className="col col-sm-4 col-lg-4">
                                            <div className="product-image">
                                                <div className="image"><Link to={"/detail/" + product.id}><img src={imgGym} alt={product.name} /> </Link></div>
                                            </div>

                                        </div>

                                        <div className="col col-sm-8 col-lg-8">
                                            <div className="product-info">
                                                <h3 className="name"><Link to={"/detail/" + product.id}>{product.name}</Link></h3>

                                                <div className="rating rateit-small rateit" >
                                                    <Rate disabled defaultValue={4} style={{ fontSize: "15px" }} />
                                                </div>

                                                <div className="product-price"> <span className="price">{formatNumber(product.currentPrice, '.', '.')} VND</span> <strike className="price-before-discount" style={{ color: '#f75b5b', fontSize: "12px" }}>{formatNumber(product.price, '.', '.')} VND</strike> </div>

                                                <div className="description m-t-10">Suspendisse posuere arcu diam, id accumsan eros pharetra ac. Nulla enim risus, facilisis bibendum gravida eget, lacinia id purus. Suspendisse posuere arcu diam, id accumsan eros pharetra ac. Nulla enim risus, facilisis bibendum gravida eget.</div>
                                                <div className="cart clearfix animate-effect">
                                                    <div className="action">
                                                        <ul className="list-unstyled">
                                                            <li className="lnk wishlist"> <a className="add-to-cart" href=" " title="Wishlist"> <i className="icon fa fa-heart" /> </a> </li>
                                                            {/* <li className="lnk"> <a className="add-to-cart" href="detail.html" title="Compare"> <i className="fa fa-signal" /> </a> </li> */}
                                                        </ul>
                                                    </div>

                                                </div>

                                            </div>

                                        </div>

                                    </div>

                                    <div className="tag new"><span>new</span></div>
                                </div>

                            </div>

                        </div>

                    </div>
                )
            })
        }
        return resutl
    }



    return (
        <div className="tab-pane " id="list-container">
            {showProductsList()}
        </div>

    )
}

export default ViewList
