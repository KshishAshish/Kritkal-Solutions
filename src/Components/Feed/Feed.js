import React, { Component } from 'react'
import list from './Feeditems'
import './Feed.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Feedcol from './Feedcolumns'

export class Feed extends Component {
    render() {
        return (
            <div className="d-flex">
                <Feedcol></Feedcol>
                <Feedcol></Feedcol>
            </div>
        )
    }
}

export default Feed
