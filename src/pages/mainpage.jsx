import React, { Component } from 'react';
import '../Components/App/App.css';


import Nav from '../Components/Navbar/Navbar';
import Profile from '../Components/Profile/Profile';
import Feed from '../Components/Feed/Feed';
import Requests from '../Components/Sidebar-2/Profile'

export class mainpage extends Component {
    render() {
        return (
            <div>
                <Nav></Nav>
                <div className="col-12">
                    <div className="profile col-sm-12 col-md-3 p-0"><Profile></Profile></div>
                    <div className="feed col-sm-12 col-md-6 "><Feed></Feed></div>
                    <div className="profile col-sm-12 col-md-3 p-0"><Requests></Requests></div>
                </div>
            </div>
        )
    }
}

export default mainpage
