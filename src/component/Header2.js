// import React  from "react";
// // import {Input} from 'antd';
// // import "../../node_modules/antd/dist/antd.css";
// import {BrowserRouter as Router , Route , Link } from "react-router-dom";

// import Home from "./Home";

// const MenuLink = ({lable , to , activeOnlyWhenExact}) => {
//     return(
//         <Route
//         path={to} 
//         exact={activeOnlyWhenExact} 
//         children={({match}) => {
//             var active = match ? 'active nav-link' : 'nav-link';
//             return(
//                 <Link to={to} className={active} >{lable}</Link>
//             )
//         }}
//         />
//     )
// }
// class Header2 extends React.Component {

//     clickFunction(){
//         var textSearch=this.textSearch;
//         alert(textSearch);
//         console.log(textSearch);
//     }    
//     render(){
//         // const { Search } = Input;
//         return(
//             <Router>
//                 <div>
//                  <nav className="navbar navbar-expand-lg navbar-light bg-light">
//                     <span className="navbar-brand" >MY APP</span>
//                     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                     <span className="navbar-toggler-icon" />
//                     </button>
//                     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                     {/* <ul className="navbar-nav mr-auto">
//                         <li className="nav-item">
//                         {/* className active */}
//                         {/* <NavLink to="/" exact activeClassName="active" className="nav-link" >HOME</NavLink> */}
//                         {/* <span className="sr-only">(current)</span> */}
//                         {/* </li>
//                         <li className="nav-item">
//                         <NavLink to="/about" className="nav-link" activeClassName="active">ABOUT</NavLink>
//                         </li>
//                     </ul> */} 
//                     <ul className="navbar-nav mr-auto">
//                         <li className="nav-item">
//                         <MenuLink lable='HomePage' to='/' activeOnlyWhenExact={true} />
//                         </li>
//                         {/* <li className="nav-item">
//                         <MenuLink lable='AboutPage' to='/about' />
//                         </li> */}
//                     </ul>
//                     <form className="form-inline my-2 my-lg-0">
//                         <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
//                         <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>                       
//                     </form>
//                     </div>
//                 </nav>
//             </div>
//             {/* Noi dung */}
//             <div>
//                 <Route path="/" exact  component={Home} />
//                 {/* <Route path="/about" component={About}/> */}
//             </div>
//         </Router>
//         );


//     }

// }

// export default Header2;