import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import SiderDemo from "./SiderDemo"
import App from './component/App'
import 'antd/dist/antd.css'
import { createStore } from 'redux'
import * as serviceWorker from './serviceWorker';
import rootReducer from './reducers';

const Store = createStore(rootReducer)

ReactDOM.render(<App Store={Store} />, document.getElementById('root'));
// ReactDOM.render(<SiderDemo/> , document.getElementById('root'));

serviceWorker.unregister();
