import React, { useEffect, useState } from 'react'
import SignIn from './SignIn'
import SignUp from './SignUp'
import { withRouter, useHistory } from 'react-router-dom'
import { message } from 'antd';
import { fetchLoading } from '../../common/utils/effect';


function Login() {
  const [Create, setCreate] = useState({ onCreate: false })
  const [isLoading, setIsLoading] = useState({ isLoadingCreate: false, isLoadingLogin: false })
  const history = useHistory()

  async function onSubmitCreate(formValue) {
    const newUser = {
      email: formValue.emailCreate,
      firstName: "H ",
      lastName: formValue.name,
      dateOfBirth: "1999-01-01",
      phoneNumber: formValue.phone,
      password: formValue.pass,
    }
    setIsLoading({
      ...isLoading,
      isLoadingCreate: true
    })
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
        if (Create.onCreate === false) {
          setCreate({
            onCreate: true
          })
          setIsLoading({
            ...isLoading,
            isLoadingCreate: false
          })
          message.success('Đăng ký thành công')
        }
      } else {
        setCreate({
          onCreate: false
        })
        setIsLoading({ ...isLoading, isLoadingCreate: false })
        message.error(result.data.message) //Sever trả về message : "Thất bại"
      }
    } catch (error) {
      console.log(error)
      setIsLoading({
        ...isLoading,
        isLoadingCreate: false
      })
      message.error("Lỗi kết nối đến Server !!")

    }
  }

  async function onLogin(user) {
    console.log("send: ", user)
    setIsLoading({
      ...isLoading,
      isLoadingLogin: true
    })
    try {
      const result = await fetchLoading({
        url: 'http://localhost:5000/api/Users/authenticate',
        method: 'POST',
        data: user
      })

      // console.log("resutl : ", result)
      const statusLogin = result.status
      if (statusLogin === 200) {

        message.success("Đăng nhập thành công !")
        history.goBack()
      } else
        message.error(result.data.message)
      setIsLoading({
        ...isLoading,
        isLoadingLogin: false
      })

    } catch (error) {
      console.log(error)
      setIsLoading({
        ...isLoading,
        isLoadingLogin: false
      })
      message.error("Lỗi kết nối đến Server !!")
    }

  }
  useEffect(() => {
    // effect

    return () => {
      // cleanup
    }
  })


  return (
    <div className="container">
      <div className="sign-in-page">
        <div className="row">
          {/* Sign-in */}
          <SignIn isLoading={isLoading.isLoadingLogin} onLogin={onLogin} />
          {/* Sign-in */}
          {/* create a new account */}
          <SignUp isLoading={isLoading.isLoadingCreate} Create={Create.onCreate} onSubmit={onSubmitCreate} />
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
