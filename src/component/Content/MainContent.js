import React, { Component } from 'react'

import Categories from './../Categories'
import Banner from '../Banner'
import BannerAdv from '../BannerAdv'
export default class MainContent extends Component {
    render() {
        return (
            <div className="body-content outer-top-vs" id="top-banner-and-menu">
                <div className="container">
                    <div className="row">
                        {/* MENU SIDE - CATEGORIES */}
                        <Categories/>
                        {/* BANNER SLIDE */}
                        <Banner/>
                    </div> 
                    {/* hết row */}
                    {/* Cac Banner Quang Cao - 2 cai*/}
                    <BannerAdv/>
                    {/* ============================================== 2 banners : END ============================================== */}

                </div>
                {/* Hết Container */}
            </div>
             
        )
    }
}
