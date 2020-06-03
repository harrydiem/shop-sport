import React, { Component } from 'react'
import Categories from '../../component/Categories'
import Banner from './Banner'
import BannerAdv from './BannerAdv'
import Content from './Content'

export default class Home extends Component {
    render() {
        return (
            <>
            <div className="container">
                <div className="row">
                <Categories/>
                <Banner/>
                </div>
                
                <BannerAdv/>
            </div>
                
                <Content/>
            </>
        )
    }
}
