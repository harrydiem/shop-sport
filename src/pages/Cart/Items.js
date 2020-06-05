import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Select, InputNumber, Rate, message, Modal } from "antd";
// import * as actionCarts from "../../actions/actionCarts";
import { MODULE_NAME as MODULE_CART } from "../../constain/cartConstain";
import { Link } from "react-router-dom";
import formatNumber from "../../common/utils/formatNumber";
import { fetchLoading } from "../../common/utils/effect";
import { ExclamationCircleOutlined } from "@ant-design/icons";

const { Option } = Select;
function onChange(value) {}

function Items(props) {
  const cartList = useSelector((state) => state[MODULE_CART].carts);
  console.log("Items -> cartList", cartList);
  // const dispatch = useDispatch();
  function deleteItem(id, color, size, index) {
    // console.log("delete: ", id, color, size, index);
    Modal.confirm({
      title: "Xóa sản phẩm khỏi giỏ hàng ?",
      icon: <ExclamationCircleOutlined />,
      okText: "Xóa",
      cancelText: "Hủy",
      async onOk() {
        try {
          let result = await fetchLoading({
            url: "http://localhost:5000/api/carts/1/" + id, // 1 userId
            method: "DELETE",
            data: {
              color: "" + color,
              size: "" + size,
            },
          });
          let statusProducts = result.status;
          if (statusProducts === 200) {
            props.getCart();
            // var cartdelete = cartList;
            // cartdelete.cartItemsDTO.splice(index, 1);
            // console.log("onOk -> cart", cartdelete);
            // dispatch(actionCarts.FETCH_CART(cartdelete));
            // console.log("onOk -> cartList", cartList);
            message.success("Đã xóa sản phẩm khỏi giỏ hàng !");
          } else {
            message.error(result.data.message);
          }
        } catch (error) {
          console.log(error);
          message.error("Lỗi kết nối đến Server");
        }
      },
      onCancel() {},
    });
  }

  function handleChange(value) {
    console.log(value);
  }
  function showItems() {
    let resutl = "";
    const items = cartList;
    if (cartList.cartItemsDTO) {
      resutl = cartList.cartItemsDTO.map((item, index) => {
        return (
          <tr key={index}>
            <td className="romove-item">
              <a title="Xóa" className="icon">
                <i
                  className="fa fa-trash-o"
                  onClick={() =>
                    deleteItem(item.productId, item.color, item.size, index)
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
