import React, { Component } from 'react'

import { Router } from './Router'
import { Provider } from 'react-redux'

export class App extends Component {
    render() {
        return (
            <Provider store={this.props.Store}><Router /></Provider>
        )
    }
}
export default (App)
