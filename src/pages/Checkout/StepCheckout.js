import React from 'react'
import { Steps } from 'antd'
const { Step } = Steps;
function StepCheckout(currents, steps, content) {
    return (
        <div>
            <Steps current={currents}>
                {steps.map(item => (
                    <Step key={item.title} title={item.title} />
                ))}
            </Steps>
            <div className="steps-content">{steps[currents].content}</div>
        </div>
    )
}

export default StepCheckout
