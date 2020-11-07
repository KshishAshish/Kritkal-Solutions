import React, { Component } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './Navbar.css';
import {Nav} from 'react-bootstrap';
import list from './MenuItems';


export class Nav_menu extends Component {
    render() {
        return (
                <Nav collapseOnSelect expand="md" className="">
                    {list.map(list => (
                                <Nav.Item className="">
                                    <Nav.Link className="navlinks mr-2" href={list.url}> {list.title}</Nav.Link>
                                </Nav.Item>
                                ))}

                </Nav>
        )
    }
}

export default Nav_menu
