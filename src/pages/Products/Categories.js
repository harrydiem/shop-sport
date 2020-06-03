import React from 'react'
import { Slider } from 'antd'

export default function Categories() {

  function onChange(value) {
    console.log('onChange: ', value);
  }
  return (
    <div className="col-md-3 sidebar">
      <div className="sidebar-module-container">
        <div className="sidebar-filter">
          {/* ============================================== SIDEBAR CATEGORY ============================================== */}
          <div className="sidebar-widget wow fadeInUp round-top animated" style={{ visibility: 'visible', animationName: 'fadeInUp' }}>
            <h3 className="section-title">Sắp xếp</h3>
            <div className="widget-header">
              <h4 className="widget-title">Danh mục</h4>
            </div>
            <div className="sidebar-widget-body">
              <div className="accordion">
                <div className="accordion-group">
                  <div className="accordion-heading"> <a href="#collapseOne" data-toggle="collapse" className="accordion-toggle collapsed"> Camera </a> </div>
                  {/* /.accordion-heading */}
                  <div className="accordion-body collapse" id="collapseOne" style={{ height: '0px' }}>
                    <div className="accordion-inner">
                      <ul>
                        <li><a href=" ">gaming</a></li>
                        <li><a href=" ">office</a></li>
                        <li><a href=" ">kids</a></li>
                        <li><a href=" ">for women</a></li>
                      </ul>
                    </div>
                    {/* /.accordion-inner */}
                  </div>
                  {/* /.accordion-body */}
                </div>
                {/* /.accordion-group */}
                <div className="accordion-group">
                  <div className="accordion-heading"> <a href="#collapseTwo" data-toggle="collapse" className="accordion-toggle collapsed"> Desktops </a> </div>
                  {/* /.accordion-heading */}
                  <div className="accordion-body collapse" id="collapseTwo" style={{ height: '0px' }}>
                    <div className="accordion-inner">
                      <ul>
                        <li><a href=" ">gaming</a></li>
                        <li><a href=" ">office</a></li>
                        <li><a href=" ">kids</a></li>
                        <li><a href=" ">for women</a></li>
                      </ul>
                    </div>
                    {/* /.accordion-inner */}
                  </div>
                  {/* /.accordion-body */}
                </div>
                {/* /.accordion-group */}
                <div className="accordion-group">
                  <div className="accordion-heading"> <a href="#collapseThree" data-toggle="collapse" className="accordion-toggle collapsed"> Pants </a> </div>
                  {/* /.accordion-heading */}
                  <div className="accordion-body collapse" id="collapseThree" style={{ height: '0px' }}>
                    <div className="accordion-inner">
                      <ul>
                        <li><a href=" ">gaming</a></li>
                        <li><a href=" ">office</a></li>
                        <li><a href=" ">kids</a></li>
                        <li><a href=" ">for women</a></li>
                      </ul>
                    </div>
                    {/* /.accordion-inner */}
                  </div>
                  {/* /.accordion-body */}
                </div>
                {/* /.accordion-group */}
                <div className="accordion-group">
                  <div className="accordion-heading"> <a href="#collapseFour" data-toggle="collapse" className="accordion-toggle collapsed"> Bags </a> </div>
                  {/* /.accordion-heading */}
                  <div className="accordion-body collapse" id="collapseFour" style={{ height: '0px' }}>
                    <div className="accordion-inner">
                      <ul>
                        <li><a href=" ">gaming</a></li>
                        <li><a href=" ">office</a></li>
                        <li><a href=" ">kids</a></li>
                        <li><a href=" ">for women</a></li>
                      </ul>
                    </div>
                    {/* /.accordion-inner */}
                  </div>
                  {/* /.accordion-body */}
                </div>
                {/* /.accordion-group */}
                <div className="accordion-group">
                  <div className="accordion-heading"> <a href="#collapseFive" data-toggle="collapse" className="accordion-toggle collapsed"> Hats </a> </div>
                  {/* /.accordion-heading */}
                  <div className="accordion-body collapse" id="collapseFive" style={{ height: '0px' }}>
                    <div className="accordion-inner">
                      <ul>
                        <li><a href=" ">gaming</a></li>
                        <li><a href=" ">office</a></li>
                        <li><a href=" ">kids</a></li>
                        <li><a href=" ">for women</a></li>
                      </ul>
                    </div>
                    {/* /.accordion-inner */}
                  </div>
                  {/* /.accordion-body */}
                </div>
                {/* /.accordion-group */}
                <div className="accordion-group">
                  <div className="accordion-heading"> <a href="#collapseSix" data-toggle="collapse" className="accordion-toggle collapsed"> Accessories </a> </div>
                  {/* /.accordion-heading */}
                  <div className="accordion-body collapse" id="collapseSix" style={{ height: '0px' }}>
                    <div className="accordion-inner">
                      <ul>
                        <li><a href=" ">gaming</a></li>
                        <li><a href=" ">office</a></li>
                        <li><a href=" ">kids</a></li>
                        <li><a href=" ">for women</a></li>
                      </ul>
                    </div>
                    {/* /.accordion-inner */}
                  </div>
                  {/* /.accordion-body */}
                </div>
                {/* /.accordion-group */}
              </div>
              {/* /.accordion */}
            </div>
            {/* /.sidebar-widget-body */}
          </div>
          {/* /.sidebar-widget */}
          {/* ============================================== SIDEBAR CATEGORY : END ============================================== */}
          {/* ============================================== PRICE SILDER============================================== */}

          <div className="sidebar-widget wow fadeInUp no-round animated" style={{ visibility: 'visible', animationName: 'fadeInUp' }}>
            <Slider range defaultValue={[20, 50]} onChange={onChange} />
            <div className="widget-header">
              <h4 className="widget-title">Thanh Chỉnh Giá</h4>
            </div>
            <div className="sidebar-widget-body m-t-10">
              <div className="price-range-holder"> <span className="min-max"> <span className="pull-left">0 VND</span> <span className="pull-right">5.000.000 VND</span> </span>
                {/* <input type="text" id="amount" style={{ border: 0, color: '#666666', fontWeight: 'bold', textAlign: 'center' }} />
                <div className="slider slider-horizontal" ><div className="slider-track"><div className="slider-selection" style={{ left: '16.6667%', width: '50%' }} /><div className="slider-handle min-slider-handle" tabIndex={0} style={{ left: '16.6667%' }} /><div className="slider-handle max-slider-handle" tabIndex={0} style={{ left: '66.6667%' }} /></div><div className="tooltip tooltip-main top" style={{ left: '41.6667%', marginLeft: '-35px' }}><div className="tooltip-arrow" /><div className="tooltip-inner">200 : 500</div></div><div className="tooltip tooltip-min top" style={{ left: '16.6667%', marginLeft: '-35px' }}><div className="tooltip-arrow" /><div className="tooltip-inner">200</div></div><div className="tooltip tooltip-max bottom" style={{ top: '18px', left: '66.6667%', marginLeft: '-35px' }}><div className="tooltip-arrow" /><div className="tooltip-inner">500</div></div></div><input type="text" className="price-slider" defaultValue="200,500" data="value: '200,500'" style={{ display: 'none' }} /> */}
              </div>
              {/* /.price-range-holder */}
              <a href=" " className="lnk btn btn-primary">Show Now</a> </div>
            {/* /.sidebar-widget-body */}
          </div>
          {/* /.sidebar-widget */}
          {/* ============================================== PRICE SILDER : END ============================================== */}
          {/* ============================================== MANUFACTURES============================================== */}
          <div className="sidebar-widget wow fadeInUp no-round animated" style={{ visibility: 'visible', animationName: 'fadeInUp' }}>
            <div className="widget-header">
              <h4 className="widget-title">Manufactures</h4>
            </div>
            <div className="sidebar-widget-body">
              <ul className="list">
                <li><a href=" ">Forever 18</a></li>
                <li><a href=" ">Nike</a></li>
                <li><a href=" ">Dolce &amp; Gabbana</a></li>
                <li><a href=" ">Alluare</a></li>
                <li><a href=" ">Chanel</a></li>
                <li><a href=" ">Other Brand</a></li>
              </ul>
              {/*<a href=" " class="lnk btn btn-primary">Show Now</a>*/}
            </div>
            {/* /.sidebar-widget-body */}
          </div>
          {/* /.sidebar-widget */}
          {/* ============================================== MANUFACTURES: END ============================================== */}
          {/* ============================================== COLOR============================================== */}
          <div className="sidebar-widget wow fadeInUp round-bottom animated" style={{ visibility: 'visible', animationName: 'fadeInUp' }}>
            <div className="widget-header">
              <h4 className="widget-title">Colors</h4>
            </div>
            <div className="sidebar-widget-body">
              <ul className="list">
                <li><a href=" ">Red</a></li>
                <li><a href=" ">Blue</a></li>
                <li><a href=" ">Yellow</a></li>
                <li><a href=" ">Pink</a></li>
                <li><a href=" ">Brown</a></li>
                <li><a href=" ">Teal</a></li>
              </ul>
            </div>
            {/* /.sidebar-widget-body */}
          </div>
          {/* /.sidebar-widget */}
          {/* ============================================== COLOR: END ============================================== */}
          {/* ============================================== PRODUCT TAGS ============================================== */}
          <div className="sidebar-widget product-tag wow fadeInUp outer-top-vs animated" style={{ visibility: 'visible', animationName: 'fadeInUp' }}>
            <h3 className="section-title">Product tags</h3>
            <div className="sidebar-widget-body outer-top-xs">
              <div className="tag-list"> <a className="item" title="Phone" href="category.html">Phone</a> <a className="item active" title="Vest" href="category.html">Vest</a> <a className="item" title="Smartphone" href="category.html">Smartphone</a> <a className="item" title="Furniture" href="category.html">Furniture</a> <a className="item" title="T-shirt" href="category.html">T-shirt</a> <a className="item" title="Sweatpants" href="category.html">Sweatpants</a> <a className="item" title="Sneaker" href="category.html">Sneaker</a> <a className="item" title="Toys" href="category.html">Toys</a> <a className="item" title="Rose" href="category.html">Rose</a> </div>
              {/* /.tag-list */}
            </div>
            {/* /.sidebar-widget-body */}
          </div>
          {/* /.sidebar-widget */}
          {/*--------- Testimonials-----------*/}
          <div className="home-banner"> <img src="../assets/images/banners/LHS-banner.jpg" alt="Imagse" /> </div>
        </div>
        {/* /.sidebar-filter */}
      </div>
      {/* /.sidebar-module-container */}
    </div>
  )

}
