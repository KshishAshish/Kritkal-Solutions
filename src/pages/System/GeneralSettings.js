import React, { Component } from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEdit} from '@fortawesome/free-solid-svg-icons'

import {Button} from 'react-bootstrap'
import './generalsettings.css'

export class GiveFeedback extends Component {
    render() {
        return (
            <div className="">
                <h1>General Account Settings</h1>

                <div>
                    <div className="details">
                        <div className="det-label">
                            Name
                        </div>
                        <div>
                            Raquel Murillo
                        </div>
                        <Button className="faedit"><FontAwesomeIcon icon={faEdit} ></FontAwesomeIcon></Button>
                    </div>
                    <div className="details">
                        <div  className="det-label">
                            Date of Birth
                        </div>
                        <div>
                            10-09-1999
                        </div>
                        <Button className="faedit"><FontAwesomeIcon icon={faEdit} ></FontAwesomeIcon></Button>
                    </div>
                    <div className="details">
                        <div  className="det-label">
                            Department
                        </div>
                        <div>
                            National Police Corps
                        </div>
                        <Button className="faedit"><FontAwesomeIcon icon={faEdit} ></FontAwesomeIcon></Button>
                    </div>
                    <div className="details">
                        <div  className="det-label">
                            Designation
                        </div>
                        <div>
                            Inspector
                        </div>
                        <Button className="faedit"><FontAwesomeIcon icon={faEdit} ></FontAwesomeIcon></Button>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default GiveFeedback
