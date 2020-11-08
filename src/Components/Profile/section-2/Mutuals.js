import React, { Component } from 'react'
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import list from './Suggestions'
import './Mutuals.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'

export class Mutual extends Component {
    render() {
        return (
            <div className="mt-4 text-center">
                {list.map(list => (
                    <div className="suggestion-item col-12 p-0">
                        <div className="pic-block "> 
                            <img className="sug-pic" src={list.url1}></img>
                        </div>
                        <div className="text-block p-2  d-flex align-items-center">
                            <div className="col-11 p-0">        
                                <div className=" suggestion-details text-truncate col-12 p-0">
                                    <div className="mcon-det">
                                        <h2>
                                            Name:
                                        </h2>                             
                                        <h3 className="">
                                            {list.name}
                                        </h3>
                                    </div>
                                    <div className="mcon-det">
                                        <h2>
                                            Mutual Connections:
                                        </h2> 
                                        <h3>
                                            {list.mconnection}
                                        </h3>                                               
                                    </div>
                                </div>
                            </div>
                            <FontAwesomeIcon icon={faPlusCircle} className="justify-content-flex-end add-icon col-1 p-0 "></FontAwesomeIcon>
                        </div>
                    </div>
                ))}

            </div>
        )
    }
}

export default Mutual;
