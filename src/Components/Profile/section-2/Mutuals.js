import React, { Component } from 'react'
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import list from './Suggestions'
import './Mutuals.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import sendCon from '../Modals/Add-friend'

export class Mutual extends Component {
    render() {
        return (
            <div className="mt-4 text-center">
                {list.map(list => (
                    <div className="suggestion-item"> 
                        <img className="sug-pic" src={list.url1}></img>
                        <div className=" suggestion-details text-truncate col-8">
                            <div>
                                <h2>
                                    Name:
                                </h2>                             
                                <h3 className="">
                                    {list.name}
                                </h3>
                            </div>
                            <div>
                                <h2>
                                    Mutual Connections:
                                </h2> 
                                <h3>
                                    {list.mconnection}
                                </h3>                                               
                            </div>
                        </div>
                        <sendCon></sendCon>
                        <FontAwesomeIcon icon={faPlusCircle} className="justify-content-flex-end add-icon col-2"></FontAwesomeIcon>
                    </div>
                ))}

            </div>
        )
    }
}

export default Mutual;
