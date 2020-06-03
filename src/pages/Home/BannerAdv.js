import React, { Component } from 'react'
import IMG1 from '../../common/assets/images/banners/home-banner1.jpg'
import IMG2 from '../../common/assets/images/banners/home-banner2.jpg'
export default class BannerAdv extends Component {
    render() {
        return (
            <div className="wide-banners wow fadeInUp outer-bottom-xs">
                        <div className="row">
                            <div className="col-md-6 col-sm-6">
                                <div className="wide-banner cnt-strip">
                                    <div className="image">
                                        {" "}
                                        <img
                                            className="img-responsive"
                                            src={IMG1}
                                            alt="a"
                                        />{" "}
                                    </div>
                                </div>
                                {/* /.wide-banner */}
                            </div>
                            {/* /.col 1*/}
                            <div className="col-md-6 col-sm-6">
                                <div className="wide-banner cnt-strip">
                                    <div className="image">
                                        {" "}
                                        <img
                                            className="img-responsive"
                                            src={IMG2}
                                            alt = "a"
                                        />{" "}
                                    </div>
                                </div>
                                {/* /.wide-banner */}
                            </div>
                            {/* /.col 2*/}
                        </div>
                        {/* /.hết row banner*/}
            </div>
        )
    }
}
