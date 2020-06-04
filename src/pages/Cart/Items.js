import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Select, InputNumber, Rate, message } from "antd";
// import * as actionCarts from '../../actions/actionCarts'
import { MODULE_NAME as MODULE_CART } from "../../constain/cartConstain";
import { Link } from "react-router-dom";
import formatNumber from "../../common/utils/formatNumber";
import { fetchLoading } from "../../common/utils/effect";

const { Option } = Select;
function onChange(value) {}

//a[] key is idProduct
const a = [
  {
    idProduct: 5,
    colors: ["Trắng", "Đen"],
  },
  {
    idProduct: 6,
    colors: ["Trắng", "Xám"],
  },
];
//b key is idProduct & colors
const b = [
  {
    idProduct: 5,
    colors: "Trắng",
    sizes: ["X", "XL"],
  },
  {
    idProduct: 5,
    colors: "Đen",
    sizes: ["X"],
  },
  {
    idProduct: 6,
    colors: "Xám",
    sizes: ["XL"],
  },
  {
    idProduct: 6,
    colors: "Xám đậm",
    sizes: ["X", "XL"],
  },
];

function Items() {
  const cartList = useSelector((state) => state[MODULE_CART].carts);
  const productIds = cartList.cartItemsDTO
    ? cartList.cartItemsDTO.map((p) => p.productId)
    : [];

  const productsIncludeColors = async () => {
    const arr = [];
    productIds.forEach((id) => {
      arr.push(getColor(id));
    });

    const res = await Promise.all(arr);

    if (!cartList.cartItemsDTO) {
    } else {
      const data = cartList.cartItemsDTO.map((p, index) => {
        p.colors = res[index];
        return p;
      });
      console.log("productsIncludeColors -> res", data);
    }
  };
  productsIncludeColors();

  const [Colors, setColors] = useState(a);
  const [Sizes, setSizes] = useState();
  // const [cartsItem, setcartsItem] = useState({ cartsItem: {} })
  //const user = useSelector(state => state[MODULE_CART].user)
  // const dispatch = useDispatch()
  function handleChange(value) {}
  function getSizesByColor(idProduct, Colors) {
    var idColor = "";
    switch (Colors) {
      case (Colors = "Trắng"):
        idColor = 1;
        break;
      case (Colors = "Đen"):
        idColor = 2;
        break;
      case (Colors = "Xám"):
        idColor = 3;
        break;
      case (Colors = "Xám"):
        idColor = 4;
        break;
      default:
        break;
    }
    console.log(idColor); // BackEND chỉ cho gửi idProduct + idColor

    //Gọi API , result là 1 pt con của Sizes , pust Result vào Sizes
    //result
    // Obj_Push = {
    //     idProduct: idProduct,
    //     colors: Colors,
    //     idColor: idColor,
    //     sizes:data.data.sizes
    // }
    // setSizes(b) //Coi nhu tat ca da dc push len
  }
  async function getColor(id) {
    console.log(id);
    try {
      let result = await fetchLoading({
        url: "http://localhost:5000/api/products/" + id,
        method: "GET",
        params: id,
      });
      let statusProducts = result.status;
      if (statusProducts === 200) {
        return result.data.data.colors;
      } else {
        message.error(result.data.message);
      }
    } catch (error) {
      console.log(error);
      message.error("Lỗi kết nối đến Server");
    }
  }

  useEffect(() => {}, []);
  function showItems() {
    let resutl = "";
    const items = cartList;
    if (cartList.cartItemsDTO) {
      resutl = cartList.cartItemsDTO.map((item, index) => {
        console.log("showItems -> item", item);
        return (
          <tr key={index}>
            <td className="romove-item">
              <Link
                to={"/detail/" + item.productId}
                title="cancel"
                className="icon"
              >
                <i className="fa fa-trash-o" />
              </Link>
            </td>
            <td className="cart-image">
              <a className="entry-thumbnail" href="/detail">
                <img
                  src={"http://localhost:5000" + item.productImageDTO.url}
                  alt={item.productName}
                />
              </a>
            </td>
            <td className="cart-product-name-info">
              <h4
                className="cart-product-description"
                style={{ maxWidth: "250px" }}
              >
                <Link to={"/detail/" + item.productId}>{item.productName}</Link>
              </h4>
              <div className="row">
                <div className="col-sm-4">
                  <div className="rating rateit-small rateit">
                    <Rate
                      defaultValue={4}
                      disabled
                      style={{ width: "102px", fontSize: "12px" }}
                    ></Rate>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-8">
                    <div
                      className="reviews"
                      style={{ margin: "5px 0 0 15px", fontSize: "12px" }}
                    >
                      (01 Đánh giá)
                    </div>
                  </div>
                </div>
              </div>
              <div></div>
            </td>
            <td className="cart-product-edit">
              {/* getColor return về danh sách màu của product đó */}
              <div className="row">
                MÀU:
                {}
                <Select
                  size="middle"
                  defaultValue={item.color}
                  style={{ width: 100, margin: "0 0 5px 10px" }}
                  onChange={handleChange}
                >
                  {/* <Option value={item.color}>{item.color}</Option> */}

                  {item.colors ? (
                    item.colors.map((c, index) => {
                      console.log("showItems -> c", c);
                      return (
                        <Option key={index} value={c.id}>
                          {c.color}
                        </Option>
                      );
                    })
                  ) : (
                    <Option value={item.color}>{item.color}</Option>
                  )}

                  {/* {(Colors.colorsList && Colors.id === item.productId) ?
                                        Colors.colorsList.map((color, index) => {
                                            return (
                                                <Option key={index} value={color}>{color}</Option>
                                            )
                                        }) : <></>} */}

                  {/* <Option value="Đỏ">Đỏ</Option>
                                    <Option value="Trắng">Trắng</Option>
                                    <Option value="Vàng" disabled>
                                        Vàng
                                </Option> */}
                </Select>
                {/* <button onClick={() => getColor(item.productId)}>Edit</button> */}
              </div>
              <div className="row">
                SIZE :
                <Select
                  size="middle"
                  defaultValue={item.size}
                  style={{
                    width: 100,
                    fontWeight: "bold",
                    margin: "0 0 0 10px",
                  }}
                  onChange={handleChange}
                >
                  <Option value={item.size}>{item.size}</Option>
                  {/* {()=>{ (Sizes) }} */}
                  {/* <Option value="L">L</Option>
                                    <Option value="XL" disabled>XL</Option>
                                    <Option value="XXL">XZL</Option> */}
                </Select>
              </div>
              {/* <a href=" " className="product-edit">Size</a> */}
              <div>{/* className="cart-product-info" */}</div>
            </td>
            <td className="cart-product-quantity">
              <InputNumber
                min={1}
                max={item.quantityOfWarehouse}
                defaultValue={item.quantity}
                size="large"
                style={{
                  fontWeight: "bold",
                  width: 60,
                  borderRadius: "3px",
                }}
                onChange={onChange}
              />
            </td>
            <td className="cart-product-sub-total">
              <span className="cart-sub-total-price">
                {formatNumber(item.price, ".", ".")} VND
              </span>
            </td>
            <td className="cart-product-grand-total">
              <span className="cart-grand-total-price">
                {formatNumber(item.price * item.quantity, ".", ".")} VND
              </span>
            </td>
          </tr>
        );
      });
    } else return <></>;
    return resutl;
  }

  useEffect(() => {
    // setcartsItem({
    //     ...cartsItem,
    //     cartsItem: cartList
    // })
  }, []);

  return <tbody>{showItems()}</tbody>;
}

export default Items;

// eslint-disable-next-line no-lone-blocks
{
  /* <tr>
<td className="romove-item"><a href=" " title="cancel" className="icon"><i className="fa fa-trash-o" /></a></td>
<td className="cart-image">
    <a className="entry-thumbnail" href="detail.html">
        <img src="../assets/images/products/p1.jpg" alt="sa" />
    </a>
</td>
<td className="cart-product-name-info">
    <h4 className="cart-product-description" style={{ maxWidth: "250px" }} ><Link to='/detail'>Áo thun nữ Áo thun nữ </Link></h4>
    <div className="row">
        <div className="col-sm-4">
            <div className="rating rateit-small rateit"><button id="rateit-reset-2" data-role="none" className="rateit-reset" aria-label="reset rating" aria-controls="rateit-range-2" style={{ display: 'none' }} /><div id="rateit-range-2" className="rateit-range" tabIndex={0} role="slider" aria-label="rating" aria-owns="rateit-reset-2" aria-valuemin={0} aria-valuemax={5} aria-valuenow={4} aria-readonly="true" style={{ width: '70px', height: '14px' }}><div className="rateit-selected" style={{ height: '14px', width: '56px' }} /><div className="rateit-hover" style={{ height: '14px' }} /></div></div>
        </div>
        <div className="col-sm-8">
            <div className="reviews">
                (01 Đánh giá)
            </div>
        </div>
    </div>{/* /.row }

    <div >
        {/* className="cart-product-info" }
        {/* Màu  :
            <Select size="small" defaultValue="Trắng" style={{ width: 80 }} onChange={handleChange}>
            <Option value="blue">Xanh</Option>
            <Option value="red">Đỏ</Option>
            <Option value="white">Trắng</Option>
            <Option value="yellow" disabled>
                Vàng
                    </Option>
        </Select> /}
    </div>
</td>
<td className="cart-product-edit">
    SIZE :
    <Select size="middle" defaultValue="lucy" style={{ width: 90, fontWeight: "bold", margin: "0 0 5px 10px" }} onChange={handleChange}>
        <Option value="jack">S</Option>
        <Option value="lucy">L</Option>
        <Option value="Yiminghe">XXL</Option>
        <Option value="disabled" disabled>
            XL
        </Option>
    </Select>
    {/* <a href=" " className="product-edit">Size</a> /}
    <div >
        {/* className="cart-product-info" /}
        MÀU:
        <Select size="middle" defaultValue="Trắng" style={{ width: 90, margin: "0 0 0 10px" }} onChange={handleChange}>
            <Option value="blue">Xanh</Option>
            <Option value="red">Đỏ</Option>
            <Option value="white">Trắng</Option>
            <Option value="yellow" disabled>
                Vàng
                    </Option>
        </Select>

    </div>
</td>
<td className="cart-product-quantity">
    <InputNumber min={1} max={10}
        defaultValue={3}
        size="large"
        style={{
            fontWeight: 'bold',
            width: 60,
            borderRadius: "3px"
        }}
        onChange={onChange} />
</td>
<td className="cart-product-sub-total"><span className="cart-sub-total-price">60 000 VND</span></td>
<td className="cart-product-grand-total"><span className="cart-grand-total-price">60 000 VND</span></td>
</tr> */
}
