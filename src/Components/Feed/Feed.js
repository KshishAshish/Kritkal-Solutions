import React, { Component } from 'react'
import list from './Feeditems'
import './Feed.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Feedcol from './Feedcolumns'

export class Feed extends Component {
    render() {
        return (
            <div className="col-12">
                <div className="col-md-6 col-sm-12"><Feedcol></Feedcol></div>
                
                <div className="col-md-6 col-sm-12"><Feedcol></Feedcol></div>

            </div>
        )
    }
}

export default Feed
