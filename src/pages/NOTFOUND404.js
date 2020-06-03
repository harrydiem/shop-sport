import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class NOTFOUND404 extends Component {
    render() {
        return (
           <div className="x-page inner-bottom-sm">
            <div className="row">
        <div className="col-md-12 x-text text-center">
          <h1>404</h1>
          <p>Chúng tôi xin lỗi , Trang bạn yêu câu không được tìm thấy </p>


          <Link to="/"><i className="fa fa-home" /> QUAY LẠI TRANG CHỦ</Link>
        </div>
      </div>
      </div>
        )
    }
}
