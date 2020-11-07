import React, { Component } from 'react'
import list from './Feeditems'
import './Feed.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

export class Feedcol extends Component {
    render() {
        return (
                <div className="">
                    {list.map(list => (
                        <div className="Feed-items">
                            <div className="feed-item-header">
                                <div className="d-flex align-items-center ">
                                    <img className="profilepicture" src={list.url1}></img>
                                    <h2 className="ml-3">
                                        {list.name}
                                    </h2>
                                </div>
                                <div>
                                    <h3>
                                        {list.date}
                                    </h3>
                                    <h3>
                                        {list.time}
                                    </h3>
                                </div>
                            </div>
                            <p>
                                {list.caption}
                            </p>
                            <div className="upload">
                                <img className="uploadpicture" src={list.url2}></img>
                            </div>
                        </div>
                    ))}
                </div>
        )
    }
}

export default Feedcol
