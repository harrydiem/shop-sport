import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from "react-router-dom"
import Menulist from './MenuList'

HeaderNav.propTypes = {
    history: PropTypes.object
}
HeaderNav.defaulProps = {
    history: {}
}


function HeaderNav(props) {
    const { history } = props

    function showMenu(menuList) {
        let result = null
        if (menuList.length > 0) {
            result = menuList.map((menu, index) => {
                return (
                    <li onClick={() => history.push(menu.to)} className={`${menu.className} ${menu.to === history.location.pathname ? ' active' : ''}`} key={index + 1} >
                        {/* click -> push('link') -> link */}
                        <a
                            href="/"
                            to={menu.to}
                            data-hover="dropdown"
                            className="dropdown-toggle"
                            data-toggle="dropdown"
                        >
                            {menu.name}
                        </a>
                    </li>
                )
            })
            return result
        }

    }

    useEffect(() => {
        showMenu(Menulist)
    }) //,[]

    return (
        <div className="header-nav animate-dropdown">
            <div className="container">
                <div className="yamm navbar navbar-default" role="navigation">
                    <div className="navbar-header">
                        <button
                            data-target="#mc-horizontal-menu-collapse"
                            data-toggle="collapse"
                            className="navbar-toggle collapsed"
                            type="button"
                        >
                            {" "}
                            <span className="sr-only">Toggle navigation</span>{" "}
                            <span className="icon-bar" /> <span className="icon-bar" />{" "}
                            <span className="icon-bar" />{" "}
                        </button>
                    </div>
                    <div className="nav-bg-class">
                        <div
                            className="navbar-collapse collapse"
                            id="mc-horizontal-menu-collapse"
                        >
                            <div className="nav-outer">
                                <ul className="nav navbar-nav">
                                    {showMenu(Menulist)}

                                </ul>
                                {/* /.navbar-nav */}
                                <div className="clearfix" />
                            </div>
                            {/* /.nav-outer */}
                        </div>
                        {/* /.navbar-collapse */}
                    </div>
                    {/* /.nav-bg-class */}
                </div>
                {/* /.navbar-default */}
            </div>
            {/* /.container-class */}
        </div>

    )
}



export default withRouter(HeaderNav)



// import React, { Component } from 'react'
// // import Img from '../../common/assets/images/banners/banner-side.png'
// // import Bannerimage from '../../common/assets/images/banners/banner-side.png';
// import { withRouter } from "react-router-dom"
// import Menulist from './MenuList'




// class HeaderNav extends Component {
//     componentWillMount() {
//         console.log(this.props)
//         this.showMenu(Menulist)
//     }
//     // componentDidMount(){
//     //     // console.log(this.props)
//     // }
//     showMenu = (Menulist) => {
//         let result = null
//         if (Menulist.length > 0) {
//             result = Menulist.map((menu, index) => {
//                 return (
//                     <li onClick={() => this.props.history.push(menu.to)} className={`${menu.className} ${menu.to === this.props.history.location.pathname ? ' active' : ''}`} key={index + 1} >
//                         {/* click -> push('link') -> link */}
//                         <a
//                             href="/"
//                             to={menu.to}
//                             data-hover="dropdown"
//                             className="dropdown-toggle"
//                             data-toggle="dropdown"
//                         >
//                             {menu.name}
//                         </a>
//                     </li>
//                 )
//             })
//             return result
//         }

//     }


//     render() {
//         return (
//             <div className="header-nav animate-dropdown">
//                 <div className="container">
//                     <div className="yamm navbar navbar-default" role="navigation">
//                         <div className="navbar-header">
//                             <button
//                                 data-target="#mc-horizontal-menu-collapse"
//                                 data-toggle="collapse"
//                                 className="navbar-toggle collapsed"
//                                 type="button"
//                             >
//                                 {" "}
//                                 <span className="sr-only">Toggle navigation</span>{" "}
//                                 <span className="icon-bar" /> <span className="icon-bar" />{" "}
//                                 <span className="icon-bar" />{" "}
//                             </button>
//                         </div>
//                         <div className="nav-bg-class">
//                             <div
//                                 className="navbar-collapse collapse"
//                                 id="mc-horizontal-menu-collapse"
//                             >
//                                 <div className="nav-outer">
//                                     <ul className="nav navbar-nav">
//                                         {this.showMenu(Menulist)}

//                                         {/* <li className="dropdown yamm-fw">
//                                             {" "}
//                                             <a
//                                                 href="home.html"
//                                                 data-hover="dropdown"
//                                                 className="dropdown-toggle"
//                                                 data-toggle="dropdown"
//                                             >
//                                                 Trang Chủ
//                                           </a>{" "}
//                                         </li>
//                                         <li className="active dropdown yamm mega-menu">

//                                             <a
//                                                 href="home.html"
//                                                 data-hover="dropdown"
//                                                 className="dropdown-toggle"
//                                                 data-toggle="dropdown"
//                                             >
//                                                 Sản Phẩm
//                                              </a>

//                                         </li>
//                                         <li className="dropdown mega-menu">
//                                             {" "}
//                                             <a
//                                                 href="category.html"
//                                                 data-hover="dropdown"
//                                                 // className="dropdown-toggle"
//                                                 data-toggle="dropdown"
//                                             >
//                                                 Bóng rổ
//                                                 <span className="menu-label hot-menu hidden-xs">hot</span>{" "} 
//                                             </a>

//                                         </li>
//                                         <li className="dropdown hidden-sm">
//                                             {" "}
//                                             <a href="category.html">
//                                                 Gym &amp; Chạy bộ{" "}
//                                                  <span className="menu-label new-menu hidden-xs">new</span>{" "}
//                                             </a>{" "}
//                                         </li>
//                                         <li className="dropdown hidden-sm">
//                                             {" "}
//                                             <a href="category.html">Bóng Đá</a>{" "}
//                                         </li>
//                                         <li className="dropdown">
//                                             {" "}
//                                             <a href="contact.html">Liên Hệ</a>{" "}
//                                         </li>
//                                         <li className="dropdown">
//                                             {" "}
//                                             <a href="contact.html">Hỗ Trợ</a>{" "}
//                                         </li>
//                                         <li className="dropdown">
//                                             {" "}
//                                             <a href="contact.html">Khuyến Mãi</a>
//                                         </li>   
//                                         <li className="dropdown  navbar-right special-menu">

//                                             <a href=" ">Todays offer</a>
//                                         </li>                                   
//                                          */}

//                                     </ul>
//                                     {/* /.navbar-nav */}
//                                     <div className="clearfix" />
//                                 </div>
//                                 {/* /.nav-outer */}
//                             </div>
//                             {/* /.navbar-collapse */}
//                         </div>
//                         {/* /.nav-bg-class */}
//                     </div>
//                     {/* /.navbar-default */}
//                 </div>
//                 {/* /.container-class */}
//             </div>
//         )
//     }
// }

// export default withRouter(HeaderNav)