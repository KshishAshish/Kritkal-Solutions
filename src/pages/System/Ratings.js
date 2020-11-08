import React, { Component } from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { Button } from 'react-bootstrap'

import './Ratings.css'
export class Ratings extends Component {
    render() {
        return (
            <div className="Rating-stars">
                <div>
                    <FontAwesomeIcon icon={faStar} className="fastar"></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faStar} className="fastar"></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faStar} className="fastar"></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faStar} className="fastar"></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faStar} className="fastar"></FontAwesomeIcon>
                </div>
                <div>
                    <Button>Submit</Button>
                </div>
            </div>

        )
    }
}

export default Ratings
