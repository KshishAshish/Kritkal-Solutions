import React, { Component } from 'react'
import list from './Feeditems'
import './Feed.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Feedcol from './Feedcolumns'

export class Feed extends Component {
    render() {
        return (
            <div className="col-12">
                <h1 className="ml-2 mr-3">News Feed</h1>
                <div className="col-md-12 col-sm-12 feedcol pl-2 p-0"><Feedcol></Feedcol></div>

            </div>
        )
    }
}

export default Feed
