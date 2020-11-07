import React, { Component } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandHoldingHeart, faSearch} from '@fortawesome/free-solid-svg-icons'
import './Navbar.css';
import Button from 'react-bootstrap/Button';
import {FormControl, Form, Navbar, Nav} from 'react-bootstrap';
import list from './MenuItems';
import Signout from './Signout';
export class Nav_head extends Component {
    render() {
        return (
                <Navbar className="navigation justify-content-between align-items-center" >
                        <div className="d-flex align-items-center w-50">
                            <Navbar.Brand><FontAwesomeIcon icon={faHandHoldingHeart} className="nav-bar-logo"/></Navbar.Brand>

                            <Form inline className="search-bar">
                                <FormControl type="text" placeholder="Search" className=" mr-sm-2" />
                                <Button type="submit" className=" nav-bar-search-icon"><FontAwesomeIcon icon={faSearch} /></Button>
                            </Form>
                        </div>
                        <div className="d-flex align-items-center w-50 justify-content-end">
                            <Nav collapseOnSelect expand="md" className="">
                                {list.map(list => (
                                            <Nav.Item>
                                                <Nav.Link className="navlinks mr-2"> {list.title}</Nav.Link>
                                            </Nav.Item>
                                            ))}

                            </Nav>
                            <Signout className=""></Signout>    
                        </div>
                </Navbar>
        )
    }
}

export default Nav_head
