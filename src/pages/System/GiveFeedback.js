import React, { Component } from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

import Form from 'react-bootstrap/Form'

import {Button} from 'react-bootstrap'
import './feedback.css'

export class GiveFeedback extends Component {
    render() {
        return (
            <div className="">
                <h1>Help Us improve the Money Heist Network</h1>
                <Form.Group>
                    <Form.Control className="feedback-enter" type="text" placeholder="Please enter details here..." />
                </Form.Group>

                <Button className="submit">Submit</Button>
                
            </div>
        )
    }
}

export default GiveFeedback
