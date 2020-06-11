import React, { useEffect } from 'react'
import { fetchLoading } from '../../common/utils/effect'
import { message } from 'antd'

function Orders() {

    async function loadOrders() {

        try {
            let result = await fetchLoading({
                url: `http://localhost:5000/api​/Orders​/users​/${localStorage.id}`,
                method: 'GET',

            })
            let statusProducts = result.status
            if (statusProducts === 200) {
                console.log(result.data)


            }
        } catch (error) {
            console.log(error)
            message.error("Lỗi kết nối đến Server")
        }

    }
    useEffect(() => {
        loadOrders()
    }, [])

    return (
        <div>


        </div>
    )
}

export default Orders
