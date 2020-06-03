import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <footer id="footer" className="footer color-bg">
            <div className="footer-bottom">
              <div className="container">
                <div className="row">
                  <div className="col-xs-12 col-sm-6 col-md-3">
                    <div className="module-heading">
                      <h4 className="module-title">Liên hệ</h4>
                    </div>
                    {/* /.module-heading */}
                    <div className="module-body">
                      <ul className="toggle-footer" style={{}}>
                        <li className="media">
                          <div className="pull-left"> <span className="icon fa-stack fa-lg"> <i className="fa fa-map-marker fa-stack-1x fa-inverse" /> </span> </div>
                          <div className="media-body">
                            <p>273 An Dương Vương , Phường 3, Quận 5, Thành phố Hồ Chí Minh</p>
                          </div>
                        </li>
                        <li className="media">
                          <div className="pull-left"> <span className="icon fa-stack fa-lg"> <i className="fa fa-mobile fa-stack-1x fa-inverse" /> </span> </div>
                          <div className="media-body">
                            <p>+(85) 92 601 5381<br />
                              +(85) 98 765 4321</p>
                          </div>
                        </li>
                        <li className="media">
                          <div className="pull-left"> <span className="icon fa-stack fa-lg"> <i className="fa fa-envelope fa-stack-1x fa-inverse" /> </span> </div>
                          <div className="media-body"> <span><a href=" ">harrydiem99@gmail.com</a></span> </div>
                        </li>
                      </ul>
                    </div>
                    {/* /.module-body */} 
                  </div>
                  {/* /.col */}
                  <div className="col-xs-12 col-sm-6 col-md-3">
                    <div className="module-heading">
                      <h4 className="module-title">Dịch Vụ</h4>
                    </div>
                    {/* /.module-heading */}
                    <div className="module-body">
                      <ul className="list-unstyled">
                        <li className="first"><a href=" " title="Contact us">Tài khoản của tôi</a></li>
                        <li><a href=" " title="About us">Đơn hàng</a></li>
                        <li><a href=" " title="faq">Câu hỏi thường gặp</a></li>
                        <li><a href=" " title="Popular Searches">Liên hệ</a></li>
                        <li className="last"><a href=" " title="Where is my order?">Hộ trợ</a></li>
                      </ul>
                    </div>
                    {/* /.module-body */} 
                  </div>
                  {/* /.col */}
                  <div className="col-xs-12 col-sm-6 col-md-3">
                    <div className="module-heading">
                      <h4 className="module-title">Doanh Nghiệp</h4>
                    </div>
                    {/* /.module-heading */}
                    <div className="module-body">
                      <ul className="list-unstyled">
                        <li className="first"><a title="Your Account" href=" ">Về chúng tôi</a></li>
                        <li><a title="Information" href=" ">Dịch vụ</a></li>
                        <li><a title="Addresses" href=" ">Công ty</a></li>
                        <li><a title="Addresses" href=" ">Quan hệ đầu tư</a></li>
                        <li className="last"><a title="Orders History" href=" ">Tìm kiếm nâng cao</a></li>
                      </ul>
                    </div>
                    {/* /.module-body */} 
                  </div>
                  {/* /.col */}
                  <div className="col-xs-12 col-sm-6 col-md-3">
                    <div className="module-heading">
                      <h4 className="module-title">Tại sao chọn chúng tôi</h4>
                    </div>
                    {/* /.module-heading */}
                    <div className="module-body">
                      <ul className="list-unstyled">
                        <li className="first"><a href=" " title="About us">Hướng dẫn mua sắm</a></li>
                        <li><a href=" " title="Blog">Blog</a></li>
                        <li><a href=" " title="Company">Doanh nghiệp</a></li>
                        <li><a href=" " title="Investor Relations">Quan hệ đầu tư</a></li>
                        <li className=" last"><a href="contact-us.html" title="Suppliers">Đối tác</a></li>
                      </ul>
                    </div>
                    {/* /.module-body */} 
                  </div>
                </div>
              </div>
            </div>
            <div className="copyright-bar">
              <div className="container">
                <div className="col-xs-12 col-sm-6 no-padding social">
                  <ul className="link">
                    <li className="fb pull-left"><a target="_blank" rel="nofollow" href="/ " title="Facebook" >{null} </a></li>
                    <li className="tw pull-left"><a target="_blank" rel="nofollow" href="/ " title="Twitter">{null} </a> </li>
                    <li className="googleplus pull-left"><a target="_blank" rel="nofollow" href="/ " title="GooglePlus" >{null} </a></li>
                    <li className="rss pull-left"><a target="_blank" rel="nofollow" href="/ " title="RSS" >{null} </a></li>
                    <li className="pintrest pull-left"><a target="_blank" rel="nofollow" href="/ " title="PInterest" >{null} </a></li>
                    <li className="linkedin pull-left"><a target="_blank" rel="nofollow" href="/ " title="Linkedin" >{null} </a></li>
                    <li className="youtube pull-left"><a target="_blank" rel="nofollow" href="/ " title="Youtube" >{null} </a></li>
                  </ul>
                </div>
                <div className="col-xs-12 col-sm-6 no-padding">
                  <div className="clearfix payment-methods">
                    <ul>
                      <li><img src="../assets/images/payments/1.png" alt="" /></li>
                      <li><img src="../assets/images/payments/2.png" alt="" /></li>
                      <li><img src="../assets/images/payments/3.png" alt="" /></li>
                      <li><img src="../assets/images/payments/4.png" alt="" /></li>
                      <li><img src="../assets/images/payments/5.png" alt="" /></li>
                    </ul>
                  </div>
                  {/* /.payment-methods */} 
                </div>
              </div>
            </div>
          </footer>
        )
    }
}
