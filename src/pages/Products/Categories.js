import React, { useEffect, useState } from 'react'
import { Slider, message, Menu } from 'antd'
import { fetchLoading } from '../../common/utils/effect';
import { UnorderedListOutlined, HomeOutlined } from '@ant-design/icons';
import { MODULE_NAME as MODULE_PRODUCTS } from '../../constain/productsConstain'
import { useSelector, useDispatch } from 'react-redux';
import * as actionProducts from '../../actions/actionProducts'
import formatNumber from '../../common/utils/formatNumber';

function Categories() {
  const { SubMenu } = Menu
  const dispatch = useDispatch()
  const [priceSlider, setpriceSlider] = useState({ MinPrice: 30000, MaxPrice: 3000000 })
  const [categories, setCategories] = useState()

  const page = useSelector(state => state[MODULE_PRODUCTS].pages)
  const onChange = e => {
    setpriceSlider({ MinPrice: e[0] * 3000000 / 100, MaxPrice: e[1] * 3000000 / 100 })
  }
  const showByPrice = () => {
    dispatch(actionProducts.PAGES_CHANGE({ ...page, MinPrice: priceSlider.MinPrice, MaxPrice: priceSlider.MaxPrice }))
  }
  async function handleClick(value) {
    // console.log("value: ", value)
    let dataLoad = {
      categoryId: value.key === '' || value.key === "0" ? "" : value.key, // 
      Keyword: '',
      MinPrice: '',
      PageIndex: 1,
      PageSize: 9,
      MaxPrice: '',
      Color: '',
      SortBy: '',
      Order: ''
    }
    dispatch(actionProducts.PAGES_CHANGE({ ...page, PageIndex: 1, categoryId: value.key }))//{ ...page, dataLoad: 2 }
    if (value.key === '' || value.key === "0") {//All
      dispatch(actionProducts.PAGES_CHANGE({ ...page, PageIndex: 1, categoryId: '' }))
    } else
      dispatch(actionProducts.PAGES_CHANGE({ ...page, PageIndex: 1, categoryId: value.key }))
  }

  async function getProductsByCategori(categoryId) {
    try {
      let result = await fetchLoading({
        url: `http://localhost:5000/api/Categories/${categoryId}/products`,
        method: 'GET',
        params: page //store pages:{Keyword: "", PageIndex: 1, PageSize: 12 } default   
      })
      let statusProducts = result.status
      if (statusProducts === 200) {
        dispatch(actionProducts.FETCH_PRODUCTS(result.data.data))
      } else {
        dispatch(actionProducts.FETCH_PRODUCTS({ items: [] }))
        // console.log(result.data.message)
      }
    } catch (error) {
      console.log(error)
      message.error("Lỗi kết nối đến Server")
    }
  }


  async function getProducts() {
    try {
      let result = await fetchLoading({
        url: 'http://localhost:5000/api/products',
        method: 'GET',
        params: page//store pages:{Keyword: "", PageIndex: 1, PageSize: 12 } default   
      })
      let statusProducts = result.status
      if (statusProducts === 200) {
        dispatch(actionProducts.FETCH_PRODUCTS(result.data.data))
      } else {
        console.log(result.data.message)
      }
    } catch (error) {
      console.log(error)
      message.error("Lỗi kết nối đến Server")
    }
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

    if (page.categoryId === '' || page.categoryId === "0") {
      getProducts()
    } else
      getProductsByCategori(page.categoryId)
  }, [page])


  return (
    <div className="col-md-3 sidebar">
      <div className="sidebar-module-container">
        <div className="sidebar-filter">
          {/* ============================================== SIDEBAR CATEGORY ============================================== */}
          <div className="sidebar-widget wow fadeInUp round-top animated" style={{ visibility: 'visible', animationName: 'fadeInUp' }}>
            <h3 className="section-title" style={{ paddingBottom: 0 }} >Danh Mục</h3>
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
            <Slider range defaultValue={[0, 100]} onChange={onChange} min={1} />
            <div className="widget-header">
              <h4 className="widget-title">Thanh Chỉnh Giá</h4>
            </div>
            <div className="sidebar-widget-body m-t-10">
              <div className="price-range-holder" style={{ marginBottom: "10px" }}> <span className="min-max">
                {priceSlider
                  ? (<>
                    <span className="pull-left">{formatNumber(priceSlider.MinPrice, '.', '.')} đ</span>
                    <span className="pull-right">{formatNumber(priceSlider.MaxPrice, '.', '.')} đ</span>
                  </>)
                  : ""
                }

              </span>
              </div>
              {/* /.price-range-holder */}
              <a className="lnk btn btn-primary"
                onClick={() => showByPrice()}
                style={{ display: "block", width: "50%", margin: "auto" }}>
                HIỂN THỊ
                </a>
            </div>
            {/* /.sidebar-widget-body */}
          </div>
          {/* /.sidebar-widget */}
          {/* ============================================== PRICE SILDER : END ============================================== */}
          {/* ============================================== PRODUCT TAGS ============================================== */}
          <div className="sidebar-widget product-tag wow fadeInUp outer-top-vs animated" style={{ visibility: 'visible', animationName: 'fadeInUp' }}>
            <h3 className="section-title">CHỌN MÀU</h3>
            <div className="sidebar-widget-body outer-top-xs">
              <div className="tag-list">
                <a className="item" title="Phone" href="category.html">Hồng</a>
                <a className="item active" title="Vest" href="category.html">Xanh</a>
                <a className="item" title="Smartphone" href="category.html">Đen</a>
                <a className="item" title="Furniture" href="category.html">Trắng</a>
              </div>
            </div>
          </div>
          {/* /.sidebar-widget */}
          {/* ============================================== MANUFACTURES============================================== */}
          {/* <div className="sidebar-widget wow fadeInUp no-round animated" style={{ visibility: 'visible', animationName: 'fadeInUp' }}>
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
            </div>
          </div> */}
          {/* /.sidebar-widget */}
          {/* ============================================== MANUFACTURES: END ============================================== */}

          {/* ============================================== COLOR============================================== */}
          {/* <div className="sidebar-widget wow fadeInUp round-bottom animated" style={{ visibility: 'visible', animationName: 'fadeInUp' }}>
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
          </div>
          */}
          {/* /.sidebar-widget */}
          {/* ============================================== COLOR: END ============================================== */}


        </div>
        {/* /.sidebar-filter */}
      </div>
      {/* /.sidebar-module-container */}
    </div>
  )

}
export default Categories