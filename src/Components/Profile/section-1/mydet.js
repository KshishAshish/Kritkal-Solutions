import React, { Component } from 'react'
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import list from './Mydetails'
import '../Profile.css'

export class myinfo extends Component {
    render() {
        return (
            <div>
                {list.map(list => (
                    <div className="Profile-items"> 
                        <div className="">
                            <img className="dp" src={list.url1}></img>
                            <h3 className="">
                               Name: {list.name}
                            </h3>
                            
                            <h3>
                                D.O.B: {list.dob}
                            </h3>                                                
                            <h3>
                                Police Dept: {list.dept}
                            </h3> 
                            <h3>
                                Position: {list.position}
                            </h3>                                               
                        </div>
                    </div>
                ))}

            </div>
        )
    }
}

export default myinfo
