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

