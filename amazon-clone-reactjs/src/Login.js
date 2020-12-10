import React, { useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";
import "./Login.css";


function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const login = event => {
        event.preventDefault();

        auth.signInWithEmailAndPassword(email, password).then(
            (auth) => {
                history.push("/");  // Pressing Back buttom will take us to the provided Link
            }
        ).catch(
            (e) => alert(e.message)
        )
    }

    const register = event => {
        event.preventDefault();
        
        auth.createUserWithEmailAndPassword(email, password).then(
            (auth) => {
                history.push("/");
            }
        ).catch(
            (e) => alert(e.message)
        )
    }

    return (
        <div className="login">

            <Link to="/">
                <img
                    className="login__logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" 
                    alt="Amazon logo"
                />
            </Link>

            <div className="login__container">
                <h1>Sign In</h1>
                
                <form>
                    <h5>Email</h5>
                    <input value={email} onChange={event => setEmail(event.target.value)} type="email" />
                    
                    <h5>Password</h5>
                    <input value={password} onChange={event => setPassword(event.target.value)} type="password" />

                    <button className="login__signInButton" type="submit" onClick={login} >Sign In</button>
                </form>

                <p>
                    By Signing-in you agree to Amazon's Conditions of Use & Sale. Please See out Privacy Notice, out Cookies Notice and out Interest-Based Ads Notice.
                </p>

                <button type="submit" className="login_registerButton" onClick={register} >Create your Amazon Account</button>
            </div>

        </div>
    )
}

export default Login
