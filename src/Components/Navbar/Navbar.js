import React, { Component } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCogs, faMoneyBill, faSearch} from '@fortawesome/free-solid-svg-icons'

import {Link} from 'react-router-dom'
import './Navbar.css';
import Button from 'react-bootstrap/Button';
import {FormControl, Form, Navbar} from 'react-bootstrap';
import Signout from '../SignOut/Signout';

export class Nav_head extends Component {
    render() {
        return (
                <Navbar className="navigation justify-content-between align-items-center" >
                        <div className="d-flex align-items-center w-50">
                            <Link to="/home">
                                <Navbar.Brand><FontAwesomeIcon icon={faMoneyBill} className="nav-bar-logo"/></Navbar.Brand>
                            </Link>

                            <Form inline className="search-bar">
                                <FormControl type="text" placeholder="Search" className=" mr-sm-2" />
                                <Button type="submit" className=" nav-bar-search-icon"><FontAwesomeIcon icon={faSearch} /></Button>
                            </Form>
                        </div>

                        <div className="d-flex align-items-center w-50 justify-content-end">
                            <Link to="/settings"><FontAwesomeIcon icon={faCogs} className="nav-bar-setting-logo"></FontAwesomeIcon></Link>
                            
                            <Signout className=""></Signout>    
                        </div>
                </Navbar>
        )
    }
}

export default Nav_head
