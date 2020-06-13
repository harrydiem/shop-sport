import React, { useEffect, useState } from 'react'
import { Slider, message, Menu } from 'antd'
import { fetchLoading } from '../../common/utils/effect';
import { UnorderedListOutlined, HomeOutlined } from '@ant-design/icons';

function Categories() {
  const { SubMenu } = Menu
  const [categories, setCategories] = useState()
  // console.log("Categories -> categories", categories)
  // const [listCategories, setListCategories] = useState([])
  console.log("Categories -> categories", categories)

  function onChange(value) {
    console.log('onChange: ', value);
  }
  const handleClick = e => {
    console.log('click ', e);
  }

  async function getAllCategories() {
    try {
      let result = await fetchLoading({
        url: 'http://localhost:5000/api/Categories/GetAllCategories',
        method: 'GET',
      })
      setCategories(result.data.data)
    } catch (error) {
      console.log(error)
      message.error("Lỗi kết nối đến Server")
    }
  }

  useEffect(() => {
    getAllCategories()
  }, [])


  return (
    <div className="col-md-3 sidebar">
      <div className="sidebar-module-container">
        <div className="sidebar-filter">
          {/* ============================================== SIDEBAR CATEGORY ============================================== */}
          <div className="sidebar-widget wow fadeInUp round-top animated" style={{ visibility: 'visible', animationName: 'fadeInUp' }}>
            <h3 className="section-title">Danh Mục</h3>
            <div className="sidebar-widget-body">
              <hr></hr>
              <div className="accordion">
                <Menu
                  onClick={handleClick}
                  style={{ width: "100%" }}
                  defaultSelectedKeys={['0']}
                  // defaultOpenKeys={['sub1']}
                  mode="inline"
                  className="menuCategori"
                >
                  <Menu.Item key="0" icon={<HomeOutlined />} style={{ paddingLeft: 0 }} >
                    Tất cả sản phẩm
                  </Menu.Item>

                  {(categories)
                    ? categories.map((c, index) => {
                      return (
                        <SubMenu
                          mode="vertical"
                          key={c.categoryDTO.id}
                          icon={<UnorderedListOutlined />}
                          title={
                            <span>
                              <span>{c.categoryDTO.name}</span>
                            </span>
                          }
                        >
                          <Menu.Item key={c.categoryDTO.id}>Tất cả</Menu.Item>
                          {
                            c.categoriesDTO
                              ?
                              (c.categoriesDTO.length > 0)
                                ? c.categoriesDTO.map((option, index) => {
                                  return (
                                    <Menu.Item key={option.id}>{option.name}</Menu.Item>
                                  )
                                })
                                : "" //Ko có danh mục con
                              : ""
                          }
                        </SubMenu>
                      )
                    })
                    : ""
                  }
                </Menu>
              </div>
            </div>
          </div>
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
export default Categories