import React, { Component } from 'react';
import '../Components/App/App.css';


import Nav from '../Components/Navbar/Navbar';
import Feed from '../Components/Feed/Feed';

export class settings extends Component {
    render() {
        return (
            <div>
                <Nav></Nav>
                <div className="d-flex">
                    <div className="feed"><Feed></Feed></div>
                </div>
            </div>
        )
    }
}

export default settings
