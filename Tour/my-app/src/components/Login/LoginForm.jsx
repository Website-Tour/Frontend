import React, { useState } from 'react'
import './LoginForm.css';
import { Outlet, Link } from "react-router-dom";
import { FaUser, FaLock } from "react-icons/fa";

const LoginForm = () => {

    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
        console.log(user)
    }

    const submitForm = (e) => {
        e.prevenDefault();
        user = {
            email: user.email,
            password: user.password
        }

        console.log()
    }



    return (
        <div className='wrapper'>
            <form onSubmit={submitForm}>
                <h1>Login</h1>
                <div className='input-box'>
                    <input type="text" placeholder='Email'
                        name='email' onChange={handleChange} value={user.email} required />
                    <FaUser className='icon' />

                </div>
                <div className='input-box'>
                    <input type="password" placeholder='Password' name='password' onChange={handleChange} value={user.password} required />
                    <FaLock className='icon' />
                </div>

                <div className='remember-forgot'>
                    <label ><input type='checkbox' />Remember me</label>
                    <a href="#">Forgot Password</a>
                </div>

                <button type='submit'>Login</button>

                <div className='register-link'>
                    <p>Don't have an account? <Link to="/register">Register</Link> </p>

                </div>
            </form>
        </div>
    )
}

export default LoginForm