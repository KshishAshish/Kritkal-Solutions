import React, { Component } from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Myinfo from './section-1/mydet'
import Mutuals from './section-2/Mutuals'
export class Profile extends Component {
    render() {
        return (
            <div>
                <Myinfo></Myinfo>
                <Mutuals></Mutuals>
            </div>
        )
    }
}

export default Profile
