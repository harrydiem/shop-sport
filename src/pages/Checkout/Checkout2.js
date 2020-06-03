// import React, { useState } from 'react'
// import { Select, Steps, Button } from 'antd';
// import { PlusOutlined } from '@ant-design/icons';
// import DrawerCheckout from './DrawerCheckout';
// const { Option } = Select;
// const { Step } = Steps;

// const steps = [
//     {
//         title: 'First',
//         content: 'First-content',
//     },
//     {
//         title: 'Second',
//         content: 'Second-content',
//     },
//     {
//         title: 'Last',
//         content: 'Last-content',
//     },
// ];
// function Checkout() {
//     const [visible, setvisible] = useState(false)
//     const showDrawer = () => setvisible(true)

//     const onClose = () => setvisible(false)

//     return (
//         <>
//             <Button type="primary" onClick={showDrawer}>
//                 <PlusOutlined /> New account
//         </Button>
//             {DrawerCheckout(onClose, visible)}


//         </>
//     )
// }

// // export default Checkout

// // import React, { useState, useEffect } from 'react'
// // import { Steps, Button, message } from 'antd';
// // import StepCheckout from './StepCheckout';
// // const { Step } = Steps;

// // const steps = [
// //     {
// //         title: 'First',
// //         content: 'First-content',
// //     },
// //     {
// //         title: 'Second',
// //         content: 'Second-content',
// //     },
// //     {
// //         title: 'Last',
// //         content: 'Last-content',
// //     },
// // ];
// // function Checkout() {
// //     const [current, setCurrent] = useState(0)

// //     // const [vissble, setvisible] = useState(false)
// //     // const showDrawer = () => setvisible(true)
// //     // const onClose = () => setvisible(false)
// //     const next = () => {
// //         const currentChange = current + 1;
// //         setCurrent({ currentChange });
// //     }

// //     const prev = () => {
// //         const currentChange = current - 1;
// //         setCurrent({ currentChange });
// //     }
// //     useEffect(() => {
// //         console.log(current)
// //         return () => {
// //             // cleanup
// //         }
// //     }, [current])


// //     return (
// //         <>
// //             <div>
// //                 {StepCheckout(current, steps)}
// //                 <Button style={{ margin: '0 8px' }} onClick={prev}>
// //                     Previous
// //                 </Button>
// //                 <Button type="primary" onClick={() => message.success('Processing complete!')}>
// //                     Done
// //                         </Button>
// //                 <Button type="primary" onClick={next}>
// //                     Next
// //                         </Button>

// //                 <div className="steps-content">content</div>

// //                 {/* <div className="steps-content">{steps[current].content}</div>

// //                 <div className="steps-action">

// //                     {current < steps.length - 1 && (
// //                         <Button type="primary" onClick={() => next()}>
// //                             Next
// //                         </Button>
// //                     )}
// //                     {current === steps.length - 1 && (
// //                         <Button type="primary" onClick={() => message.success('Processing complete!')}>
// //                             Done
// //                         </Button>
// //                     )}
// //                     {current > 0 && (
// //                         <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
// //                             Previous
// //                         </Button>
// //                     )}
// //             </div> */}
// //             </div>

// //         </>
// //     )
// // }

// // export default Checkout

