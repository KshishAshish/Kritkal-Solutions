import React, { Component } from 'react'
import list from './images'
import './Settings.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Nav from '../../Components/Navbar/Navbar'
import list1 from '../../Components/Profile/section-1/Mydetails'
export class settings extends Component {
  render() {
    return (
      <div className="settings-page">
          <Nav></Nav>
          <div className="col-12">
            <div className="col-4">
              {list1.map(list1 => (
                  <div className="ml-5 d-flex align-items-center">
                    <img className="profile-photo" src={list1.url1}></img>
                    <div className="ml-4 my-description">
                      <div>
                        Name: {list1.name}
                      </div>
                      <div>
                        Position: {list1.position}
                      </div>
                      <div>
                        Department: {list1.dept}
                      </div>
                    </div>
                  </div>
                ))}
            </div>           
            <div className="col-12 text-center">
            
              {list.map(list => (
                <div className="">
                    <img className="image-gallery" src={list.url1}></img>
                    <img className="image-gallery" src={list.url2}></img>
                    <img className="image-gallery" src={list.url1}></img>
                </div>
              ))}
            </div>
          </div>
      </div>

    )
  }
}

export default settings
