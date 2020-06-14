import React, { Component } from 'react'
// import MainLayout from './MainLayout'
import {
    BrowserRouter,
    Switch,
    Route,
} from 'react-router-dom'
import Main from './Main'
import Products from '../pages/Products/Products'
import Home from '../pages/Home/Home'
import NOTFOUND404 from '../pages/NOTFOUND404'
import Login from '../pages/Login/Login'
import Cart from '../pages/Cart/Cart'
import Detail from '../pages/Detail/Detail'
import Wishlists from '../pages/Wishlists/Wishlists'
import Checkout from '../pages/Checkout/Checkout'
import Account from '../pages/Information/Account'
import Information from '../pages/Information/Information'
import ChangePass from '../pages/Information/ChangePass'
import Addresses from '../pages/Information/Addresses'
import Orders from '../pages/Information/Orders'
// import Checkout2 from '../pages/Checkout/Checkout2'

export class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" >
                        <Main>
                            <Switch>
                                <Route exact path="/" component={Home} />
                                <Route exact path="/products" component={Products} />
                                <Route exact path="/login" component={Login} />
                                <Route exact path="/cart" component={Cart} />
                                <Route exact path='/detail/:id' component={Detail} />
                                <Route exact path='/wishlists' component={Wishlists} />
                                <Route exact path='/checkout' component={Checkout} />
                                <Route exact path='/myaccount' component={Login} />
                                {/* <Route exact path='/orders' component={Orders} /> */}
                                <Route path='/information/' component={Information}>
                                    <Switch>
                                        <Information>
                                            <Route exact path="/information/account" component={Account} />
                                            <Route exact path="/information/changepass" component={ChangePass} />
                                            <Route exact path="/information/addresses" component={Addresses} />
                                            <Route exact path="/information/orders" component={Orders} />
                                        </Information>
                                    </Switch>
                                </Route>
                                <Route component={NOTFOUND404} />
                            </Switch>
                        </Main>
                    </Route>
                </Switch>
            </BrowserRouter>
        )
    }
}
export default (Router)

