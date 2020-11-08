import React, { useState } from "react"; import { useHistory } from "react-router-dom";
import { FormGroup, FormControl} from "react-bootstrap";
import "./page css/Login.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign} from '@fortawesome/free-solid-svg-icons'

import { Link } from 'react-router-dom'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

export default function Login() {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    let history = useHistory();
    function handelSubmit() {
        if (email === "admin@gmail.com" && password === "admin") { history.push("/home") }
        else { alert("Invalid credentials") }
    }

    return (
        <div className="login-page">
            <div className="Login">
                <h1>
                    <FontAwesomeIcon icon={faDollarSign}></FontAwesomeIcon>
                        Welcome to the Heist
                    <FontAwesomeIcon icon={faDollarSign}></FontAwesomeIcon>
                </h1>
                <div className="login-details mt-3">
                    <FormGroup controlId="email" className="">
                        <div className="formlabel">Email</div>
                        <FormControl className="formControl" placeholder="noreply@xyz.com" onChange={(event) => setEmail(event.target.value)} />
                    </FormGroup>
                    <FormGroup controlId="password" className="" >
                        <div className="formlabel">Password</div>
                        <FormControl className="formControl" placeholder="At least 5 characters" onChange={(event) => setPassword(event.target.value)} />
                    </FormGroup>
                </div>
                <div className="login-button text-center">
                    <Link className=" " onClick={handelSubmit} >
                        Login
                    </Link>
                </div>
            </div>
        </div>
    );
}