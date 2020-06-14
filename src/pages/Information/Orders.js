import React, { useEffect, useState } from 'react'
import { fetchLoading } from '../../common/utils/effect'
import { message, PageHeader, Tabs, Button, Statistic, Descriptions, Tag, Result } from 'antd'
import { MoneyCollectOutlined, PhoneOutlined, PhoneTwoTone, UserOutlined, ClockCircleOutlined, CreditCardOutlined, EnvironmentOutlined, DollarOutlined, FileSearchOutlined, CheckCircleOutlined, CloseCircleOutlined, SyncOutlined } from '@ant-design/icons'
import formatNumber from '../../common/utils/formatNumber';

const { TabPane } = Tabs;
const renderContent = (column = 2) => (
    <Descriptions size="small" column={column}>
        <Descriptions.Item label="Khách hàng"><a>Thái Diêm</a></Descriptions.Item>
        <Descriptions.Item label="SĐT">
            <a>0123456789</a>
        </Descriptions.Item>
        <Descriptions.Item label="Ngày" >2017-10-10</Descriptions.Item>
        <Descriptions.Item label="Hình thức thanh toán">Trực tiếp</Descriptions.Item>

        <Descriptions.Item label="Địa chỉ">
            HCM - Q1 - P1 - A
      </Descriptions.Item>
    </Descriptions>
);

function Orders() {
    const [listOrders, setListOrders] = useState([])
    console.log("Orders -> listOrders", listOrders)

    function showStatus(status) {

        let result = ""
        if (status === 0 || status === "0") {
            result = <Tag icon={<ClockCircleOutlined />} color="warning">
                Chờ xác nhận
              </Tag>
        }
        if (status === 1 || status === "1") {
            result = <Tag icon={<SyncOutlined spin />} color="processing">
                Đang giao
              </Tag>
        }
        if (status === 2 || status === "2") {
            result = <Tag icon={<CheckCircleOutlined />} color="success">
                Đã giao
          </Tag>
        }
        if (status === 3 || status === "3") {
            result = <Tag icon={<CloseCircleOutlined />} color="error">
                Đã hủy
              </Tag>
        }
        return result

    }


    useEffect(() => {
        const url = 'http://localhost:5000/api/Orders/users/' + localStorage.id
        async function loadOrders() {
            try {
                let result = await fetchLoading({
                    url: url,
                    method: 'GET',
                    // params: { userId: localStorage.id }
                })
                let statusProducts = result.status
                if (statusProducts === 200) {
                    console.log(result.data)
                    setListOrders(result.data.data)
                }
            } catch (error) {
                console.log(error)
                message.error("Lỗi kết nối đến Server")
            }

        }
        loadOrders()
    }, [])

    return (
        <div className="panel-group checkout-steps" id="accordion">
            {/* checkout-step-01  */}
            <div className="panel panel-default checkout-step-01">
                {/* panel-heading */}
                <div className="panel-heading">
                    <h4 className="unicase-checkout-title">
                        <a
                            style={{
                                display: "inline-block",
                                marginRight: " 10px",
                                padding: "15px 20px"
                            }}
                        >
                            ĐƠN HÀNG CỦA TÔI
                        </a>
                    </h4>
                </div>
                {/* panel-heading */}
                <div id="collapseOne" className="panel-collapse collapse in">
                    {/* panel-body  */}
                    <div className="panel-body">


                        <div >
                            {/* Cần check emty */}
                            {listOrders.length !== 0 ?
                                listOrders.map((order, index) => {
                                    return (
                                        <div key={index}>
                                            <div className="shopping-cart-table ">
                                                <div
                                                    className="ant-page-header site-page-header-responsive ant-page-header-ghost"
                                                    style={{
                                                        backgroundColor: "#f7f7f7",
                                                        boxShadow: "5px 5px 5px #d6d6d6",
                                                        borderRadius: "5px",
                                                        marginBottom: "15px",
                                                    }}
                                                >
                                                    <div className="ant-page-header-heading">
                                                        <div className="ant-page-header-heading-left">
                                                            <span className="ant-page-header-heading-title" title="Title">
                                                                ĐƠN HÀNG {order.id}
                                                            </span>
                                                            <span
                                                                className="ant-page-header-heading-sub-title"
                                                                title="This is a subtitle"
                                                            >
                                                                {showStatus(order.status)}
                                                            </span>
                                                        </div>
                                                        <span className="ant-page-header-heading-extra">
                                                            <Button type="primary">
                                                                <FileSearchOutlined /> Xem chi tiết
                                                </Button>
                                                        </span>
                                                    </div>
                                                    <div className="ant-page-header-content">
                                                        <div className="content" style={{ display: "flex" }}>
                                                            <div className="main">
                                                                <div className="ant-descriptions ant-descriptions-small">
                                                                    <div className="ant-descriptions-view">
                                                                        <table>
                                                                            <tbody>
                                                                                <tr className="ant-descriptions-row">
                                                                                    <td className="ant-descriptions-item" colSpan={1}>
                                                                                        <span className="ant-descriptions-item-label ant-descriptions-item-colon">
                                                                                            <UserOutlined style={{ color: '#1890ff' }} /> Khách hàng
                                                                             </span>
                                                                                        <span className="ant-descriptions-item-content">
                                                                                            <a>{order.userName}</a>                                                                        </span>
                                                                                    </td>
                                                                                    <td className="ant-descriptions-item" colSpan={1}>
                                                                                        <span className="ant-descriptions-item-label ant-descriptions-item-colon">
                                                                                            <PhoneTwoTone /> SĐT
                                                                      </span>
                                                                                        <span className="ant-descriptions-item-content">
                                                                                            <a>0123456789</a>
                                                                                        </span>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr className="ant-descriptions-row">
                                                                                    <td className="ant-descriptions-item" colSpan={1}>
                                                                                        <span className="ant-descriptions-item-label ant-descriptions-item-colon">
                                                                                            <ClockCircleOutlined style={{ color: '#1890ff' }} /> Ngày
                  </span>
                                                                                        <span className="ant-descriptions-item-content">
                                                                                            <a>{(order.dateCreated)}</a>
                                                                                        </span>
                                                                                    </td>
                                                                                    <td className="ant-descriptions-item" colSpan={1}>
                                                                                        <span className="ant-descriptions-item-label ant-descriptions-item-colon">
                                                                                            <CreditCardOutlined style={{ color: '#1890ff' }} /> Hình thức thanh toán
                  </span>
                                                                                        <span className="ant-descriptions-item-content">
                                                                                            <Tag> Trực tiếp</Tag>
                                                                                        </span>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr className="ant-descriptions-row">
                                                                                    <td className="ant-descriptions-item" colSpan={2}>
                                                                                        <span className="ant-descriptions-item-label ant-descriptions-item-colon">
                                                                                            <EnvironmentOutlined style={{ color: '#1890ff' }} /> Địa chỉ
                  </span>
                                                                                        <span className="ant-descriptions-item-content">
                                                                                            {}
                                                                                        </span>
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="extra">
                                                                <div
                                                                    style={{
                                                                        display: "flex",
                                                                        width: "max-content",
                                                                        justifyContent: "flex-end"
                                                                    }}
                                                                >
                                                                    <div className="ant-statistic">
                                                                        <div className="ant-statistic-title" style={{ fontSize: "20px", fontWeight: 500, color: '#4f4b4b' }}><DollarOutlined /> Giá Trị</div>
                                                                        <div className="ant-statistic-content">
                                                                            <span className="ant-statistic-content-prefix">$</span>
                                                                            <span className="ant-statistic-content-value">
                                                                                {formatNumber(order.totalPrice, ".", ".")}
                                                                             Đ
            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )

                                })


                                :
                                <div><Result
                                    status="404"
                                    title="KHÔNG TÌM THẤY"
                                    subTitle="Bạn chưa có đơn hàng nào cả"
                                /></div>
                            }
                        </div >





                    </div>
                    {/* panel-body  */}
                </div>
                {/* row */}
            </div>
        </div>

    )
}

export default Orders
