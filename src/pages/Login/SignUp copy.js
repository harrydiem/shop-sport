// import React, { useState } from 'react'
// import { Form, Input } from 'antd'
// import 'antd/dist/antd.css'

// function SignUp() {
//   const [Data, setData] = useState({ email: "", name: "", phone: "", password: "", password2: "" })

//   const onFinish = values => {
//     console.log('Success:', values);
//   };
//   function handleChange(e) {
//     setData({
//       ...Data,
//       [e.target.name]: e.target.value
//     })
//     console.log(Data)
//   }
//   // function handleSubmit(e) {
//   //   e.preventDefault()
//   //   console.log(e.target.)
//   // }

//   return (
//     <div className="col-md-6 col-sm-6 create-new-account">
//       <h4 className="checkout-subtitle">TẠO TÀI KHOẢN MỚI</h4>
//       {/* <p className="text title-tag-line">Create your new account.</p> */}
//       <Form onFinish={onFinish} className="register-form outer-top-xs" type="form">

//         <label className="info-title" >
//           Địa chỉ Email <span>*</span>
//         </label>

//         <Form.Item
//           name="email"
//           rules={[
//             { required: true, message: 'Vui lòng nhập địa chỉ Email !' },
//             { pattern: /^[a-z][a-z0-9_.]{1,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/, message: 'Bạn cần nhập đúng định dạng Email' }
//           ]}

//         >
//           <Input
//             className="form-control unicase-form-control text-input"
//             id="exampleInputEmail1"
//             onChange={handleChange}
//           />
//         </Form.Item>

//         <label className="info-title" htmlFor="exampleInputEmail1">Tên <span>*</span></label>
//         <Form.Item
//           name="name"
//           rules={[
//             { required: true, message: 'Vui lòng nhập tên !' },

//           ]}

//         >
//           <Input
//             className="form-control unicase-form-control text-input"
//             id="exampleInputEmail1"
//             onChange={handleChange}
//           />
//         </Form.Item>
//         {/* <input onChange={handleChange} name="name" type="text" className="form-control unicase-form-control text-input" id="exampleInputEmail1" /> */}


//         <label className="info-title" htmlFor="exampleInputEmail1">SĐT <span>*</span></label>
//         <Form.Item
//           name="phone"
//           rules={[
//             { required: true, message: 'Vui lòng nhập số điện thoại !' },

//           ]}

//         >
//           <Input
//             className="form-control unicase-form-control text-input"
//             id="exampleInputEmail1"
//             onChange={handleChange}
//           />
//         </Form.Item>
//         {/* <input onChange={handleChange} name="phone" type="text" className="form-control unicase-form-control text-input" id="exampleInputEmail1" /> */}

//         <label className="info-title" htmlFor="exampleInputEmail1">Mật khẩu <span>*</span></label>
//         <Form.Item
//           name="password"
//           rules={[
//             { required: true, message: 'Vui lòng nhập mật khẩu !' },

//           ]}

//         >
//           <Input
//             className="form-control unicase-form-control text-input"
//             id="exampleInputEmail1"
//             onChange={handleChange}
//           />
//         </Form.Item>
//         {/* <input onChange={handleChange} name="password" type="password" className="form-control unicase-form-control text-input" id="exampleInputEmail1" /> */}

//         <label className="info-title" htmlFor="exampleInputEmail1">Nhập lại mật khẩu <span>*</span></label>

//         <Form.Item
//           name="password2"
//           rules={[
//             { required: true, message: 'Vui lòng nhập lại mật khẩu !' },

//           ]}

//         >
//           <Input
//             className="form-control unicase-form-control text-input"
//             id="exampleInputEmail1"
//             onChange={handleChange}
//           />
//         </Form.Item>
//         {/* <input onChange={handleChange} type="password" name="password2" className="form-control unicase-form-control text-input" id="exampleInputEmail1" /> */}


//         <button type="submit" className="btn-upper btn btn-primary checkout-page-button">Đăng Ký  </button>
//       </Form>
//     </div>


//   )

// }
// export default SignUp
