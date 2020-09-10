import React, { useState } from 'react'
import "./Login.css"
import { Link, useHistory } from 'react-router-dom'
import { auth } from './firebase';

function Login() {
    const history = useHistory()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signIn = e => {
        e.preventDefault()

        auth.signInWithEmailAndPassword(email, password).then(auth => {
            history.push("/")
        })
        .catch(error => alert(error.message));

        // Firebase login 
    }

    const register = e => {
        e.preventDefault()

        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                // it succesfully create a new user with email and password
                //console.log(auth);
                if (auth) {
                    history.push("/")
                }
            })
        .catch(error => alert(error.message))
        // Firebase register
    }

    return (
        
        <div className="login">
            <Link to="/">
                <img 
                    className="login__logo" 
                    src="https://lh3.googleusercontent.com/proxy/YRBaOJ284OzoyFN3xKZ0krNvKT_SUzNf5Tc859wBXmaXIDSqgUr-66AgWqC7a4vUX93fgJzTXs2x1L8PEGHrqnjGfRtRQJp9_TOBNzUX3NjqAK-Dl01Nt8R4gJ_mWsbA9L-_zgThQWh9ciZm3fxQXlwibdM8wsA"
                />
            </Link>
            <div className="login__container">
                <h1>Sign-in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)}
                    />
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)}
                    />
                    <button type="submit" onClick={signIn} className="login__signInButton">Sign In</button>
                </form>
                <p>
                    By signing-in you agree to the <strong>AMAZON FAKE CLONE</strong> Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and your Interest-Based Ads Notice.
                </p>
                <button onClick={register}
                    className="login__registerButton">Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login
