import React, { useState } from "react";
import {FormGroup, FormControl, FormLabel } from "react-bootstrap";
import "./page css/Login.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign, faMoneyBill} from '@fortawesome/free-solid-svg-icons'

import {Link} from 'react-router-dom'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

export default function Login() {

  return (
    <div className="Login">
        <h1>
            <FontAwesomeIcon icon={faDollarSign}></FontAwesomeIcon> 
                Welcome to the Heist
            <FontAwesomeIcon icon={faDollarSign}></FontAwesomeIcon>
        </h1>
        <div className="login-details mt-3">
            <FormGroup controlId="email" className="">
            <FormLabel className="formlabel">Email</FormLabel>
            <FormControl className="formControl" placeholder="noreply@xyz.com"/>
            </FormGroup>
            <FormGroup controlId="password" className="" >
            <FormLabel className="formlabel">Password</FormLabel>
            <FormControl className="formControl" placeholder="At least 5 characters"/>
            </FormGroup>
        </div>
        <div className="login-button text-center">
            <Link to="/home" className=" ">
            Login
            </Link>
        </div>
    </div>
  );
}