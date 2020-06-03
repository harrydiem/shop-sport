import React, { Component } from 'react'
import { Steps, Button, message } from 'antd';
import CheckInfor from './CheckInfor';
import CheckoutOption from './CheckoutOption';


const { Step } = Steps;

const steps = [
    {
        title: 'Xác Nhận Thông Tin',
        content: CheckInfor(),
    },
    {
        title: 'Phương Thức Thanh Toán',
        content: CheckoutOption(),
    },
    {
        title: 'Kiểm Tra Đơn Hàng',
        content: 'Thông tin đơn hàng',
    },
    {
        title: 'Hoàn Thành',
        content: 'Đơn hàng đang được xác nhận',
    },
];



class Checkout2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 0,
        };
    }

    next() {
        const current = this.state.current + 1;
        this.setState({ current });
    }

    prev() {
        const current = this.state.current - 1;
        this.setState({ current });
    }

    render() {
        const { current } = this.state;
        return (
            <div className="container">
                <Steps current={current}>
                    {steps.map(item => (
                        <Step key={item.title} title={item.title} />
                    ))}
                </Steps>
                <div className="steps-content">{steps[current].content}</div>
                <div className="steps-action">
                    {current < steps.length - 1 && (<>
                        <Button type="primary" className="btnCheckout" style={{ float: "left" }} size="large" onClick={() => this.next()}>
                            QUAY LẠI GIỎ HÀNG
                        </Button>
                        <Button type="primary" className="btnCheckout" style={{ float: "right" }} size="large" onClick={() => this.next()}>
                            BƯỚC KẾ TIẾP
                    </Button>
                    </>
                    )}
                    {current === steps.length - 1 && (
                        <Button type="primary" className="btnCheckout" size="large" onClick={() => message.success('Processing complete!')}>
                            ĐẶT HÀNG
                        </Button>
                    )}
                    {current > 0 && (
                        <Button size="large" className="btnCheckout" style={{ margin: '0 8px', float: "right" }} onClick={() => this.prev()}>
                            QUAY LẠI
                        </Button>
                    )}
                </div>
            </div>
        );
    }
}
export default Checkout2

