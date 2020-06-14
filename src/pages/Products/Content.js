import React, { } from 'react'
import { Link } from 'react-router-dom'
// import imgGym from '../../common/assets/images/products/gym-black.jpg'
// import imgNB from '../../common/assets/images/products/NB-shoes-black.jpg'
import ViewList from './ViewList'
import ViewGird from './ViewGird'
import Paginations from './Paginations'

function Content() {
  return (
    <div className="col-md-9">
      <div className="page-title">
        <h2>Sản Phẩm</h2>
      </div>
      <div className="clearfix filters-container m-t-10">
        <div className="row">
          <div className="col col-sm-6 col-md-3">
            <div className="filter-tabs">
              <ul id="filter-tabs" className="nav nav-tabs nav-tab-box nav-tab-fa-icon">
                <li className="active"> <a data-toggle="tab" href="#grid-container"><i className="icon fa fa-th-large" />Grid</a> </li>
                <li><a data-toggle="tab" href="#list-container"><i className="icon fa fa-th-list" />List</a></li>
              </ul>
            </div>
            {/* /.filter-tabs */}
          </div>
          {/* /.col */}
          <div className="col col col-sm-6 col-md-3">
            <div className="col no-padding">
              <div className="lbl-cnt">
                {/* <span className="lbl">Sắp xếp</span> */}
                <div className="fld inline">
                  <div className="dropdown dropdown-small dropdown-med dropdown-white inline">
                    <button data-toggle="dropdown" type="button" className="btn dropdown-toggle">SẮP XẾP<span className="caret" /> </button>
                    <ul role="menu" className="dropdown-menu">
                      <li role="presentation"><Link to="/products">Mặc định</Link></li>
                      <li role="presentation"><Link to="/products">Giá:Thấp -> Cao</Link></li>
                      <li role="presentation"><Link to="/products">Giá:Cao -> Thấp</Link></li>
                      <li role="presentation"><Link to="/products">Tên:A->Z</Link></li>
                      <li role="presentation"><Link to="/products">Tên:Z->A</Link></li>
                    </ul>
                  </div>
                </div>
                {/* /.fld */}
              </div>
              {/* /.lbl-cnt */}
            </div>
            {/* /.col */}

          </div>
          {/* /.col */}
          <div className="col-sm-12 col-md-6 text-right">
            <Paginations></Paginations>
            <div className="pagination-container">

              {/* <ul className="list-inline list-unstyled">
                <li className="prev"><a href=" "><i className="fa fa-angle-left" /></a></li>
                <li><a href=" ">1</a></li>
                <li className="active"><a href=" ">2</a></li>
                <li><a href=" ">3</a></li>
                <li><a href=" ">4</a></li>
                <li className="next"><a href=" "><i className="fa fa-angle-right" /></a></li>
              </ul> */}
              {/* /.list-inline */}
            </div>
            {/* /.pagination-container */}
          </div>
          {/* /.col */}
        </div>
        {/* /.row */}
      </div>
      <div className="search-result-container ">
        <div id="myTabContent" className="tab-content category-list">
          {/* ViewGird */}
          <ViewGird />
          {/* End ViewGird */}
          {/* /.ViewList */}
          <ViewList />
          {/* End Viewlist */}
        </div>
        {/* /.tab-content */}
        <div className="clearfix filters-container " >
          <div className="text-right" style={{ marginBottom: "20px" }}>
            <Paginations />
            {/* <div className="pagination-container">
              <ul className="list-inline list-unstyled">
                <li className="prev"><a href=" "><i className="fa fa-angle-left" /></a></li>
                <li><a href=" ">1</a></li>
                <li className="active"><a href=" ">2</a></li>
                <li><a href=" ">3</a></li>
                <li><a href=" ">4</a></li>
                <li className="next"><a href=" "><i className="fa fa-angle-right" /></a></li>
              </ul>
            </div> */}

            {/* /.pagination-container */}
          </div>
          {/* /.text-right */}
        </div>
        {/* /.filters-container */}
      </div>
      {/* /.search-result-container */}
    </div>
  )
}


export default Content
