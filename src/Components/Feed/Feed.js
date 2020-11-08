import React, { Component } from 'react'
import list from './Feeditems'
import './Feed.css'
import Feedcol from './Feedcolumns'

export class Feed extends Component {
    render() {
        return (
            <div className="">
                <h1 className="feed-header">News Feed</h1>
                <div className=" feedcol "><Feedcol></Feedcol></div>

            </div>
        )
    }
}

export default Feed
