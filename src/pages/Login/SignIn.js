import React, { } from 'react'
import PropTypes from 'prop-types'
import { Input, Form, Button } from 'antd'

SignIn.propTypes = {
  onLogin: PropTypes.func,
  isLoading: PropTypes.bool
}
SignIn.defaulProps = {
  onLogin: null, //gt mac dinh
  isLoading: false
}

//Bug : SignUp xong SignIn sẽ hiện 2 thông báo "DN thanh cong" , "DK thanh cong"
//fix: lay dc message tu API , ko if(status===200) nữa


function SignIn(props) {
  const { onLogin, isLoading } = props
  const [form] = Form.useForm();
  const onFinish = values => {
    if (!SignIn) return;
    onLogin({ account: values.email, password: values.password })
  };
  return (

    <div className="col-md-6 col-sm-6 sign-in">
      <h4 >ĐĂNG NHẬP</h4>
      {/* <p > Welcome to your account.</p> */}
      <div className="social-sign-in outer-top-xs">
        <a href="https://www.facebook.com/" className="facebook-sign-in"><i className="fa fa-facebook" /> Đăng nhập với Facebook</a>
        <a href="https://www.twitter.com/" className="twitter-sign-in"><i className="fa fa-twitter" /> Đăng nhập với Twitter</a>
      </div>
      <Form onFinish={onFinish} className="register-form outer-top-xs" form={form}>
        <div className="form-group">
          <label className="info-title inputEmail" htmlFor="exampleInputEmail1">Địa chỉ Email <span>*</span></label>
          <Form.Item
            name="email"
            rules={[
              { required: true, message: 'Vui lòng nhập địa chỉ Email !' },
              { pattern: /^[a-z][a-z0-9_.]{1,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/, message: 'Không đúng định dạng Email !' }
            ]}

          >
            <Input
              placeholder="Nhập địa chỉ Email..."
              className="form-control unicase-form-control text-input"
              id="InputEmail1"
            />
          </Form.Item>
        </div>
        <div className="form-group">
          <label className="info-title" htmlFor="exampleInputPassword1">Mật khẩu <span>*</span></label>

          <Form.Item
            name="password"
            rules={[
              { required: true, message: 'Vui lòng nhập mật khẩu !' },
            ]}
          >
            <Input.Password
              placeholder="Nhập mật khẩu..."
              type="password"
              className="form-control unicase-form-control text-input"
              id="InputPass1"
            />
          </Form.Item>
        </div>
        <div className="radio outer-xs">
          <label>
            <input type="radio" name="optionsRadios" id="optionsRadios2" defaultValue="option2" />Nhớ mật khẩu
                      </label>
          <a href=" " className="forgot-password pull-right">Bạn quên mật khẩu?</a>
        </div>
        <Button htmlType="submit" size="large" type="primary" loading={isLoading} className="btn-upper btn btn-primary checkout-page-button">Đăng Nhập</Button>
        {/* <button type="submit" className="btn-upper btn btn-primary checkout-page-button">Đăng Nhập</button> */}
      </Form>
    </div >
  )
}

export default (SignIn)