import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './SignOut.css';
import { faSignOutAlt} from '@fortawesome/free-solid-svg-icons'

import {Link} from 'react-router-dom'


export class Signout extends Component {
    render() {
        return (
            <div>
                <Link className="mx-3" to="/"><FontAwesomeIcon icon={faSignOutAlt} className="nav-bar-sign-out"/>
                </Link>
            </div>
        )
    }
}

export default Signout
