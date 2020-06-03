import React from 'react'
import img1 from "../../common/assets/images/products/p1.jpg"
const img = "http://localhost:3000/static/media/gym-black.7695f194.jpg"

function Wishlists() {
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
                                        <tr>
                                            <td className="col-md-2">
                                                <img src={img1} alt="imga" />
                                            </td>
                                            <td className="col-md-7">
                                                <div className="product-name">
                                                    <a href=" ">Floral Print Buttoned</a>
                                                </div>
                                                <div className="rating rateit">
                                                    <i className="fa fa-star rate" />
                                                    <i className="fa fa-star rate" />
                                                    <i className="fa fa-star rate" />
                                                    <i className="fa fa-star rate" />
                                                    <i className="fa fa-star non-rate" />
                                                    <span className="review">( 06 Reviews )</span>
                                                    <button
                                                        id="rateit-reset-2"
                                                        data-role="none"
                                                        className="rateit-reset"
                                                        aria-label="reset rating"
                                                        aria-controls="rateit-range-2"
                                                        style={{ display: "none" }}
                                                    />
                                                    <div
                                                        id="rateit-range-2"
                                                        className="rateit-range"
                                                        tabIndex={0}
                                                        role="slider"
                                                        aria-label="rating"
                                                        aria-owns="rateit-reset-2"
                                                        aria-valuemin={0}
                                                        aria-valuemax={5}
                                                        aria-valuenow={4}
                                                        aria-readonly="true"
                                                        style={{ width: 70, height: 14 }}
                                                    >
                                                        <div
                                                            className="rateit-selected"
                                                            style={{ height: 14, width: 56 }}
                                                        />
                                                        <div className="rateit-hover" style={{ height: 14 }} />
                                                    </div>
                                                </div>
                                                <div className="price">
                                                    $400.00
                    <span>$900.00</span>
                                                </div>
                                            </td>
                                            <td className="col-md-2">
                                                <a href=" " className="btn-upper btn btn-primary">
                                                    Add to cart
                  </a>
                                            </td>
                                            <td className="col-md-1 close-btn">
                                                <a href=" " >
                                                    <i className="fa fa-times" />
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="col-md-2">
                                                <img src={img} alt="phoro" />
                                            </td>
                                            <td className="col-md-7">
                                                <div className="product-name">
                                                    <a href=" ">Floral Print Buttoned</a>
                                                </div>
                                                <div className="rating rateit">
                                                    <i className="fa fa-star rate" />
                                                    <i className="fa fa-star rate" />
                                                    <i className="fa fa-star rate" />
                                                    <i className="fa fa-star rate" />
                                                    <i className="fa fa-star non-rate" />
                                                    <span className="review">( 06 Reviews )</span>
                                                    <button
                                                        id="rateit-reset-3"
                                                        data-role="none"
                                                        className="rateit-reset"
                                                        aria-label="reset rating"
                                                        aria-controls="rateit-range-3"
                                                        style={{ display: "none" }}
                                                    />
                                                    <div
                                                        id="rateit-range-3"
                                                        className="rateit-range"
                                                        tabIndex={0}
                                                        role="slider"
                                                        aria-label="rating"
                                                        aria-owns="rateit-reset-3"
                                                        aria-valuemin={0}
                                                        aria-valuemax={5}
                                                        aria-valuenow={4}
                                                        aria-readonly="true"
                                                        style={{ width: 70, height: 14 }}
                                                    >
                                                        <div
                                                            className="rateit-selected"
                                                            style={{ height: 14, width: 56 }}
                                                        />
                                                        <div className="rateit-hover" style={{ height: 14 }} />
                                                    </div>
                                                </div>
                                                <div className="price">
                                                    $450.00
                    <span>$900.00</span>
                                                </div>
                                            </td>
                                            <td className="col-md-2" style={{ verticalAlign: "middle" }}>
                                                <a href=" " className="btn-upper btn btn-default">
                                                    Add to cart
                  </a>
                                            </td>
                                            <td className="col-md-1 close-btn">
                                                <a href=" " >
                                                    <i className="fa fa-times" />
                                                </a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>{" "}
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