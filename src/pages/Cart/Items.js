import React, { } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Select, InputNumber, Rate, message, Modal } from "antd";
import * as actionCarts from "../../actions/actionCarts";
import { MODULE_NAME as MODULE_CART } from "../../constain/cartConstain";
import { Link, useHistory } from "react-router-dom";
import formatNumber from "../../common/utils/formatNumber";
import { fetchLoading } from "../../common/utils/effect";
import { ExclamationCircleOutlined } from "@ant-design/icons";
function Items(props) {
  const { Option } = Select;
  async function onChange(productId, quantity, index) {  //Quantity
    console.log("Change , Index ,value:", productId, index, quantity)
    if (localStorage.id) {
      let update = cartList
      let newUpdate = {
        cartId: localStorage.id,
        productId: update.cartItemsDTO[index].productId,
        color: update.cartItemsDTO[index].color,
        size: update.cartItemsDTO[index].size,
        quantity: quantity
      }// Xóa giá trong tổng trước
      console.log("object", newUpdate)

      try {
        let result = await fetchLoading({
          url: "http://localhost:5000/api/Carts",
          method: "POST",
          data: {
            cartId: localStorage.id,
            productId: update.cartItemsDTO[index].productId,
            color: update.cartItemsDTO[index].color,
            size: update.cartItemsDTO[index].size,
            quantity: quantity
          }
        });
        let statusProducts = result.status;
        if (statusProducts === 200) {
          props.getCart();
        } else {
          message.error("Đã xảy ra lỗi")
        }
      } catch (error) {
        console.log(error);
        message.error("Lỗi kết nối đến Server");
      }



      //dispatch(actionCarts.FETCH_CART(update))
    } else {
      let update = cartList
      update.totalPrice -= update.cartItemsDTO[index].price * update.cartItemsDTO[index].quantity // Xóa giá trong tổng trước
      update.cartItemsDTO[index].quantity = quantity
      update.totalPrice += update.cartItemsDTO[index].quantity * update.cartItemsDTO[index].price
      console.log(update)
      dispatch(actionCarts.FETCH_CART(update))
      localStorage.setItem('dataCart', JSON.stringify(update))
      history.push("/cart") //Load lai cap nhat
    }
  }
  const history = useHistory()
  const cartList = useSelector((state) => state[MODULE_CART].carts);
  const dispatch = useDispatch()
  function deleteItem(id, color, size, index) {
    Modal.confirm({
      title: "Xóa sản phẩm khỏi giỏ hàng ?",
      icon: <ExclamationCircleOutlined />,
      okText: "Xóa",
      cancelText: "Hủy",
      async onOk() {
        try {
          let result = await fetchLoading({
            url: "http://localhost:5000/api/carts/" + localStorage.id + "/" + id, // 1 userId
            method: "DELETE",
            data: {
              color: "" + color,
              size: "" + size,
            },
          });
          let statusProducts = result.status;
          if (statusProducts === 200) {
            props.getCart();
          } else {
            message.error(result.data.message);
          }
        } catch (error) {
          console.log(error);
          message.error("Lỗi kết nối đến Server");
        }
      },
      onCancel() { },
    });
  }

  function deleteItemClient(productId, quantity, price, index) {
    console.log("Xóa productID , Index :", productId, index)
    let update = cartList
    update.cartItemsDTO.splice(index, 1)
    update.countCart = update.cartItemsDTO.length
    update.totalPrice -= quantity * price
    console.log(update)

    if (update.cartItemsDTO.length === 0) {
      dispatch(actionCarts.FETCH_CART({}))
      localStorage.removeItem('dataCart')
      dispatch(actionCarts.COUNT_CART(0))
    }
    else {
      dispatch(actionCarts.FETCH_CART(update))
      localStorage.setItem('dataCart', JSON.stringify(update))
      dispatch(actionCarts.COUNT_CART(update.cartItemsDTO.length))
    }
    history.push("/cart")
  }
  function handleChange(value) {
    console.log(value);
  }
  function showItems() {
    // const dataList = (cartList) ? cartList.cartItemsDTO : JSON.parse(localStorage.getItem('dataCart')).cartItemsDTO
    console.log("showItems -> cartList.cartItemsDTO", cartList.cartItemsDTO)
    let resutl = "";
    // const items = cartList;
    if (cartList) {
      resutl = cartList.cartItemsDTO.map((item, index) => {
        return (
          <tr key={index} >
            <td className="romove-item">
              <a title="Xóa" className="icon">
                <i
                  className="fa fa-trash-o"
                  onClick={() =>
                    (localStorage.id) ? deleteItem(item.productId, item.color, item.size, index) : deleteItemClient(item.productId, item.quantity, item.price, index)
                  }
                />
              </a>
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
              <div className="row">
                <span className="col-sm-5">Màu:</span>
                <div className="nameColor col-sm-7">{item.color}</div>
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
                max={5}
                defaultValue={item.quantity}
                size="large"
                style={{
                  fontWeight: "bold",
                  width: 60,
                  borderRadius: "3px",
                }}
                onChange={(value) => onChange(item.productId, value, index)}
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

  return <tbody>{showItems()}</tbody>;
}
export default Items;
//Code Ninh
// const productIds = cartList.cartItemsDTO
//   ? cartList.cartItemsDTO.map((p) => p.productId)
//   : [];
// const productsIncludeColors = async () => {
//   const arr = [];
//   productIds.forEach((id) => {
//     arr.push(getColor(id));
//   });
//   const res = await Promise.all(arr);
//   if (!cartList.cartItemsDTO){
//   } else {
//     const data = cartList.cartItemsDTO.map((p, index) => {
//       p.colors = res[index];
//       return p;
//     });
//     console.log("productsIncludeColors -> res", data);
//   }
// };
// productsIncludeColors();
// const [cartsItem, setcartsItem] = useState({ cartsItem: {} })
//const user = useSelector(state => state[MODULE_CART].user)
// const dispatch = useDispatch()
