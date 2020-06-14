import React, { useEffect, useState } from 'react'
import img1 from "../../common/assets/images/products/p1.jpg"
import { fetchLoading } from '../../common/utils/effect'
import { message, Rate } from 'antd'
import formatNumber from '../../common/utils/formatNumber'
import { Link } from 'react-router-dom'
const img = "http://localhost:3000/static/media/gym-black.7695f194.jpg"

function Wishlists() {
    const [wishlist, setWishlist] = useState()
    console.log("Wishlists -> wishlist", wishlist)
    async function getWishlist() {
        try {
            let result = await fetchLoading({
                url: 'http://localhost:5000/api/WishLists/' + localStorage.id,
                method: 'GET',
                params: {
                    userId: localStorage.id
                }
            })
            if (result.status === 200) {
                setWishlist(result.data.data)

            } else {//Bad Request => 0
                console.log("Lỗi")
            }
        } catch (error) {
            console.log(error)
            message.error("Lỗi kết nối đến Server")
        }
    }
    function showWishlist() {
        let resutl = "";
        if (wishlist) {
            resutl = wishlist.map((w, index) => {
                return (
                    <tr key={index}>
                        <td className="col-md-2">
                            <img src={"http://localhost:5000" + w.productImage.url} alt={w.productName} />
                        </td>
                        <td className="col-md-7">
                            <div className="product-name">
                                <Link to={'/detail/' + w.productId}  >{w.productName}</Link>
                            </div>
                            <div className="rating rateit">

                                <span className="review">( {w.commentCount} Bình luận )</span>


                            </div>

                            <div className="price">
                                {formatNumber(w.currentPrice, ".", ".")} đ
                                <span>{formatNumber(w.price, ".", ".")} đ</span>
                            </div>
                        </td>
                        <td className="col-md-2">
                            <Link to={'/detail/' + w.productId} className="btn-upper btn btn-primary">
                                Xem chi tiết
                              </Link>
                        </td>
                        <td className="col-md-1 close-btn">
                            <a onClick={() => console.log(w.productId)} >
                                <i className="fa fa-times" />
                            </a>
                        </td>
                    </tr>

                )
            })
        } else {
            return (<></>)

        }
        return resutl;

    }
    useEffect(() => {
        getWishlist()

    }, [])

    return (
        <div className="body-content">
            <div className="container">
                <div className="my-wishlist-page">
                    <div className="row">
                        <div className="col-md-12 my-wishlist">
                            <div className="table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th colSpan={4} className="heading-title">
                                                My Wishlist
                                            </th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {showWishlist()}

                                    </tbody>

                                </table>
                            </div>
                        </div>
                    </div>
                    {/* /.row */}
                </div>
                {/* /.sigin-in*/}
                {/* ============================================== BRANDS CAROUSEL ============================================== */}
            </div>
        </div>

    )
}
export default Wishlists