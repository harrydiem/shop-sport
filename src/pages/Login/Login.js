import React, { useState } from 'react'
import SignIn from './SignIn'
import SignUp from './SignUp'
import { withRouter, useHistory } from 'react-router-dom'
import { message } from 'antd';
import { fetchLoading } from '../../common/utils/effect'
import * as actionUser from '../../actions/actionUser'
import { useDispatch } from 'react-redux';

function Login() {
  const [Create, setCreate] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isLoadingSignIn, setIsLoadingSignIn] = useState(false)
  const history = useHistory()
  const dispatch = useDispatch()

  async function onSubmitCreate(formValue) {
    setIsLoading(true) //button Loading....
    const newUser = {
      email: formValue.emailCreate,
      firstName: "H ",
      lastName: formValue.name,
      dateOfBirth: "1999-01-01",
      phoneNumber: formValue.phone,
      password: formValue.pass,
    }
    console.log("send: ", newUser)
    try {
      let result = await fetchLoading({
        url: 'http://localhost:5000/api/Users',
        method: 'POST',
        data: newUser
      })
      const statusCreate = result.status
      if (statusCreate === 200) {
        // Xác nhận đk thành công gửi onCreate=True đến Sign để crean inputValue
        if (Create === false) {
          setIsLoading(false) //turn off loading
          message.success('Đăng ký thành công')
          setCreate(true) // clean form

        }
      } else {
        setCreate(false)
        setIsLoading(false)
        message.error(result.data.message) //Sever trả về message : "Thất bại"
      }
    } catch (error) {
      console.log(error)
      setIsLoading(false)
      message.error("Lỗi kết nối đến Server !!")

    }
  }

  async function onLogin(user) {
    setIsLoadingSignIn(true)
    try {
      const result = await fetchLoading({
        url: 'http://localhost:5000/api/Users/authenticate',
        method: 'POST',
        data: user
      })
      const statusLogin = result.status
      if (statusLogin === 200) {
        message.success("Đăng nhập thành công !")
        var loginLocal = {
          id: result.data.data.id,
          name: result.data.data.lastName,
          token: result.data.data.token,
        }
        // localStorage.setItem('info', JSON.stringify(loginLocal))
        localStorage.setItem('token', loginLocal.token)
        localStorage.setItem('id', loginLocal.id)
        localStorage.setItem('name', loginLocal.name)
        dispatch(actionUser.FETCH_USER(result.data.data))

        history.goBack()
      } else
        message.error(result.data.message)
      setIsLoadingSignIn(false)
    } catch (error) {
      console.log(error)
      setIsLoadingSignIn(false)
      message.error("Lỗi kết nối đến Server !!")
    }

  }

  return (
    <div className="container">
      <div className="sign-in-page">
        <div className="row">
          {/* Sign-in */}
          <SignIn isLoading={isLoadingSignIn} onLogin={onLogin} />
          {/* Sign-in */}
          {/* create a new account */}
          <SignUp isLoading={isLoading} Create={Create} onSubmit={onSubmitCreate} />
          {/* create a new account */}
        </div>{/* /.row */}
      </div>{/* /.sigin-in*/}
    </div>
  )
}

export default withRouter(Login)

// import React, { Component } from 'react'
// // import {Input} from 'antd'
// import SignIn from './SignIn'
// import SignUp from './SignUp'
// export default class Login extends Component {

//   onSubmitCreate = (formValue) => {
//     console.log("formValue:", formValue)
//   }
//   render() {

//     return (
// <div className="container">
//   <div className="sign-in-page">
//     <div className="row">
//       {/* Sign-in */}
//       <SignIn />
//       {/* Sign-in */}
//       {/* create a new account */}
//       <SignUp onSubmit={this.onSubmitCreate} />
//       {/* create a new account */}
//     </div>{/* /.row */}
//   </div>{/* /.sigin-in*/}
// </div>
//     )
//   }
// }
