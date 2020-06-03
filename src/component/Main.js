import React, { Component } from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import { withRouter } from 'react-router-dom'
// import MainContent from './Content/MainContent'



export class Main extends Component {
    render() {
        return (
            <>
            <Header/>
            {/* <MainContent/> */}
            <div className="body-content outer-top-vs" id="top-banner-and-menu">                                
                    {this.props.children}
                                   
                {/* Hết Conttent */}
            </div>
            
            <Footer/>
            </>
        )
    }
}
export default withRouter(Main)
