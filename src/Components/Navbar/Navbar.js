import React, { Component } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Logo from '../../images/logo.svg';
import './Navbar.css';
import NavList from './NavList';
export class Navbar extends Component {
    render() {
        return (
                <nav className="navbar navbar-expand-md">
                    <img src={Logo}></img>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <NavList></NavList>

                </nav>
        )
    }
}

export default Navbar
