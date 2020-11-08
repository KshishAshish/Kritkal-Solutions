import React, { Component } from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

import './System.css'
import Nav from '../../Components/Navbar/Navbar'
import Tabs from './Tabs'

export class System extends Component {
    render() {
        return (
            <div className="settings-page">
                <Nav></Nav>
                <div className="col-12 settings  d-flex">
                    <Tabs></Tabs>
                </div>
            </div>
        )
    }
}

export default System
