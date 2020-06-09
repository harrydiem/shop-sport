import Axios from "axios";

/**
 * 
 * @param {*} url 
 * @param {*} data 
 * @param {*} method 
 */
export const fetchLoading = async ({
    url,
    data,
    method,
    params,
    headers
}) => {
    return await Axios({
        url,
        data,
        method,
        params,
        headers: { Authorization: 'Bearer ' + localStorage.token }
    }).then(result => result)
        .catch(e => e.response
            //Trả về message fail
            // if (!e) return console.log("SEVER ERROR")
            //     return e.response.data

            // console.log(e.response)
        )
}