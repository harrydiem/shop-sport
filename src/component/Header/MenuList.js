

const listMenu = () => {
    let list = [
        {
            key:1,
            to:'/',
            exact:true,
            name:'Trang chủ',
            className:'dropdown yamm-fw'
        },
        {
            key:2,
            to:'/products',
            exact:false,
            name:'Sản phẩm',
            className:'  yamm mega-menu'
        },
        {
            key:3,
            to:'/basketball',
            exact:false,
            name:'Bóng Rổ',
            className:'dropdown mega-menu'
        },
        {
            key:4,
            to:'/gymandrun',
            exact:false,
            name:'Gym & Chạy bộ',
            className:'dropdown hidden-sm'
        },
        {
            key:5,
            to:'/football',
            exact:false,
            name:'Bóng đá',
            className:'dropdown hidden-sm'
        },
        {
            key:6,
            to:'/contact',
            exact:false,
            name:'Liên hệ',
            className:'dropdown'
        },
        {
            key:7,
            to:'/support',
            exact:false,
            name:'Hộ trợ',
            className:'dropdown'
        },
        {
            key:8,
            to:'/promotion',
            exact:false,
            name:'Khuyến mãi',
            className:'dropdown'
        },
        {
            key:9,
            to:'/promotion1',
            exact:false,
            name:'Todays offer',
            className:'dropdown  navbar-right special-menu'
        }
        ]
    return list

    
}
const menu = listMenu()
export default menu

