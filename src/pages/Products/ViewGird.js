import React from 'react'
// import imgGym from '../../common/assets/images/products/gym-black.jpg'
// import imgNB from '../../common/assets/images/products/NB-shoes-black.jpg'
// import { Rate } from 'antd'
// import { Link } from 'react-router-dom'
import ItemGird from './ItemGird'

function ViewGird() {
    return (
        <div className="tab-pane active " id="grid-container">
            <div className="category-product">
                <div className="row">
                    <ItemGird />
                </div>
                {/* /.row */}
            </div>
            {/* /.category-product */}
        </div>

    )
}

export default ViewGird
