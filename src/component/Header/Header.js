import React, { Component } from 'react'
import HeaderMenuTop from './HeaderMenuTop'
import HeaderNav from './HeaderNav'
import HeaderMain from './HeaderMain'

export default class Header extends Component {
    render() {
        return (
            <header className="header-style-1">
                {/* ============================================== TOP MENU ============================================== */}
                <HeaderMenuTop/>
                {/* /.header-top */}
                {/* ============================================== TOP MENU : END ============================================== */}
                {/* /.main-header */}
                <HeaderMain/>                
                {/* ============================================== NAVBAR ============================================== */}
                {/* /.header-nav */}
                <HeaderNav/>
                {/* ============================================== NAVBAR : END ============================================== */}
            </header>
        )
    }
}
