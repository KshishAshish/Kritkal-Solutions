import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './SignOut.css';
import { faSignOutAlt} from '@fortawesome/free-solid-svg-icons'
import list from './SignOutOptions'
import {Dropdown} from 'react-bootstrap';


export class Signout extends Component {
    render() {
        return (
            <div>
                <Dropdown className="dropdown">
                <Dropdown.Toggle className="mx-3"><FontAwesomeIcon icon={faSignOutAlt} className="nav-bar-sign-out"/></Dropdown.Toggle>
                <Dropdown.Menu className="bg-transparent mt-2">
                {list.map(list => (
                        <Dropdown.Item className="list-item ">{list.title}</Dropdown.Item>
                        ))}

                </Dropdown.Menu>
                </Dropdown>
            </div>
        )
    }
}

export default Signout
