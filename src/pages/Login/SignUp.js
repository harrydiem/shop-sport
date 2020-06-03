import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import { Form, Input, message, Button } from 'antd'

SignUp.propTypes = {
  onSubmit: PropTypes.func,
  Create: PropTypes.bool,
  isLoading: PropTypes.bool
}
SignUp.defaulProps = {
  onSubmit: null, //gt mac dinh
  Create: false,
  isLoading: false,
}

function SignUp(props) {
  const { onSubmit, Create, isLoading } = props
  const [form] = Form.useForm();
  //const [DataCreate, setDataCreate] = useState({ emailCreate: "", name: "", phone: "", pass: "", pass2: "" })

  function handelSubmit(values) {
    if (!onSubmit) return;

    if (values.pass === values.pass2) { //Check Password
      onSubmit(values)
    } else {
      message.warning('Mật khẩu ko trùng khớp')
    }
  }
  useEffect(() => {
    // effect
    console.log("Vào useEffect , Create: ", Create)
    if (Create) {//True là ĐK thành công
      form.resetFields(); //reset
    }

    return () => {
      // cleanup
    }
  })



  return (
    <div className="col-md-6 col-sm-6 create-new-account">
      <h4 className="checkout-subtitle">TẠO TÀI KHOẢN MỚI</h4>

      <Form onFinish={handelSubmit} form={form} className="register-form outer-top-xs">
        <div className="form-group">
          <label className="info-title" >
            Địa chỉ Email <span>*</span>
          </label>
          <Form.Item
            name="emailCreate"
            rules={[
              { required: true, message: 'Vui lòng nhập địa chỉ Email !' },
              { pattern: /^[a-z][a-z0-9_.]{1,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/, message: 'Bạn cần nhập đúng định dạng Email' }
            ]}
          >
            <Input
              placeholder="Nhập địa chỉ email..."
              className="form-control unicase-form-control text-input"
              id="Email1"
            />
          </Form.Item>
        </div>
        <div className="form-group">
          <label className="info-title" htmlFor="exampleInputEmail1">Tên <span>*</span></label>
          <Form.Item
            name="name"
            rules={[
              { required: true, message: 'Vui lòng nhập tên !' },
            ]}
          >
            <Input
              // defaultValue={DataCreate.name}
              placeholder="Nhập tên..."
              className="form-control unicase-form-control text-input"
              id="name1"
            />
          </Form.Item>
        </div>

        <div className="form-group">
          <label className="info-title" htmlFor="exampleInputEmail1">SĐT <span>*</span></label>
          <Form.Item
            name="phone"
            rules={[
              { required: true, message: 'Vui lòng nhập số điện thoại !' },
              { pattern: /(09|01[2|6|8|9])+([0-9]{8})\b/, message: "Số điện thoại chưa đúng định dạng" }
            ]}
          >
            <Input
              placeholder="Nhập số điện thoại..."
              className="form-control unicase-form-control text-input"
              id="exampleInputEmail1"
            />
          </Form.Item>
        </div>
        <div className="form-group">
          <label className="info-title" htmlFor="exampleInputEmail1">Mật khẩu <span>*</span></label>
          <Form.Item
            name="pass"
            rules={[
              { required: true, message: 'Vui lòng nhập mật khẩu !' },
              { pattern: /(?=.{6,})/, message: "Mật khẩu không được ít hơn 6 ký tự" }
            ]}
          >
            <Input.Password
              placeholder="Nhập mật khẩu..."
              className="form-control unicase-form-control text-input"
              id="exampleInputEmail1"
            />
          </Form.Item>
        </div>
        <div className="form-group">
          <label className="info-title" htmlFor="exampleInputEmail1">Nhập lại mật khẩu<span>*</span></label>

          <Form.Item
            name="pass2"
            rules={[
              { required: true, message: 'Vui lòng nhập lại mật khẩu !' },

            ]}
          >
            <Input.Password
              placeholder="Nhập lại mật khẩu..."
              name="pass2"
              className="form-control unicase-form-control text-input"
              id="exampleInputEmail1"
            />
          </Form.Item>
        </div>


        <Button htmlType="submit" size="large" type="primary" loading={isLoading} className="btn-upper btn btn-primary checkout-page-button">Đăng Ký</Button>
      </Form>
    </div >


  )

}
export default SignUp

  // function handleChange(e) {
  //   setDataCreate({
  //     ...DataCreate,
  //     [e.target.name]: e.target.value
  //   })
  // }