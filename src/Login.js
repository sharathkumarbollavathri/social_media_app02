import React, { useEffect, useState } from 'react'
import './App.css';
import { Link } from 'react-router-dom';
import { auth } from './firebase'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { notify } from './App';


export const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await signInWithEmailAndPassword(auth, email, password)
            console.log("Login successfully")
            // Redirect to home page
            navigate('/home')
            
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <div className='signup-container'>
            <form className='signup-form' onSubmit={handleSubmit}>
                <h2>Login</h2>
                <label htmlFor="email">
                    Email:
                    <input type="text" placeholder='Email' value={email} pattern={"^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"} onChange={(e) => setEmail(e.target.value)} />
                </label>
                <label htmlFor="password">
                    Password:
                    <input type="password" value={password} placeholder={('password')} pattern='(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}' title="Password must contain at least one number, one uppercase and lowercase letter, and be at least 8 characters long" onChange={(e) => setPassword(e.target.value)} />
                </label>
                <button type='submit' onClick={notify}>Login</button> <br />
                <p>Don't have account? <Link to="/register  ">Register</Link></p>
            </form>
        </div>
    )
}
