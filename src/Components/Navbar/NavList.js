import React, { Component } from 'react';
import './NavList.css';
import MenuItems from './MenuItems'

export class NavList extends Component {
    render() {
        return (
            <div>
                <MenuItems></MenuItems>
            </div>
        )
    }
}

export default NavList
