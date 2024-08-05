import React, { useState } from 'react';
import './App.css';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from './firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Password validation
        if (password !== confirmPassword) {
            setError('Passwords do not match.');
            return;
        }
        else {
            try {
                await createUserWithEmailAndPassword(auth, email, password);
                console.log("Account Created");
                setError('');  // Clear any previous errors on successful registration
                navigate('/');  // Redirect to home or login page after successful registration
            } catch (err) {
                console.log(err);
                setError('Failed to create an account. Please try again.');
            }
        }
    };

    return (
        <div className='signup-container'>
            <form className='signup-form' onSubmit={handleSubmit}>
                <h2>Register</h2>
                <label htmlFor="email">
                    Email:
                    <input type="text" name='email' id='email' placeholder='Enter your Email address' value={email} pattern={"^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"} onChange={(e) => setEmail(e.target.value)} />
                </label>
                <label htmlFor="password">
                    Password:
                    <input type="password" name="password" id="password" placeholder={('password')} pattern='(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}' title="Password must contain at least one number, one uppercase and lowercase letter, and be at least 8 characters long" value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>
                <label htmlFor="confirmPassword">
                    Confirm Password:
                    <input type="password" name="confirmPassword" placeholder={('confirmPassword')} id="confirmPassword" pattern='(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}' title="Enter the same password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                </label>
                {error && <p className="error-message">{error}</p>}
                <button type='submit'>Register</button> <br />
                <p>Already have an account? <Link to="/">Login</Link></p>
            </form>
        </div>
    );
};


// import React, { useState } from 'react'
// import './App.css';
// import { Link, useNavigate } from 'react-router-dom';
// import {auth} from './firebase'
// import { createUserWithEmailAndPassword } from 'firebase/auth';
// export const Register = () => {

//     const [email,setEmail]=useState('')
//     const [password,setPassword]=useState('')
//     const [confirmpassword, setconfirmPassword]=useState('')
//     const navigate=useNavigate()
//     const handleSubmit=async(e)=>{
//         e.preventDefault()
//         try{
//             await createUserWithEmailAndPassword(auth, email, password)
//             console.log("Account Created")
//             navigate('/')
//         }catch(err){
//             console.log(err)
//         }
//     }
//   return (
//     <div className='signup-container'>
//         <form className='signup-form' onSubmit={handleSubmit}>
//             <h2>Regsiter</h2>
//             <label htmlFor="email">
//                 Email:
//                 <input type="text" onChange={(e)=>setEmail(e.target.value)}/>
//             </label>
//             <label htmlFor="password">
//                 Password:
//                 <input type="password" onChange={(e)=>setPassword(e.target.value)}/>
//             </label>
//             <label htmlFor="confirmpassword">
//                 Confirm Password:
//                 <input type="password" onChange={(e)=>setconfirmPassword(e.target.value)}/>
//             </label>
//             <button type='submit'>Register</button> <br />
//             <p>Already have an account? <Link to="/">Login</Link></p>
//         </form>
//     </div>
//   )
// }
