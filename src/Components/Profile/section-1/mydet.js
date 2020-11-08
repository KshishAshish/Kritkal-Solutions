import React, { Component } from 'react'
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import list from './Mydetails'
import '../Profile.css'
import {Link} from 'react-router-dom'

export class myinfo extends Component {
    render() {
        return (
            <div>
                {list.map(list => (
                    <div className="Profile-items"> 
                        <div className="col-12 ">
                            <img className="dp " src={list.url1}></img>
                            <div className="col-12 p-0 text-left">
                                <div className="col-12 d-flex p-0 text-truncate">
                                    <h3 className="col-4">
                                        Name:
                                    </h3>
                                    <h2 className="col-8">
                                        {list.name}
                                    </h2>
                                </div>    
                                
                                <div className="col-12 d-flex p-0 text-truncate">
                                    <h3 className="col-4">
                                        D.O.B:
                                    </h3>
                                    <h2 className="col-8">
                                        {list.dob}
                                    </h2>
                                </div>

                                <div className="col-12 d-flex p-0 text-truncate">
                                    <h3 className="col-4">
                                        Dept:
                                    </h3>
                                    <h2 className="col-8">
                                        {list.dept}
                                    </h2>
                                </div>

                                <div className="col-12 d-flex p-0 text-truncate">
                                    <h3 className="col-4">
                                        Position:
                                    </h3>
                                    <h2 className="col-8">
                                        {list.position}
                                    </h2>
                                </div>
                                <Link to="/my-page" className=" gallery">
                                    <div className="col-12 d-flex justify-content-center p-2 mt-3 text-truncate gallery-button w-100">
                                        Visit my Gallery
                                    </div>
                                </Link>
                            </div>                                               
                        </div>
                    </div>
                ))}

            </div>
        )
    }
}

export default myinfo
