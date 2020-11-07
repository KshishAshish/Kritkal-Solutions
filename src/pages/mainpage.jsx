import React, { Component } from 'react';
import '../Components/App/App.css';


import Nav from '../Components/Navbar/Navbar';
import Profile from '../Components/Profile/Profile';
import Feed from '../Components/Feed/Feed';

export class mainpage extends Component {
    render() {
        return (
            <div>
                <Nav></Nav>
                <div className="d-flex">
                    <div className="profile"><Profile></Profile></div>
                    <div className="feed"><Feed></Feed></div>
                </div>
            </div>
        )
    }
}

export default mainpage
